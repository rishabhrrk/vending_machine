import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faPlusSquare,
  faSave,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import ItemForm from "./Components/ItemForm";
import logo from "./ColaCo.png";

function AdminPanel(props) {
  const url = process.env.REACT_APP_URL;

  const [data, setData] = useState([]); // state to fetch data for admin panel
  const [collection, setCollection] = useState([]); // state which can be manipulated by admin and used for updating inventory
  const [refresh, setRefresh] = useState(false); // state indicating refresh of the admin panel
  const [form, setForm] = useState(false); // state which allows visibility of add item modal

  // use effect to fetch status of admin panel
  // triggered by default and on refresh state
  useEffect(() => {
    axios.get(url + "admin/getStatus/").then((json) => {
      let newState = json.data.results;
      setData(newState);
    });
  }, [, refresh]);

  // use effect to fetch status of admin panel
  // this state can be manipulated by the admin
  // triggered by default and on refresh state
  useEffect(() => {
    axios.get(url + "admin/getStatus/").then((json) => {
      let newState = json.data.results;
      setCollection(newState);
    });
  }, [, refresh]);

  // function which deletes a soda
  const handleDelete = (sodaName) => {
    axios
      .post(url + "admin/deleteSoda/", {
        sodaName: sodaName,
      })
      .then((res) => {
        console.log(res);
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
  };

  // function which facilitates changing inventory
  const handleChange = (e) => {
    e.preventDefault();
    axios
      .post(url + "admin/updateInventory/", {
        sodaCollection: Object.values(collection),
      })
      .then((result) => {
        console.log(result);
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
  };

  // function which makes the add item modal visible
  const addNew = (e) => {
    e.preventDefault();
    setForm(true);
  };

  // function which adds a new item
  // it receives values for a new soda from ItemForm.jsx (add new soda)
  // this also makes the modal disappear
  // it is triggered on successful form submission of new item
  const addItem = (name, description, price, qty) => {
    let oldState = { ...collection };
    let size = collection.length;
    oldState[size] = {
      productName: name,
      description: description,
      price: price,
      vendingQuantity: qty,
    };
    axios
      .post(url + "admin/updateInventory/", {
        sodaCollection: [oldState[size]],
      })
      .then((result) => {
        console.log(result);
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
    setForm(false);
    document.querySelector("div.modal-backdrop").remove();
  };

  // JSX which builds the table from the collection and data state
  // data is the old state and collection state keeps on updating as the admin interacts with the table
  let tableContent = () => {
    let objectKeys = collection != undefined ? Object.keys(collection) : [];
    return objectKeys.map((soda, index) => {
      if (collection[soda] != undefined && data[soda] != undefined) {
        return (
          <div className="row" key={index}>
            <FontAwesomeIcon
              className="col-1 padding-2px"
              border
              style={{ height: "2em" }}
              icon={faTrashAlt}
              onClick={(e) => {
                handleDelete(collection[soda].productName);
              }}
            />
            <div className="col-2 text-truncate border bg-dimgrey">
              {collection[soda].productName}
            </div>
            <div className="col-2 border p-0">
              <input
                className="width-100"
                type="number"
                min="0"
                step="0.01"
                value={collection[soda].price}
                onChange={(e) => {
                  if (
                    isNaN(e.target.value) === false &&
                    e.target.value != undefined
                  ) {
                    const oldState = { ...collection };
                    oldState[soda].price =
                      Number(parseFloat(e.target.value).toPrecision(3)) || 0;
                    setCollection(oldState);
                  }
                }}
              />
            </div>
            <div
              className="col-3 border bg-dimgrey"
              style={{ background: "dimgrey" }}
            >
              {data[soda].vendingQuantity}
            </div>
            <div className="col-2 border p-0">
              <input
                type="number"
                className="width-100"
                value={collection[soda].addStock || 0}
                onChange={(e) => {
                  if (
                    isNaN(e.target.value) === false &&
                    e.target.value != undefined
                  ) {
                    const oldState = { ...collection };
                    oldState[soda].vendingQuantity =
                      parseInt(data[soda].vendingQuantity) +
                      (parseInt(e.target.value) || 0);
                    oldState[soda].addStock = parseInt(e.target.value);
                    setCollection(oldState);
                  }
                }}
              />
            </div>
            <div className="col-2 border text-dark admin-panel-vending-total">
              {parseInt(collection[soda].vendingQuantity)}
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="container p-3 my-3 bg-dark outer-div">
      <div className="machine-header row justify-content-center align-content-center jumbotron">
        <div className="navbar-brand justify-content-center align-content-center">
          <img src={logo} className="logo" width="60%" />
        </div>
        {/* Icon to change the view to Vending Machine from Admin Panel */}
        <div className="machine-lock">
          <FontAwesomeIcon
            icon={faLockOpen}
            size="2x"
            onClick={(e) => {
              props.toggleAdmin(false);
            }}
          />
        </div>
      </div>

      {/* Headers for the display table */}
      <div className="row text-light">
        <div className="container">
          <div className="row admin-panel-table-header">
            <div className="col-3 border">Soda Name</div>
            <div className="col-2 border">Price ($)</div>
            <div className="col-3 border">Vending Units Available</div>
            <div className="col-2 border">Change Quantity</div>
            <div className="col-2 border">Total Units</div>
          </div>
          {tableContent()}
          <br />
          {/* button to save the changes of price and Stock */}
          <div className="row justify-content-around">
            <FontAwesomeIcon
              icon={faSave}
              size="2x"
              border
              className="col-2"
              onClick={(e) => {
                handleChange(e);
              }}
            />
            {/* Button to trigger modal for adding new Soda */}
            <FontAwesomeIcon
              icon={faPlusSquare}
              size="2x"
              border
              data-toggle="modal"
              data-target="#exampleModal"
              className="col-2"
              onClick={(e) => {
                e.preventDefault();
                addNew(e);
              }}
            />
          </div>
          {/* Compoenent for adding new Soda */}
          {form && <ItemForm addItem={addItem} />}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
