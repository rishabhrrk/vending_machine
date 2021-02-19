const DB = require('../Utils/Database')

class AdminService{
    getStatus(sodaName){
        let collection = DB.getSodaCollection(sodaName);
        return collection;
    }
    restock(sodaName, qty){
        let success = DB.restockSoda(sodaName, qty);
        DB.createDocument();
        return success;
    }
    changePrice(sodaName, price){
        let success = DB.changePrice(sodaName, price);
        DB.createDocument();
        return success;
    }
}

module.exports = new AdminService();