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
            ? { textTransform: 'capitalize', textDecoration: 'line-through' }
            : { textTransform: 'capitalize' }
        }
      >
        {name}
      </label>

      <button className='btn remove-btn' onClick={() => handleDelItem(id)}>
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
