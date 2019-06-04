import React, { createRef } from 'react';

const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
  {
    id: 'c',
    firstname: 'Robin',
    lastname: 'Davidds',
    year: 1988,
  },
  {
    id: 'd',
    firstname: 'Dave',
    lastname: 'Wieruch',
    year: 1990,
  },
];

const ListScrollToItem = () => (
  <ul className="list-group">
    {list.map(item => {
      const ref = createRef();

      // Scroll Into View API: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
      const handleClick = () =>
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

      return (
        <li className="list-group-item" key={item.id} ref={ref}>
          <div>{item.id}</div>
          <div>{item.firstname}</div>
          <div>{item.lastname}</div>
          <div>{item.year}</div>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClick}
          >
            Scroll Into View
          </button>
        </li>
      );
    })}
  </ul>
);

export default ListScrollToItem;
