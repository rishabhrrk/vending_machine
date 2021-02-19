const AdminService = require('../Service/AdminService')

function getStatus(req, res){
    try{
        let sodaCollection = AdminService.getStatus(req.body.sodaName);
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

function restock(req, res){
    try{
        let updateStatus = AdminService.restock(req.body.sodaName, req.body.qty);
        if(updateStatus){
            res.status(200).json({
                success: true,
                results: `Update successful`
            })
        }
        else{
            res.status(400).json({
                success: false,
                results: `Failed to update`
            })
            throw new Error(`Couldn't update the product : ${req.body}`)
        }
    }
    catch(err){
        console.log(err);
    }
}

function changePrice(req, res){
    try{
        let updateStatus = AdminService.changePrice(req.body.sodaName, req.body.price);
        if(updateStatus){
            res.status(200).json({
                success: true,
                results: `Update successful`
            })
        }
        else{
            res.status(400).json({
                success: false,
                results: `Failed to update`
            })
            throw new Error(`Couldn't update the product : ${req.body}`)
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getStatus, restock, changePrice};