const aCar = {
    owner : "Joe Bloggs",
    previous_owners: [
        {name: "Pat Smith", address:  "1 Main Street"},
        {name: "Sheila Dwyer", address:  "2 High Street"}
      ],
    type : {
        make : "Toyota",
        nodel : "Corolla",
        cc : 1.8
    },
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
    registration : {
        year : 201,
        countryCode : "WD",
        number : 1058
    }
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log('Reg. = '+aCar.registration.year + '-' + 
             aCar.registration.countryCode+ '-' + 
             aCar.registration.number);
aCar.mileage = 10000;
aCar.color = {
    exteriorColor : "red",
    interiorFabric :{
        texture : "leather",
        shade : "cream"
    }

};
console.log("It is a "+ aCar.color.exteriorColor + " car, "+ 
             aCar.mileage+ " mileage, with "+ 
             aCar.color.interiorFabric.texture+" interior.");
console.log('First owner : ' + aCar.previous_owners[0].name + "-" + 
             aCar.previous_owners[0].address);

for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]);
} 

for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name);
}