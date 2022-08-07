'use strict';
//const body = document.getElementsByTagName(`body`);
const main = document.getElementsByTagName(`main`);
"./images/Ghazi.jpg"
var render;
var Id = 999;
function Employees(nameValue, departmentValue, levelValue, employeeIdValue, imageValue, netSalaryValue) {
     this.fullName = nameValue;
     this.department = departmentValue;
     this.level = levelValue;
     this.employeeId = employeeIdValue;
     this.image = imageValue;
     this.netSalary = netSalaryValue;
     this.uniqeID = function () {
          this.employeeId= Id + 1;
        ++Id;
      };
      this.salary = function (min, max) {
        this.netSalary = (Math.floor(Math.random() * (max - min) ) + min) - ((Math.floor(Math.random() * (max - min) ) + min) * 0.075);
      }
};

const ghazi = new Employees("Ghazi Samer", "Administration", "Senior", "./images/Ghazi.jpg");
const lana = new Employees("Lana Ali", "Finance", "Senior", "./images/Lana.jpg");
const tamara = new Employees("Tamara Ayoub", "Marketing", "Senior", "./images/Tamara.jpg");
const safi = new Employees("Safi Walid", "Administration", "Mid-Senior", "./images/Safi.jpg");
const omar = new Employees("Omar Zaid", "Development", "Senior", "./images/Omar.jpg");
const rana = new Employees("Rana Saleh", "Development", "Junior", "./images/Rana.jpg");
const hadi = new Employees("Hadi Ahmad", "Finance", "Mid-Senior", "./images/Hadi.jpg");



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
      card.setAttribute("id", "div2");
      gh.appendChild(card);
      
      const imgEl = document.createElement(`img`);
      imgEl.setAttribute("id", "img2");
      imgEl.src = (` ${this.image} `);
      card.appendChild(imgEl);
      
      const nameEl = document.createElement(`span`);
      nameEl.textContent = (`● Name: ${this.fullName}`);
      card.appendChild(nameEl);
      
      const idEl = document.createElement(`span`);
      idEl.textContent = (`● ID: ${this.employeeId}`);
      card.appendChild(idEl);
      
      const depEl = document.createElement(`span`);
      depEl.textContent = (`● Department: ${this.department}`);
      card.appendChild(depEl);
      
      const levelEl = document.createElement(`span`);
      levelEl.textContent = (`● Level: ${this.level}`);
      card.appendChild(levelEl);
      
      const salaryEl = document.createElement(`span`);
      salaryEl.textContent = (`● Salary: ${this.netSalary}$`);
      card.appendChild(salaryEl);
  
  };
ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();