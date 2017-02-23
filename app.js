//4. Duplicate code has been removed and DRY principles are evident
storeHours = ['10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:'];

//1. Good use of a constructor function; style and syntax are correctly implemented
function SalmonShop(storeLocation, min, max, avg) {
  this.storeLocation = storeLocation;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieArrHr = [];
  this.totals = 0;
};
//Random number generator function
SalmonShop.prototype.randomNumber = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
//Average cust multiplyed by random number
SalmonShop.prototype.salesPerHr = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var ranNumb = Math.round(this.randomNumber() * this.avg);
    this.cookieArrHr.push(ranNumb);
    this.totals += ranNumb;
  }
  console.log(ranNumb, this.totals);
};
//3. The HEADER row and footer row are each created in their own stand-alone function
// function headRow() {
//   var tRow = document.createElement('tr');
//   var thead = document.createElement('th')
//   thead.textContent = 'Store Name';
//   tRow.appendChild(thead);
var table = document.getElementById('cookieData');
var createRowElement = document.createElement('tr');
table.appendChild(createRowElement);

function genTable() {
  var store = document.createElement('th');
  store.textContent = 'Store Name:';
  createRowElement.appendChild(store);
  //3. For loop to create rows for time shop is open and add FOOTER row for totals.
  for (var i = 0; i < storeHours.length; i++) {
    var thead1 = document.createElement('th');
    thead1.textContent = storeHours[i];
    createRowElement.appendChild(thead1);
  };
  //Totals row is outside of for loop
  var storeTot = document.createElement('th');
  storeTot.textContent = 'Total : ';
  createRowElement.appendChild(storeTot);
};
//Table creation
genTable();

SalmonShop.prototype.render = function() {
  this.salesPerHr();
  var storeName = document.createElement('tr')
  storeName.textContent = this.storeLocation;
  table.appendChild(storeName);
  //for loop to for table data/avg * salesPerHr
  for (var i = 0; i < storeHours.length; i++) {
    var dataElement = document.createElement('td');
    dataElement.textContent = this.cookieArrHr[i];
    storeName.appendChild(dataElement);
  };
  //Totals at end of table again outside of loop
  var cookieTot = document.createElement('td');
  cookieTot.textContent = this.totals;
  storeName.appendChild(cookieTot);
};

//2. Each cookie stand location should have a separate render() method that creates and appends its row to the table
var pikePlace = new SalmonShop("Pike Place: ", 17, 88, 5.2);
pikePlace.render();
var seaTac = new SalmonShop("SeaTac: ", 6, 24, 1.2);
seaTac.render();
var southCenter = new SalmonShop("Southcenter: ", 11, 38, 1.9);
southCenter.render();
var bellevue = new SalmonShop("Bellevue Square: ", 20, 48, 3.3);
bellevue.render();
var alki = new SalmonShop("Alki: ", 3, 24, 2.6);
alki.render();
