# React-input-chips

A lightweight, dependency-free, and highly customizable React component for handling chip inputs.

![react-input-chips demo](https://github.com/user-attachments/assets/ba33d40e-63ea-46fa-8011-d418ea211a0a)

## Features 🚀

-   **Zero Config Styling**: CSS is automatically injected. No more manual imports!
-   **Deep Customization**: Full control over styles and classes for every element (`chip`, `input`, `container`, `closeBtn`).
-   **Accessibility**: Full keyboard navigation (`ArrowLeft`, `Backspace`) and ARIA labels.
-   **Validation**: Built-in support for input validation before chip creation.
-   **TypeScript**: Fully typed for a great developer experience.
-   **Lightweight**: Minimal dependencies for maximum performance.

## Demo

[Sandbox example](https://codesandbox.io/p/sandbox/shf8wx)

## Installation

Install react-input-chips with npm

```bash
  npm install react-input-chips
```

## Usage/Examples

You just need to import the `<InputChips/>` component in the file you want the **react-input-chip** in and pass the required props that's it. All set!

**Note:** Styles are now automatically injected, so no need to import the CSS file manually!

Hers is the simple plain example
```javascript
import { useState } from "react";
import { InputChips } from "react-input-chips";

const MyComponent = () => {
	const [chips, setChips] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState("");

	return (
		<InputChips
			chips={chips}
			inputValue={inputValue}
			setChips={setChips}
			setInputValue={setInputValue}
		/>
	);
};

export default MyComponent;


```

### Validation

If you want to add a validation function and the error message then you might try something like the following in the parent component

```javascript
const MyComponent = () => {
    const [chips, setChips] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<{inputValueError?: string}>({});

    const validation = () => {
        const tempErr: {inputValueError?: string} = {};
        if (!inputValue.trim().length) {
            tempErr.inputValueError = 'atleast add one message';
        }

        setError(tempErr);
        return Object.keys(tempErr).length <= 0;
    };

    return (
        <InputChips
            chips={chips}
            inputValue={inputValue}
            setChips={setChips}
            setInputValue={setInputValue}
            errorMsg={error?.inputValueError}
            validate={validation}
        />
    );
};

```

## Props and information

I have for you here all the props supported as of now. (\* these are required props)

| Prop                        | Default Value                        | Description                                                                                                                                                                                                                                                 |
| --------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chips\*                     | -                                    | This is a react `state` for storing the chips, it has to be an array                                                                                                                                                                                        |
| setChips\*                  | -                                    | This is the `setState` for chips state                                                                                                                                                                                                                      |
| inputValue\*                | -                                    | This will be a react `state` for handling the user input before it turns into a chip                                                                                                                                                                        |
| setInputValue\*             | -                                    | This is the `setState` for input value                                                                                                                                                                                                                      |
| keysToTriggerChipConversion | `[Enter', ',']`                      | The keys entered in this array will trigger the chip conversion from the input value. (The values allowed in the array are mentioned below in the typescript interface, so you will be able to add the keys from that set only)                             |
| backspaceToRemoveChip       | false                                | This will remove the chip when the user hits backspace after the `inputvalue` is cleared                                                                                                                                                                    |
| validate                    | return value `true`                  | This is the validation function which must return a boolean value either `true` or `false` based on the conditions you want the field value to be valid or convertible into a chip. If the value is valid then n then only a chip will be created out of it |
| disabled                    | false                                | Enable that to disable the input field                                                                                                                                                                                                                      |
| placeholder                 | -                                    | A placeholder for input field                                                                                                                                                                                                                               |
| nextPlaceholder             | -                                    | Placeholder after the first chip is created                                                                                                                                                                                                                 |
| removeBtnSvg                | is an `SVG` which looks like close/X | You can add any HTML element as of now, but it is better to add an `SVG` element                                                                                                                                                                            |
| chipStyles                  | -                                    | You add any styles supported by CSS will be added as inline styles for the chip hence, the highest priority is given to your styles                                                                                                                         |
| chipClassName               | -                                    | Class name for individual chips                                                                                                                                                                                                                             |
| containerStyles             | -                                    | You can add the CSS styles for the whole input container itself                                                                                                                                                                                             |
| containerClassName          | -                                    | Class name for the container wrapper                                                                                                                                                                                                                        |
| inputStyle                  | -                                    | Inline styles for the input field                                                                                                                                                                                                                           |
| inputClassName              | -                                    | Class name for the input field                                                                                                                                                                                                                              |
| closeBtnStyle               | -                                    | Inline styles for the close button                                                                                                                                                                                                                          |
| closeBtnClassName           | -                                    | Class name for the close button                                                                                                                                                                                                                             |
| errorMsg                    | -                                    | It's the error message you want to display and expects a string as its value                                                                                                                                                                                |

keysToTriggerChipConversion - Allowed key codes

```
'ShiftRight' | 'ShiftLeft' | 'ControlLeft' | 'ControlRight' | 'AltRight'
| 'AltLeft' | 'MetaLeft' | 'MetaRight' | 'Tab' | 'Enter' | 'Backspace'
| 'Space' | 'Comma' | 'Period' | 'Slash' | 'Semicolon' | 'ArrowLeft'
| 'ArrowRight';
```

## About

This project started as a simple utility and has grown into a robust package with version 1.0.0!

I am actively maintaining this package. If you find any issues or have feature requests, please open an issue or discussion on GitHub. Pull requests are always welcome!

## Support

For support, email at meetbhalodiya1030@gmail.com or open a discussion/issue

## Authors

-   [@b-meet](https://github.com/b-meet)
