import React from 'react';

const list = ['a', 'b', 'c'];

const SimpleList = () => (
  <ul className="list-group">
    {list.map(item => (
      <li key={item} className="list-group-item">
        {item}
      </li>
    ))}
  </ul>
);

export default SimpleList;
