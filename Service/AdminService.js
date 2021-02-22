const DB = require('../Utils/Database');
const Soda = require('../Model/Soda')

class AdminService{
    getStatus(sodaName){
        let collection = DB.getSodaCollection(sodaName);
        return collection;
    }
    changeStock(sodaName, qty){
        if(Number.isInteger(qty)===false || sodaName==undefined){
            return false;
        }
        let success = DB.changeStock(sodaName, qty);
        if(success){
            DB.createDocument();
        }
        return success;
    }
    changePrice(sodaName, price){
        if(typeof(price)!=number || sodaName==undefined){
            return false;
        }
        let success = DB.changePrice(sodaName, price);
        if(success){
            DB.createDocument();
        }
        return success;
    }
    deleteSoda(sodaName){
        if(sodaName!=undefined){
            let success = DB.deleteSoda(sodaName);
            if(success){
                DB.createDocument();
            }
            return success;
        }
    }
    updateInventory(sodaCollection){
        let success = true;
        for(let soda of sodaCollection){
            let success1 = DB.changePrice(soda.productName, soda.price)
            let success2 = DB.changeStock(soda.productName, soda.vendingQuantity)
            if(success1===false || success2===false){
                if(soda.price && soda.vendingQuantity){
                    success = DB.addSoda(new Soda(soda.productName, soda.description, parseInt(soda.price), Number(parseFloat(soda.vendingQuantity).toPrecision(3))))
                }
                else{
                    success = false;
                }
                if(success===false){
                    break;
                }
            }
        }
        if(success){
            DB.createDocument();
        }
        return success;
    }
}

module.exports = new AdminService();