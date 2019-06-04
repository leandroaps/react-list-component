import React from 'react';

import SimpleList from './components/SimpleList';
import ComplexList from './components/ComplexList';
import ListComponents from './components/ListComponents';
import ListWithAddItem from './components/ListWithAddItem';
import ListWithUpdateItem from './components/ListWithUpdateItem';
import ListWithRemoveItem from './components/ListWithRemoveItem';
import NestedList from './components/NestedList';
import ListWithoutKey from './components/ListWithoutKey';
import ListScrollToItem from './components/ListScrollToItem';
import ListScrollToItemOutside from './components/ListScrollToItemOutside';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div className="container">
    <h1>List Examples in React</h1>
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              #Simple List
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          className="collapse hidden"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <SimpleList />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              #Complex List
            </button>
          </h2>
        </div>

        <div
          id="collapseTwo"
          className="collapse hidden"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ComplexList />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              #List with multiple Components
            </button>
          </h2>
        </div>

        <div
          id="collapseThree"
          className="collapse hidden"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ListComponents />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingFour">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              #List with add Item
            </button>
          </h2>
        </div>

        <div
          id="collapseFour"
          className="collapse hidden"
          aria-labelledby="headingFour"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ListWithAddItem />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingFive">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
            >
              #List with update Item
            </button>
          </h2>
        </div>

        <div
          id="collapseFive"
          className="collapse hidden"
          aria-labelledby="headingFive"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ListWithUpdateItem />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingSix">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseSix"
            >
              #List with remove Item
            </button>
          </h2>
        </div>

        <div
          id="collapseSix"
          className="collapse hidden"
          aria-labelledby="headingSix"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ListWithRemoveItem />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingSix">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseSix"
            >
              #List without Key and thus Bug
            </button>
          </h2>
        </div>

        <div
          id="collapseSix"
          className="collapse hidden"
          aria-labelledby="heading7"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ListWithoutKey />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="heading7">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapse7"
              aria-expanded="true"
              aria-controls="collapse7"
            >
              #List with nested List
            </button>
          </h2>
        </div>

        <div
          id="collapse7"
          className="collapse hidden"
          aria-labelledby="heading7"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <NestedList />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="heading8">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapse8"
              aria-expanded="true"
              aria-controls="collapse8"
            >
              #ListScrollToItem from within
            </button>
          </h2>
        </div>

        <div
          id="collapse8"
          className="collapse hidden"
          aria-labelledby="heading8"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ListScrollToItem />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="heading9">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapse9"
              aria-expanded="true"
              aria-controls="collapse9"
            >
              #ListScrollToItem from outside
            </button>
          </h2>
        </div>

        <div
          id="collapse9"
          className="collapse hidden"
          aria-labelledby="heading9"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ListScrollToItemOutside />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
