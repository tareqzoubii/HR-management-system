
let ghazi = {
    employeeID: 0001,
    fullName: "Ghazi Samer",
    department: "Administration",
    salary:function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
       
}
let lana = {
    employeeID: 0002,
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
}
let tamara = {
    employeeID: 0003,
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
}
let safi = {
    employeeID: 0004,
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
}
let omar = {
    employeeID: 0005,
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      
}
let rana = {
    employeeID: 0006,
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
}
let hadi = {
    employeeID: 0007,
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    
}

var ghaziID = ghazi.employeeID + 999;
console.log("Employee name: "+ ghazi.fullName);
var ghaziNetSalary = ghazi.salary(1500, 2000);
console.log("Employee salary: "+ghaziNetSalary);

console.log("----");

var lanaID = lana.employeeID + 999;
console.log("Employee name: "+lana.fullName);
var lanaNetSalary = lana.salary(1500, 2000);
console.log("Employee salary: "+lanaNetSalary);

console.log("----");

var tamaraID = tamara.employeeID + 999;
console.log("Employee name: "+ tamara.fullName);
var tamaraNetSalary = tamara.salary(1500, 2000);
console.log("Employee salary: "+tamaraNetSalary);

console.log("----");

var safiID = safi.employeeID + 999;
console.log("Employee name: "+ safi.fullName);
var safiNetSalary = safi.salary(1000, 1500);
console.log("Employee salary: "+safiNetSalary);

console.log("----");

var omarID = omar.employeeID + 999;
console.log("Employee name: "+ omar.fullName);
var omarNetSalary = omar.salary(1500, 2000);
console.log("Employee salary: "+omarNetSalary);

console.log("----");

var ranaID = rana.employeeID + 999;
console.log("Employee name: "+ rana.fullName);
var ranaNetSalary = rana.salary(500, 1000);
console.log("Employee salary: "+ranaNetSalary);

console.log("----");

var hadiID = hadi.employeeID + 999;
console.log("Employee name: "+ hadi.fullName);
var hadiNetSalary = hadi.salary(1000, 1500);
console.log("Employee salary: "+hadiNetSalary);
