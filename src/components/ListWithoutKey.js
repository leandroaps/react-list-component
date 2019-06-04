import React from 'react';

const initialList = ['Learn React', 'Learn GraphQL'];

const ListWithUnstableIndex = () => {
  const [list, setList] = React.useState(initialList);

  const handleClick = event => {
    setList(list.slice().reverse());
  };

  return (
    <div>
      <ul className="list-group">
        {list.map((item, index) => (
          <li key={index} className="list-group-item">
            <label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="checkbox" />
                    {item}
                  </div>
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Reverse List
      </button>
    </div>
  );
};

export default ListWithUnstableIndex;
