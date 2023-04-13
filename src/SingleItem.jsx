import { FaTrashAlt } from 'react-icons/fa';

const SingleItem = ({
  itemInfo: { id, name, completed },
  handleDelItem,
  handleIsChecked,
}) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        id={id}
        onChange={() => handleIsChecked(id)}
        checked={completed}
      />
      {/* <p>{name}</p> */}
      <label
        htmlFor={id}
        style={
          completed
            ? {
                textTransform: 'capitalize',
                textDecoration: 'line-through',
                textDecorationColor: '#dd2e44',
                textDecorationThickness: '2px',
              }
            : { textTransform: 'capitalize' }
        }
      >
        {name}
      </label>

      {/* <button className='btn remove-btn' onClick={() => handleDelItem(id)}>
        Delete
      </button> */}
      <button className='btn remove-btn' onClick={() => handleDelItem(id)}>
        <FaTrashAlt />
      </button>
      {/* <FaTrashAlt onClick={() => handleDelItem(id)} /> */}
    </div>
  );
};

export default SingleItem;
