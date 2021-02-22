import React, { useState, useEffect } from "react";
import axios from "axios";
import Racks from "./Components/Racks";
import Keypad from "./Components/Keypad";
import Payment from "./Components/Payment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function VendingMachine(props) {
  const url = process.env.REACT_APP_URL;;

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState();
  const [display, setDisplay] = useState("Welcome");
  const [amount, setAmount] = useState(0.0);
  const [selection, setSelection] = useState("");
  const [change, setChange] = useState();
  const [file, setFile] = useState();
  const [save, setSave] = useState();

  useEffect(() => {
    console.log(url+"vending/getStatus/")
    axios
      .get(url + "vending/getStatus/")
      .then((json) => setData(json.data.results));
  }, [, file]);

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

  useEffect(() => {
    if (amount > 0) {
      setDisplay("$ " + amount);
    }
  }, [amount]);

  const changeCalculator = () => {
    if (change != undefined && change != 0) {
      return (
        <div
          className="col-6"
          style={{ textAlign: "left", fontWeight: "bold", fontSize: "25px" }}
        >
          $ {change}
        </div>
      );
    } else {
      return <div className="col-6" style={{ textAlign: "left" }}></div>;
    }
  };

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
      className="container p-3 my-3 bg-dark border"
      style={{ borderWidth: "10px", borderColor: "black", height: "800px" }}
    >
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
            icon={faLock}
            size="2x"
            onClick={(e) => {
              props.toggleAdmin(true);
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="container col-7" style={{ alignContent: "center" }}>
          <table className="table" style={{tableLayout:"fixed"}}>
            <tbody>
              <Racks args={collection} />
            </tbody>
          </table>
          <div>{save}</div>
        </div>

        <div className="container text-primary col-3 text-center justify-content-center align-items-center font-weight-bold">
          <div
            className="row text-dark border justify-content-center align-items-center"
            style={{
              backgroundColor: "yellow",
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "25px",
            }}
          >
            {display}
          </div>
          <br />
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
          <div className="row border">
            {changeCalculator()}
            <div
              className="col-6"
              style={{ justifyContent: "right", padding: "5px" }}
            >
              <button
                className="btn-sm"
                style={{ padding: "2px" }}
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
