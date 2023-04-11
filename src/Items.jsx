import SingleItem from './SingleItem';

const Items = ({ items, handleDelItem, handleIsChecked }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            itemInfo={item}
            handleDelItem={handleDelItem}
            handleIsChecked={handleIsChecked}
          />
        );
      })}
    </div>
  );
};

export default Items;
