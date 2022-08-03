var Id = 999;
let ghazi = {
    employeeID: 0,
    fullName: "Ghazi Samer",
    department: "Administration",
    salary:function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
    
    uniqeID: function () {
          this.employeeID = Id + 1;
         ++Id;
      }
       
}
let lana = {
    employeeID: 0,
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqeID: function () {
      this.employeeID = Id + 1;
      ++Id;
    }
}
let tamara = {
    employeeID: 0,
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqeID: function () {
        this.employeeID = Id + 1;
        ++Id;
      }
}
let safi = {
    employeeID: 0,
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqeID: function () {
        this.employeeID = Id + 1;
        ++Id;
      }
}
let omar = {
    employeeID: 0,
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqeID: function () {
        this.employeeID = Id + 1;
        ++Id;
      }
      
}
let rana = {
    employeeID: 0,
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqeID: function () {
        this.employeeID = Id + 1;
        ++Id;
      }
}
let hadi = {
    employeeID: 0,
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqeID: function () {
        this.employeeID = Id + 1;
        ++Id;
      }
    
}

ghazi.uniqeID(Id);
var ghaziId = ghazi.employeeID;
//console.log(ghaziId);
console.log("Employee name: "+ ghazi.fullName);
var ghaziNetSalary = ghazi.salary(1500, 2000);
console.log("Employee salary: "+(ghaziNetSalary - (ghaziNetSalary * 0.075)));

console.log("----");
lana.uniqeID();
var lanaID = lana.employeeID;
//console.log(lanaID);
console.log("Employee name: "+lana.fullName);
var lanaNetSalary = lana.salary(1500, 2000);
console.log("Employee salary: "+(lanaNetSalary - (lanaNetSalary * 0.075)));

console.log("----");
tamara.uniqeID();
var tamaraID = tamara.employeeID;
//console.log(tamaraID);
console.log("Employee name: "+ tamara.fullName);
var tamaraNetSalary = tamara.salary(1500, 2000);
console.log("Employee salary: "+(tamaraNetSalary - (tamaraNetSalary * 0.075)));

console.log("----");
safi.uniqeID();
var safiID = safi.employeeID;
//console.log(safiID);
console.log("Employee name: "+ safi.fullName);
var safiNetSalary = safi.salary(1000, 1500);
console.log("Employee salary: "+(safiNetSalary - (safiNetSalary * 0.075)));

console.log("----");
omar.uniqeID();
var omarID = omar.employeeID;
//console.log(omarID);
console.log("Employee name: "+ omar.fullName);
var omarNetSalary = omar.salary(1500, 2000);
console.log("Employee salary: "+(omarNetSalary - (omarNetSalary * 0.075)));

console.log("----");
rana.uniqeID();
var ranaID = rana.employeeID;
//console.log(ranaID);
console.log("Employee name: "+ rana.fullName);
var ranaNetSalary = rana.salary(500, 1000);
console.log("Employee salary: "+(ranaNetSalary - (ranaNetSalary *0.075)));

console.log("----");
hadi.uniqeID();
var hadiID = hadi.employeeID;
//console.log(hadiID);
console.log("Employee name: "+ hadi.fullName);
var hadiNetSalary = hadi.salary(1000, 1500);
console.log("Employee salary: "+(hadiNetSalary - (hadiNetSalary * 0.075)));
