import React, { useState, useEffect } from "react";
import axios from "axios";
import Racks from "./Components/Racks";
import Keypad from "./Components/Keypad";
import Payment from "./Components/Payment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function VendingMachine(props) {
  const url = process.env.REACT_APP_URL;

  const [data, setData] = useState([]); // state to fetch data from API
  const [collection, setCollection] = useState(); // state to maintain mapped soda's, soda's are mapped to cells
  const [display, setDisplay] = useState("Welcome"); // display unit's state, this shows the message on display unit
  const [amount, setAmount] = useState(0.0); // state to maintain the amount inserted by customer
  const [selection, setSelection] = useState(""); // state to maintain the selected cell
  const [change, setChange] = useState(); // state to maintain the change due to customer after purchase
  const [file, setFile] = useState(); // state to indicate the purchase complete and trigger soda file generator
  const [save, setSave] = useState(); // state storing the link to the download of file


  // use effect used to fetch soda collection
  // triggered by default and when the purchase is completed by file state
  useEffect(() => {
    console.log(url+"vending/getStatus/")
    axios
      .get(url + "vending/getStatus/")
      .then((json) => setData(json.data.results));
  }, [, file]);

  // use effect to map the sodas into respective cells and store this in collection
  // triggered on when data state changes
  useEffect(() => {
    let mapping = {};
    let size = Math.max(data.length, 12);
    let i = 0;
    let charAscii = 64;
    let pos = 0;
    while (i < size) {
      if (i % 3 === 0) {
        charAscii++;
        pos = 1;
      }
      let key = String.fromCharCode(charAscii) + String(pos);
      mapping[key] = data[i];
      i++;
      pos++;
    }
    setCollection(mapping);
  }, [data]);

  // use effect which validates the amount, selection and purchase
  // triggered on when selection is made
  useEffect(() => {
    if (selection.length == 2) {
      if (collection[selection] == undefined) {
        setDisplay(<marquee>Incorrect Selection</marquee>);
      } else {
        if (amount < collection[selection].price) {
          setDisplay(<marquee>Insert more cash</marquee>);
        }
        else if (1 > collection[selection].vendingQuantity) {
          setDisplay(<marquee>Out of Stock</marquee>);
        }  else {
          axios
            .post(url + "vending/purchased/", {
              sodaName: collection[selection].productName,
              qty: 1,
              amountPaid: Number(parseFloat(collection[selection].price).toPrecision(3)),
            })
            .then((json) => {
              if (json.data.success) {
                setChange(Number(parseFloat(amount - collection[selection].price).toPrecision(3)));
                setDisplay(<marquee>Collect Product</marquee>);
                setFile(JSON.stringify(collection[selection]));
              } else {
                setChange(amount);
                setDisplay(
                  <marquee>There was a problem with purchase</marquee>
                );
              }
            })
            .catch((err) => {
              setChange(amount);
              console.log(err)
              setDisplay(
                <marquee>There was a problem with purchase</marquee>
              )}
            )
        }
      }
      setSelection("");
    }
  }, [selection]);

  // use effect to indicate the inserted amount
  // triggered on amount state change 
  useEffect(() => {
    if (amount > 0) {
      setDisplay("$ " + amount);
    }
  }, [amount]);

  // function to calculate the change and make it avaiable for customer to collect
  const changeCalculator = () => {
    if (change != undefined && change != 0) {
      return (
        <div
          className="col-6 change-div"
        >
          $ {change}
        </div>
      );
    } else {
      return <div className="col-6 change-div"></div>;
    }
  };

  // use effect to generate the JSON file on successful purchase
  // triggered on file state change
  useEffect(async () => {
    if (file != undefined) {
      const json = (file);
      const blob = new Blob([json], { type: "application/json" });
      const h = await URL.createObjectURL(blob);
      setSave(
        <a
          className="btn-primary"
          href={h}
          style={{fontWeight:"bolder", fontSize:"large"}}
          download
          ref={(e) => {
            setAmount(0.0);
          }}
          onClick={() => {
            setSelection("");
            setDisplay("Welcome");
            setFile();
            setSave();
          }}
        >
          Download
        </a>
      );
    }
  }, [file]);

  return (
    <div
      className="outer-div container p-3 my-3 bg-dark border"
    >
      <div
        className="machine-header row justify-content-center align-content-center jumbotron"
      >
        <div
          className="machine-header-inner h1 justify-content-center align-content-center"
        >
          Virtual Soda
        </div>
        {/* Button to toggle into Admin Panel */}
        <div className="machine-lock">
          <FontAwesomeIcon
            icon={faLock}
            size="2x"
            onClick={(e) => {
              props.toggleAdmin(true);
            }}
          />
        </div>
      </div>

        {/* Racks storing all the soda collection */}
      <div className="row">
        <div className="container col-7 racks-table-container">
          <table className="racks-table table">
            <tbody>
              <Racks args={collection} />
            </tbody>
          </table>
          <div>{save}</div>
        </div>

            {/* Display panel */}
        <div className="container text-primary col-3 text-center justify-content-center align-items-center font-weight-bold">
          <div
            className="display-board row text-dark border justify-content-center align-items-center"
          >
            {display}
          </div>
          <br />
          {/* Component to insert amount */}
          <div className="row justify-content-center align-items-center">
            <Payment
              onClick={(e) => {
                e.preventDefault();
                setAmount(
                  (
                    Number.parseFloat(amount) +
                    Number.parseFloat(e.target.textContent.slice(2))
                  ).toPrecision(3)
                );
              }}
            />
          </div>
          <br />
          {/* Component to make the selection of product */}
          <div className="row justify-content-center align-items-center">
            <Keypad
              onClick={(e) => {
                e.preventDefault();
                setSelection(selection + e.target.textContent);
                setDisplay(selection + e.target.textContent);
              }}
            />
          </div>
          <br />
          {/* Compoennet to display the change and let customer collect it with a button */}
          <div className="row border">
            {changeCalculator()}
            <div
              className="col-6 collect-change"
            >
              <button
                className="padding-2px btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  setChange();
                  setAmount(0.0);
                }}
              >
                Collect Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendingMachine;
