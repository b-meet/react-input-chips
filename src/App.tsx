import {useState} from 'react';
import InputChips from './components/InputChip';

const App = () => {
    const [chips, setChips] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    return (
        <InputChips
            chips={chips}
            inputValue={inputValue}
            setChips={setChips}
            placeholder="Add user names"
            setInputValue={setInputValue}
            nextPlaceholder="You can add upto 10 user names"
        />
    );
};

export default App;
