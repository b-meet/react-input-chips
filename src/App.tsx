import {useState} from 'react';
import InputChips from './components/InputChip';

const App = () => {
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
            placeholder="Add user names"
            setInputValue={setInputValue}
            nextPlaceholder="You can add upto 10 user names"
            backspaceToRemoveChip
            errorMsg={error?.inputValueError}
            validate={validation}
        />
    );
};

export default App;
