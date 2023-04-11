import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const Form = ({ setItems, saveToLS }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemName = inputText.trim();

    if (itemName !== '') {
      const newItem = {
        id: nanoid(),
        name: itemName,
        completed: false,
      };

      setItems((currVal) => {
        const newArr = [...currVal, newItem];

        saveToLS(newArr);
        return newArr;
      });
      setInputText('');
    } else {
      toast.info('Invisible item added (NO 😛)');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Adi's Fancy Grocery List 🍎</h4>

      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          placeholder='What will it be?'
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
