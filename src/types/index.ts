export interface TInputChips {
    chips: string[];
    inputValue: string;
    setChips: React.Dispatch<React.SetStateAction<string[]>>;
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
    backspaceToRemoveChip?: boolean;
}
