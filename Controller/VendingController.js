const VendingService = require('../Service/VendingService')

function getStatus(req, res){
    try{
        let sodaCollection = VendingService.getStatus(req.body.sodaName);
        if(sodaCollection.length>0){
            res.status(200).json({
                success: true,
                results: sodaCollection
            })
        }
        else{
            res.status(400).json({
                success: false,
                results: sodaCollection
            })
            throw new Error(`Couldn't find the collection`)
        }
    }
    catch(err){
        console.log(err)
    }
}

function purchased(req, res){
    try{
        let result = VendingService.purchased(req.body.sodaName, req.body.qty, req.body.amountPaid);
        if(result){
            res.status(200).json({
                success: true,
                results: `Successfully purchased`
            })
        }
        else{
            res.status(400).json({
                success: false,
                results: `Not purchased`
            })
            throw new Error(`Couldn't purchase the product : ${req.body}`)
        }
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getStatus, purchased};