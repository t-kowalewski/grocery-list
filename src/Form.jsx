import { nanoid } from 'nanoid';
import { useState } from 'react';

const Form = ({ setItems }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemName = inputText.trim();

    if (itemName !== '') {
      const newItem = {
        id: nanoid(),
        name: itemName,
        complited: false,
      };

      setItems((currVal) => [...currVal, newItem]);
      setInputText('');
    } else {
      console.log('empty input');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Adi's Fancy Grocery List 🍎</h4>

      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />

        <button type='submit' className='btn'>
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
