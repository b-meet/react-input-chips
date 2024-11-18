# React-input-chips

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

You just need to import the `<InputChip/>` component in the file you want the **react-input-chip** in and pass the required props that's it. All set!

**One important thing** for the default styling of the `<InputChip/>` is that you need to explicitly add CSS file import in the parent or higher or same component. 
The following is the path to it

```bash
import "../node_modules/react-input-chip-beta/dist/index.css";
```


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



## Props and information

I have for you here all the props supported as of now. (* these are required props)

| Prop                        | Default Value                       | Description                                                                                                                                                                                                                                                 |
| --------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chips\*                     | -                                   | This is a react state for storing the chips, it has to be an array                                                                                                                                                                                          |
| setChips\*                  | -                                   | This is the setState for chips state                                                                                                                                                                                                                        |
| inputValue\*                | -                                   | This will be a react state for handling the user input before it turns into a chip                                                                                                                                                                          |
| setInputValue\*             | -                                   | This is the setState for inputValue                                                                                                                                                                                                                         |
| keysToTriggerChipConversion | `[Enter', ',']`                     | The keys entered in this array will be used to trigger the chip conversion from input value. (the value in the array are case sensitive so if it does work try changing the case)                                                                           |
| needWhiteSpace              | true                                | This is determine if you can keep the whitespace in your input value                                                                                                                                                                                        |
| validate                    | return value `true`                 | This is the validation function which must return a boolean value either `true` or `false` based on the conditions you want the field value to be valid or convertible into a chip. If the value is valid then n then only a chip will be created out of it |
| disabled                    | false                               | Enable that to diable the input field                                                                                                                                                                                                                       |
| placeholder                 | -                                   | A placeholder for input field                                                                                                                                                                                                                               |
| nextPlaceholder             | -                                   | Placeholder after first chip is created                                                                                                                                                                                                                     |
| removeBtnSvg                | is a `SVG` which looks like close/X | You can add any HTML element as of now, but better just add a `SVG` element                                                                                                                                                                                 |
| chipStyles                  | -                                   | You add any styles supported by CSS it will be added a iniline styles for the chip hence highest priority is given to your stylesheet                                                                                                                       |
| containerStyles             | -                                   | You can add the CSS styles for the whole input container itself                                                                                                                                                                                             |


## Why Beta

Hey guys, 

It is the first npm package I ever released and it's gonna be so much fun I guess. No worries, The supported props and initial version might not have any issues still, incase you face any please open an issue or discussion, a PR for a fix would be much appreciated.

It's beta cause I have not yet included many features and there is a huge opportunity for many devs to contribute here.
When I release version 1.0.0. It will be officially considered a stable version I believe as there are a lot of new features I am willing to add along the way.

I am excited to get some initial issues and feature requests and will work on them on priority until version 1.0.0 😅 also after that hehe.

What do I want to be removed in the stable release?
- The explicit addition of CSS file path
- `needWhiteSpace` removal of this if possible

There are many additions I want which I am working on any suggestion are welcome.


## Support
For support, email meetbhalodiya1030@gmial.com or open a discussion/issue

## Authors

-   [@b-meet](https://github.com/b-meet)
