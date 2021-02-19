const DB = require('../Utils/Database')

class VendingService{
    getStatus(sodaName){
        let collection = DB.getSodaCollection(sodaName);
        return collection;
    }

    purchased(sodaName, qty, amountPaid){
        let success = DB.purchaseSoda(sodaName, qty, amountPaid);
        DB.createDocument();
        return success;
    }
}

module.exports = new VendingService();