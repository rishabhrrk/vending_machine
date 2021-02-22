class VendingMachine {
  constructor(machineName, sodaCollection) {
    this.machineName = machineName;
    this.sodaCollection = [];
    if (sodaCollection) {
      this.sodaCollection = sodaCollection;
    }
  }

  getMachineName() {
    return this.machineName;
  }

  addNewSoda(soda) {
    this.sodaCollection.push(soda);
    return true;
  }

  changeStock(sodaName, restockQty) {
    for (let soda of this.sodaCollection) {
      if (soda.getProductName() === sodaName) {
        soda.setVendingQuanity(restockQty);
        return true;
      }
    }
    return false;
  }

  deleteSoda(sodaName) {
    let index = 0;
    for (let soda of this.sodaCollection) {
      if (soda.getProductName() === sodaName) {
        break;
      }
      index++;
    }
    try {
      this.sodaCollection.splice(index, 1);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  getStatus(sodaName) {
    if (sodaName === undefined) {
      return this.sodaCollection;
    } else {
      for (let soda of this.sodaCollection) {
        let name = soda.getProductName();
        if (name === sodaName) {
          return [soda];
        }
      }
      return [];
    }
  }

  purchaseSoda(sodaName, qty, amountPaid) {
    if (sodaName === undefined) {
      return false;
    } else {
      try {
        for (let soda of this.sodaCollection) {
          let name = soda.getProductName();
          if (name === sodaName && amountPaid === qty * soda.getPrice()) {
            soda.setVendingQuanity(soda.getVendingQuantity() - qty);
            return true;
          }
        }
      } catch (err) {
        console.log(err);
      }
      return false;
    }
  }

  changePrice(sodaName, price) {
    if (sodaName === undefined) {
      return false;
    } else {
      try {
        for (let soda of this.sodaCollection) {
          let name = soda.getProductName();
          if (name === sodaName) {
            soda.setPrice(price);
            return true;
          }
        }
      } catch (err) {
        console.log(err);
      }
      return false;
    }
  }
}

module.exports = VendingMachine;
