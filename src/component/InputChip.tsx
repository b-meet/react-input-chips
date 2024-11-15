import React from 'react';
import './styles.css';

type TInputChips = {
    chips: string[];
    inputValue: string;
    setChips: (val: string[]) => void;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    keysToTriggerChipConversion?: string[];
    needWhiteSpace?: boolean;
    validate?: () => boolean;
    disabled?: boolean;
    placeholder?: string;
    nextPlaceholder?: string;
    removeBtnSvg?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    chipStyles?: React.CSSProperties;
    containerStyles?: React.CSSProperties;
};

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
        if (
            keysToTriggerChipConversion.includes(e.key) &&
            (!validate || validate())
        ) {
            const regex = new RegExp(
                `[${keysToTriggerChipConversion.join('')}]`,
                'g'
            );
            const chip = inputValue.trim().replace(regex, '');

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
