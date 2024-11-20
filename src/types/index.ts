export type AllowedKeys =
    | 'ShiftRight'
    | 'ShiftLeft'
    | 'ControlLeft'
    | 'ControlRight'
    | 'AltRight'
    | 'AltLeft'
    | 'MetaLeft'
    | 'MetaRight'
    | 'Win'
    | 'Tab'
    | 'Enter'
    | 'Backspace'
    | 'Space'
    | 'Comma'
    | 'Period'
    | 'Slash'
    | 'Semicolon'
    | 'ArrowLeft'
    | 'ArrowRight';

export interface TInputChips {
    chips: string[];
    inputValue: string;
    setChips: React.Dispatch<React.SetStateAction<string[]>>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    keysToTriggerChipConversion?: AllowedKeys[];
    validate?: () => boolean;
    disabled?: boolean;
    placeholder?: string;
    nextPlaceholder?: string;
    removeBtnSvg?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    chipStyles?: React.CSSProperties;
    containerStyles?: React.CSSProperties;
    backspaceToRemoveChip?: boolean;
}
