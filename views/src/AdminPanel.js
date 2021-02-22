import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faPlusSquare,
  faSave,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import ItemForm from "./Components/ItemForm";

function AdminPanel(props) {
  const url = process.env.REACT_APP_URL;;

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [form, setForm] = useState(false);

  useEffect(() => {
    axios.get(url + "admin/getStatus/").then((json) => {
      let newState = json.data.results;
      setData(newState);
    });
  }, [, refresh]);

  useEffect(() => {
    axios.get(url + "admin/getStatus/").then((json) => {
      let newState = json.data.results;
      setCollection(newState);
    });
  }, [, refresh]);

  const handleDelete = (sodaName) => {
    axios.post(url + 'admin/deleteSoda/', {
      sodaName: sodaName
    }).then((res) => {console.log(res); setRefresh(!refresh);})
    .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    e.preventDefault();
    axios
      .post(url + "admin/updateInventory/", {
        sodaCollection: Object.values(collection),
      })
      .then((result) => {console.log(result); setRefresh(!refresh);})
      .catch((err) => console.log(err));
  };

  const addNew = (e) => {
    e.preventDefault();
    setForm(true);
  };

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
        sodaCollection: [oldState[size]]
      })
      .then((result) => {console.log(result); setRefresh(!refresh);})
      .catch((err) => console.log(err));
    setForm(false);
    document.querySelector("div.modal-backdrop").remove();
  };

  let tableContent = () => {
    let objectKeys = collection != undefined ? Object.keys(collection) : [];
    return objectKeys.map((soda, index) => {
      if (collection[soda] != undefined && data[soda] != undefined) {
        return (
          <div className="row" key={index}>
            <FontAwesomeIcon
            className="col-1"
            border
            style={{padding: "2px", height: "2em"}}
            icon={faTrashAlt}
            onClick={(e) => {
              handleDelete(collection[soda].productName);
            }}
          />
            <div className="col-2 border" style={{background:"dimgrey"}}>{collection[soda].productName}</div>
            <div className="col-2 border" style={{padding: "0"}}>
              <input
                style={{ width: "100%" }}
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
                    oldState[soda].price = Number(parseFloat(e.target.value).toPrecision(3)) || 0;
                    setCollection(oldState);
                  }
                }}
              />
            </div>
            <div className="col-3 border" style={{background:"dimgrey"}}>{data[soda].vendingQuantity}</div>
            <div className="col-2 border" style={{padding: "0"}}>
              <input
                type="number"
                style={{ width: "100%" }}
                value = {collection[soda].addStock || 0}
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
            <div className="col-2 border" style={{background:"lightgreen", color:"black", fontWeight:"bolder"}}>
              {parseInt(collection[soda].vendingQuantity)}
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="container p-3 my-3 bg-dark border" style={{ height: "800px" }}>
      <div
        className="row justify-content-center align-content-center jumbotron"
        style={{
          height: "2px",
          backgroundColor: "cornflowerblue",
          position: "relative",
        }}
      >
        <div
          className="h1 justify-content-center align-content-center"
          style={{
            fontWeight: "bolder",
            fontSize: "100px",
            width: "100%",
            padding: "2px",
          }}
        >
          Virtual Soda
        </div>
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <FontAwesomeIcon
            icon={faLockOpen}
            size="2x"
            onClick={(e) => {
              props.toggleAdmin(false);
            }}
          />
        </div>
      </div>

      <div className="row text-light">
        <div className="container">
          <div className="row" style={{fontSize:"large", fontWeight:"bolder"}}>
            <div className="col-3 border">Soda Name</div>
            <div className="col-2 border">Price ($)</div>
            <div className="col-3 border">Vending Units Available</div>
            <div className="col-2 border">Change Quantity</div>
            <div className="col-2 border">Total Units</div>
          </div>
          {tableContent()}<br />
          <div className="row" style={{justifyContent:"space-evenly"}}>
            <FontAwesomeIcon
              icon={faSave}
              size="2x"
              border
              className="col-2"
              onClick={(e) => {
                handleChange(e);
              }}
            />
            <FontAwesomeIcon
              icon={faPlusSquare}
              size="2x"
              border
              data-toggle="modal" data-target="#exampleModal"
              className="col-2"
              onClick={(e) => {
                e.preventDefault();
                addNew(e);
              }}
            />
          </div>
          {form && <ItemForm addItem={addItem} />}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
