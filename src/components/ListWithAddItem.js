import React from 'react';

const initialList = [
  'Learn React',
  'Learn Firebase',
  'Learn GraphQL',
];

const ListWithAddItem = () => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(initialList);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    if (value) {
      setList(list.concat(value));
    }

    setValue('');

    event.preventDefault();
  };

  return (
    <div>
      <ul className="list-group">
        {list.map(item => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mb-2">
          <label htmlFor="newitem" className="sr-only">
            New Item
          </label>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="form-control form-control-lg"
            id="newitem"
          />
          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListWithAddItem;
