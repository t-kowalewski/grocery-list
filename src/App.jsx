import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import Form from './Form';
import Items from './Items';

const saveToLS = (arr) => {
  try {
    localStorage.setItem('data', JSON.stringify(arr));
  } catch (error) {
    toast.warning("Can't save data to storage");
  }
};

const App = () => {
  const [items, setItems] = useState(
    localStorage.data ? JSON.parse(localStorage.getItem('data')) : []
  );

  const handleIsChecked = (id) => {
    setItems((currVal) => {
      const newArr = currVal.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });

      saveToLS(newArr);
      return newArr;
    });
  };

  const handleDelItem = (id) => {
    setItems((currVal) => {
      const newArr = currVal.filter((item) => item.id !== id);

      saveToLS(newArr);
      return newArr;
    });
  };

  return (
    <section className='section-center'>
      <Form setItems={setItems} saveToLS={saveToLS} />
      <Items
        items={items}
        handleDelItem={handleDelItem}
        handleIsChecked={handleIsChecked}
      />
      <ToastContainer position='top-center' />
    </section>
  );
};

export default App;
