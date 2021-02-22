const DB = require('../Utils/Database')

class VendingService{
    getStatus(sodaName){
        let collection = DB.getSodaCollection(sodaName);
        return collection;
    }

    purchased(sodaName, qty, amountPaid){
        try{
            let success = DB.purchaseSoda(sodaName, parseInt(qty), Number(parseFloat(amountPaid).toPrecision(3)));
            if(success){
                DB.createDocument();
            }
            return success;
        }catch(err){
            console.log(err);
            return false;
        }
    }
}

module.exports = new VendingService();