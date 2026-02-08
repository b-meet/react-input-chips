import React from 'react';
import './styles.css';
import { TInputChips, AllowedKeys } from '../types';

const InputChips = ({
    chips,
    setChips,
    inputValue,
    setInputValue,
    keysToTriggerChipConversion = ['Enter', 'Comma'],
    validate,
    disabled = false,
    placeholder,
    nextPlaceholder,
    removeBtnSvg,
    chipStyles,
    containerStyles,
    backspaceToRemoveChip = false,
    errorMsg,
}: TInputChips) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (keysToTriggerChipConversion.includes('Space')) {
            setInputValue(value.trim());
        } else {
            setInputValue(value);
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            backspaceToRemoveChip &&
            e.key === 'Backspace' &&
            inputValue.trim() === '' &&
            chips.length > 0
        ) {
            e.preventDefault();
            const updatedChips = [...chips];
            updatedChips.pop();
            setChips(updatedChips);
            return;
        }

        if (e.key === 'ArrowLeft' && inputValue.trim() === '' && chips.length > 0) {
            // Logic to select last chip could be added here, but for now we are just cleaning up
        }

        const isKeyAllowed = (key: string): key is AllowedKeys => {
            return (keysToTriggerChipConversion as AllowedKeys[]).includes(
                key as AllowedKeys
            );
        };

        if (isKeyAllowed(e.code) && (!validate || validate())) {
            let chip = inputValue.trim();

            if (keysToTriggerChipConversion.some((key) => key.length === 1)) {
                const regex = React.useMemo(() => {
                    return new RegExp(
                        `[${keysToTriggerChipConversion
                            .filter((key) => key.length === 1)
                            .map((key) =>
                                key.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
                            )
                            .join('')}]`,
                        'g'
                    );
                }, [keysToTriggerChipConversion]);

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
        <>
            <section
                className={
                    errorMsg?.length
                        ? 'ric-chip-input-wrapper ric-chip-input-wrapper-error'
                        : 'ric-chip-input-wrapper'
                }
                style={containerStyles ?? {}}
                onClick={() => inputRef.current?.focus()}
            >
                {chips.map((chip, index) => (
                    <div
                        key={chip + index}
                        data-testid={`input-value-chip-${index}`}
                        className="ric-chip"
                        style={chipStyles ?? {}}
                    >
                        {chip}
                        <button
                            type="button"
                            className="ric-closeBtn"
                            data-testid={`remove-chip-btn-${index}`}
                            onClick={(e) => removeChip(e, chip + index)}
                            aria-label={`Remove chip ${chip}`}
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
                    ref={inputRef}
                    className="ric-chip-input"
                    type="text"
                    placeholder={
                        disabled
                            ? ''
                            : chips.length
                                ? nextPlaceholder
                                : placeholder
                    }
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    disabled={disabled}
                />
            </section>
            {errorMsg?.length && (
                <p className="ric-error-msg-wrapper">{errorMsg}</p>
            )}
        </>
    );
};

export default InputChips;
