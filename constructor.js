'use strict';
var render;
var Id = 999;
function Employees(nameValue, departmentValue, levelValue, employeeIdValue, netSalaryValue) {
     this.fullName = nameValue;
     this.department = departmentValue;
     this.level = levelValue;
     this.employeeId = employeeIdValue;
     this.netSalary = netSalaryValue;
     this.uniqeID = function () {
          this.employeeId= Id + 1;
        ++Id;
      };
      this.salary = function (min, max) {
        this.netSalary = (Math.floor(Math.random() * (max - min) ) + min) - ((Math.floor(Math.random() * (max - min) ) + min) * 0.075);
      }
}

const ghazi = new Employees("Ghazi Samer", "Administration", "Senior");
const lana = new Employees("Lana Ali", "Finance", "Senior");
const tamara = new Employees("Tamara Ayoub", "Marketing", "Senior");
const safi = new Employees("Safi Walid", "Administration", "Mid-Senior");
const omar = new Employees("Omar Zaid", "Development", "Senior");
const rana = new Employees("Rana Saleh", "Development", "Junior");
const hadi = new Employees("Hadi Ahmad", "Finance", "Mid-Senior");



ghazi.uniqeID();
lana.uniqeID();
tamara.uniqeID();
safi.uniqeID();
omar.uniqeID();
rana.uniqeID();
hadi.uniqeID();

ghazi.salary(1500, 2000);
lana.salary(1500, 2000);
tamara.salary(1500, 2000);
safi.salary(1000, 1500);
omar.salary(1500, 2000);
rana.salary(500, 1000);
hadi.salary(1000, 1500);

//console.log(ghazi);
//console.log(lana);
//console.log(tamara);
//console.log(safi);
//console.log(omar);
//console.log(rana);
//console.log(hadi);

Employees.prototype.render = function () {
    document.write(`<h1>Employee Name : ${this.fullName}<br><br><h1>Department : ${this.department} </h1><br><br><h1>Employee Salary : ${this.netSalary} </h1><br></h1>`)
    
}
ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();


