import React from 'react';

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
];

const nestedLists = [list, list];

const NestedList = () => (
  <ul className="list-group">
    {nestedLists.map((nestedList, index) => (
      <ul key={index} className="list-group">
        <h4>List {index + 1}</h4>
        {nestedList.map(item => (
          <li key={item.id} className="list-group-item">
            <div>{item.id}</div>
            <div>{item.firstname}</div>
            <div>{item.lastname}</div>
            <div>{item.year}</div>
          </li>
        ))}
      </ul>
    ))}
  </ul>
);

export default NestedList;
