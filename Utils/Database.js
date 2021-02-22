require("dotenv").config();
const fs = require("fs");
const VendingMachine = require("../Model/VendingMachine");
const Soda = require("../Model/Soda");

class Database {
  constructor() {
    this.vendingMachine;
    this.document;
  }

  async initialize() {
    try {
      console.log("Loading Database...");
      let rawdata = fs.readFileSync(process.env.SODA_COLLECTION_FILE);
      this.document = JSON.parse(rawdata);
      this.document.Machines.forEach((machine) => {
        if (machine.VendingMachine === process.env.MACHINE_NAME) {
          this.vendingMachine = new VendingMachine(process.env.MACHINE_NAME);
          machine.SodaCollection.forEach((soda) => {
            let newSoda = new Soda(
              soda.Name,
              soda.Description,
              Number(parseFloat(soda.Cost).toPrecision(3)),
              parseInt(soda.VendingQtyAvailable)
            );
            this.vendingMachine.addNewSoda(newSoda);
          });
        }
      });
      console.log("Finished Loading Database");
    } catch (err) {
      console.log(err);
    }
  }

  async createDocument() {
    let SodaCollection = [];
    try {
      console.log(`Writing to file`)
      for (let element of this.vendingMachine.getStatus()) {
        SodaCollection.push({
          Name: element.productName,
          Description: element.description,
          Cost: Number(parseFloat(element.price).toPrecision(3)),
          VendingQtyAvailable: parseInt(element.vendingQuantity),
        });
      }
      this.document.Machines = this.document.Machines.map((e) => {
        if (e.VendingMachine === process.env.MACHINE_NAME) {
          e.SodaCollection = SodaCollection;
        }
        return e;
      });
      fs.writeFileSync(
        process.env.SODA_COLLECTION_FILE,
        JSON.stringify(this.document)
      );
      console.log(`Write complete`)
    } catch (err) {
      console.log(`Error while craeting file: ${err}`);
    }
  }

  getSodaCollection(sodaName) {
    return this.vendingMachine.getStatus(sodaName);
  }

  addSoda(soda) {
    return this.vendingMachine.addNewSoda(soda);
  }

  changeStock(sodaName, qty) {
    return this.vendingMachine.changeStock(sodaName, qty);
  }

  purchaseSoda(sodaName, qty, amountPaid) {
    return this.vendingMachine.purchaseSoda(sodaName, qty, amountPaid);
  }

  changePrice(sodaName, price) {
    return this.vendingMachine.changePrice(sodaName, price);
  }

  deleteSoda(sodaName) {
    return this.vendingMachine.deleteSoda(sodaName);
  }
}

module.exports = new Database();
