// Progression 1: SmartPhone
class SmartPhone {
  constructor(ram, batteryPower, price) {
    // TODO: Initialize the properties ram, batteryPower, and price
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }

  displayFeatures() {
    // TODO: Return a string containing ram, batteryPower, and price values separated by a newline character
    // return "4GB\n3800mAh\n24000";
    // return `this.ram, this.batteryPower, this.price`;
    return `${this.ram}\n${this.batteryPower}\n${this.price}`;
  }

  remainingAmount(priceIHave) {
    // TODO: Deduct the priceIHave from the price and update the price value
    // console.log(priceIHave,this.price);
    return this.price  = this.price - priceIHave;
  }
}

// Progression 2: AndroidPhone
class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batteryPower, price) {
    // TODO: Use the super() method to inherit properties from SmartPhone
    // TODO: Initialize the modelName property specific to AndroidPhone
    super(ram,batteryPower,price);
    this.modelName = modelName;
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }

  displayFeatures() {
    // TODO: Return a string containing modelName, ram, batteryPower, and price values separated by a newline character
    // return "this.modelName;\n"
    // return "OnePlus\n4GB\n3800mAh\n24000"
    return `${this.modelName}\n${this.ram}\n${this.batteryPower}\n${this.price}`;
  }

  remainingAmount(priceIHave) {
    // TODO: Deduct priceIHave from the price and return:
    // - "Customer has no more amount" if the remaining price is <= 0
    // - A message showing the remaining amount if price > 0
    // console.log(priceIHave, this.price);
    
    this.price = this.price - priceIHave;
    // console.log(this.price);
    if (this.price < 0) {
      return "Customer can't able to buy a phone due to insufficient amount";
    } 

    return `Customer has remaining Rs.${this.price} after buying the android phone`;
  }
}

// Progression 3: IPhone
class IPhone extends SmartPhone {
  constructor(seriesName, ram, batteryPower, price) {
    // TODO: Use the super() method to inherit properties from SmartPhone
    // TODO: Initialize the seriesName property specific to IPhone
    super(ram,batteryPower,price);
    this.seriesName = seriesName;
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }

  displayFeatures() {
    // TODO: Return a string containing seriesName, ram, batteryPower, and price values separated by a newline character
    return `${this.seriesName}\n${this.ram}\n${this.batteryPower}\n${this.price}`;
  }

  remainingAmount(priceIHave) {
    // TODO: Check if priceIHave is less than the price:
    // - If yes, return "Customer can't able to buy a phone due to insufficient amount"
    // - Otherwise, deduct priceIHave from price and return:
    //   - "Customer has no more amount" if the remaining price is <= 0
    //   - A message showing the remaining amount if price > 0
    console.log(this.price);
    this.price = this.price - priceIHave;
    console.log(this.price);
    if(this.price > 0) {
      return `Customer can't able to buy a phone due to insufficient amount`;
    }
    if (this.price <= 0){
      return `Customer has no more amount`;
    }
    

  }
}

// Progression 4: MobileCampus
class MobileCampus {
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
    // TODO: Initialize the properties NoOfMobiles, NoOfAndroidMobiles, and NoOfIPhoneMobiles
  }

  changeMobileAvailabilityNumber(count, type) {
    // TODO: Deduct the count from NoOfAndroidMobiles if type is "android"
    // TODO: Deduct the count from NoOfIPhoneMobiles if type is "iphone"
    // Return the updated availability message for the respective type
  }
}
