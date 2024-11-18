# React-input-chips

A package with minimum dependcies and maximum customisation.

If you want a input field whose value converts to a customisable chip on click of keys of you choice then this is the best package for you.

You have full control over

-   validation of the field
-   styling of the chips
-   styling of the wrapper
-   chip conversion trigger

## Demo

## Installation

Install react-input-chips with npm

```bash
  npm install react-input-chips
```

## Props and information

One important thing for the default styling of the `<InputChip/>` is that you need to explicity add CSS file file import in your root file following is the path for it

```bash
import "../node_modules/react-input-chip-beta/dist/index.css";
```

following are all the props supported as of now.

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

## Authors

-   [@b-meet](https://github.com/b-meet)
