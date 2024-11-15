import {useState} from 'react';
import InputChips from './component/InputChip';

const App = () => {
    const [chips, setChips] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    return (
        <InputChips
            chips={chips}
            inputValue={inputValue}
            setChips={setChips}
            setInputValue={setInputValue}
            placeholder="hello"
        />
    );
};

export default App;
