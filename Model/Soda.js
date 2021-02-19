class Soda{
    constructor(name, desc, price, qty){
        this.productName = name;
        this.description = desc;
        this.price = price;
        this.vendingQuantity = qty;
    }

    getProductName(){
        return this.productName;
    }

    getDescription(){
        return this.description;
    }

    getPrice(){
        return this.price;
    }

    getVendingQuantity(){
        return this.vendingQuantity;
    }

    setPrice(price){
        this.price = price;
    }

    setVendingQuanity(qty){
        this.vendingQuantity = qty;
    }

}

module.exports = Soda;