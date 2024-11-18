import React from 'react';
import './styles.css';
import {TInputChips} from '../types';

const InputChips = ({
    chips,
    setChips,
    inputValue,
    setInputValue,
    keysToTriggerChipConversion = ['Enter', ','],
    needWhiteSpace = true,
    validate,
    disabled = false,
    placeholder,
    nextPlaceholder,
    removeBtnSvg,
    chipStyles,
    containerStyles,
}: TInputChips) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (needWhiteSpace) {
            setInputValue(e.target.value);
        } else {
            setInputValue(e.target.value.trim());
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const printableKeys = keysToTriggerChipConversion.filter(
            (key) => key.length === 1
        );
        const namedKeys = keysToTriggerChipConversion.filter(
            (key) => key.length > 1
        );

        if (
            namedKeys.includes(e.key) ||
            (printableKeys.includes(e.key) &&
                inputValue.trim() !== '' &&
                (!validate || validate()))
        ) {
            let chip = inputValue.trim();
            if (printableKeys.length > 0) {
                const regex = new RegExp(
                    `[${printableKeys
                        .map((key) =>
                            key.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
                        )
                        .join('')}]`,
                    'g'
                );
                chip = chip.replace(regex, '');
            }

            if (chip) {
                setChips([...chips, chip]);
                setInputValue('');
            }

            e.preventDefault();
        }
    };

    const removeChip = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        chipToRemove: string
    ) => {
        e.preventDefault();
        const filteredChips = chips.filter(
            (chip, index) => chip + index !== chipToRemove
        );
        setChips(filteredChips);
    };

    return (
        <div className="chip-input-warpper" style={containerStyles ?? {}}>
            {chips?.map((chip, index) => (
                <div
                    key={chip + index}
                    data-testid={`input-value-chip-${index}`}
                    className="chip"
                    style={chipStyles ?? {}}
                >
                    {chip}
                    <button
                        type="button"
                        className="closeBtn"
                        data-testid={`remove-chip-btn-${index}`}
                        onClick={(e) => removeChip(e, chip + index)}
                    >
                        {removeBtnSvg || (
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height={15}
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            </svg>
                        )}
                    </button>
                </div>
            ))}
            <input
                className="chip-input"
                type="text"
                placeholder={
                    disabled ? '' : chips.length ? nextPlaceholder : placeholder
                }
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                disabled={disabled}
            />
        </div>
    );
};

export default InputChips;
