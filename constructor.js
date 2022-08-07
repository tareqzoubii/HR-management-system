'use strict';
//const body = document.getElementsByTagName(`body`);
const main = document.getElementsByTagName(`main`);
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
};

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
const h1El = document.createElement(`h1`); // as a header
    h1El.textContent = (`Employee Card List`);
    h1El.style.display = "flex";
    main[0].appendChild(h1El);
const gh = document.createElement(`gh`);
    main[0].appendChild(gh);
    Employees.prototype.render = function () {
      const card = document.createElement (`div`);
      card.style.padding = "15px";
      card.style.fontSize = "large";
      card.style.display = "flexbox";
      card.style.justifyContent = "space-around";
      card.style.justifyItems = "space-around";
      card.style.color = "black";
      card.style.background = "white";
      
      gh.appendChild(card);
      const imgEl = document.createElement(`img`);
      imgEl.src = "./images/Ghazi.jpg";
      imgEl.style.width = "130px";
      imgEl.style.justifyContent = "space-around";
      imgEl.style.justifyItems = "center";
      imgEl.style.display = "flex";
      card.appendChild(imgEl);
      const nameEl = document.createElement(`span`);
      nameEl.textContent = (`● Name: ${this.fullName}`);
      nameEl.style.display = "flex";
      card.appendChild(nameEl);
      const idEl = document.createElement(`span`);
      idEl.textContent = (`● ID: ${this.employeeId}`);
      idEl.style.display = "flex";
      card.appendChild(idEl);
      const depEl = document.createElement(`span`);
      depEl.textContent = (`● Department: ${this.department}`);
      depEl.style.display = "flex";
      card.appendChild(depEl);
      const levelEl = document.createElement(`span`);
      levelEl.textContent = (`● Level: ${this.level}`);
      levelEl.style.display = "flex";
      card.appendChild(levelEl);
      const salaryEl = document.createElement(`span`);
      salaryEl.textContent = (`● Salary: ${this.netSalary}$`);
      salaryEl.style.display = "flex";
      card.appendChild(salaryEl);
    

  };
ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();


