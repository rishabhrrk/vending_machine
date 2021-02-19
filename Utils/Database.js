require('dotenv').config()
const fs = require('fs');
const VendingMachine = require('../Model/VendingMachine');
const Soda = require('../Model/Soda');

class Database{
    constructor(){
        this.vendingMachine;
        this.document;
    }

    async initialize(){
        let rawdata = fs.readFileSync(process.env.SODA_COLLECTION_FILE);
        this.document = JSON.parse(rawdata);
        this.document.Machines.forEach(machine => {
            if(machine.VendingMachine === process.env.MACHINE_NAME){
                this.vendingMachine = new VendingMachine(process.env.MACHINE_NAME);
                machine.SodaCollection.forEach(soda => {
                    let newSoda = new Soda(soda.Name, soda.Description, soda.Cost, soda.VendingQtyAvailable);
                    this.vendingMachine.addNewSoda(newSoda);
                })
            }
        });
    }

    async createDocument(){
        let SodaCollection = []
        for (let element of this.vendingMachine.getStatus()){
            SodaCollection.push({
                "Name": element.productName,
                "Description": element.description,
                "Cost": element.price,
                "VendingQtyAvailable": element.vendingQuantity 
            })
        }
        this.document.Machines = this.document.Machines.map(e => {
            if(e.VendingMachine === process.env.MACHINE_NAME){
                e.SodaCollection = SodaCollection;
            }
            return e
        })
        fs.writeFileSync(process.env.SODA_COLLECTION_FILE, JSON.stringify(this.document));
    }

    getSodaCollection(sodaName){
        return this.vendingMachine.getStatus(sodaName);
    }

    addSoda(soda){
        return this.vendingMachine.addNewSoda(soda);
    }

    restockSoda(sodaName, qty){
        return this.vendingMachine.restockSoda(sodaName, qty);
    }

    purchaseSoda(sodaName, qty, amountPaid){
        return this.vendingMachine.purchaseSoda(sodaName, qty, amountPaid)
    }

    changePrice(sodaName, price){
        return this.vendingMachine.changePrice(sodaName, price);
    }
}

module.exports = new Database();