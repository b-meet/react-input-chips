# React-input-chips

**Author's message**:
We have a stable release version renamed as [`react-chips-input`](https://www.npmjs.com/package/react-input-chips) please move to that package with newer version as new changes will only be there in that package...

Thanks :)

------------

A package with minimum dependencies and maximum customization.

If you want an input field whose value converts to a customizable chip on a click of keys of your choice then this is the best package for you.

You have full control over

-   validation of the field
-   styling of the chips
-   styling of the wrapper
-   chip conversion trigger

## Demo

![react-chips](https://github.com/user-attachments/assets/ba33d40e-63ea-46fa-8011-d418ea211a0a)

## Installation

Install react-input-chips with npm

```bash
  npm install react-input-chips
```

## Usage/Examples

You just need to import the `<InputChips/>` component in the file you want the **react-input-chip** in and pass the required props that's it. All set!

**One important thing** for the default styling of the `<InputChips/>` is that you need to explicitly add CSS file import in the parent or higher or the same component.
The following is the path to it

```bash
import "../node_modules/react-input-chip-beta/dist/index.css";
```

Hers is the simple plain example

```javascript
import { useState } from "react";
import { InputChips } from "react-input-chip-beta";

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
| containerStyles             | -                                    | You can add the CSS styles for the whole input container itself                                                                                                                                                                                             |
| errorMsg                    | -                                    | It's the error message you want to display and expects a string as its value                                                                                                                                                                                |

keysToTriggerChipConversion - Allowed key codes

```
'ShiftRight' | 'ShiftLeft' | 'ControlLeft' | 'ControlRight' | 'AltRight'
| 'AltLeft' | 'MetaLeft' | 'MetaRight' | 'Tab' | 'Enter' | 'Backspace'
| 'Space' | 'Comma' | 'Period' | 'Slash' | 'Semicolon' | 'ArrowLeft'
| 'ArrowRight';
```

## Additional Info

Hey guys,

It is the first npm package I ever released and it's gonna be so much fun. No worries, The supported props in the current version do not have any issues, in case you face any please open an issue or discussion, a PR for a fix would be much appreciated.

I am excited to get some initial issues and feature requests and will work on them on priority until version 1.0.0 😅 also after that.

What are the future visions as of now?

-   Remove the explicit addition of the CSS file path
-   Add 100% test cases for the component
-   `removeBtnSvg` expects any HTML element, I want to enforce only SVG element
-   Add a few more features to it

Any suggestions are welcome.

## Support

For support, email meetbhalodiya1030@gmail.com or open a discussion/issue

## Authors

-   [@b-meet](https://github.com/b-meet)
