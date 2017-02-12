storeHours = ['10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:'];
var pikePlace = new salmonShop ("Pike Place: ", 17, 88, 5.2);
var seaTac = new salmonShop ("SeaTac: ", 6, 24, 1.2);
var southCenter = new salmonShop ("Southcenter: ", 11, 38, 1.9);
var bellevue = new salmonShop ("Bellevue Square: ", 20, 48, 3.3);
var alki = new salmonShop ("Alki: ", 3, 24, 2.6);

function salmonShop(storeLocation, min, max, avg) {
  this.storeLocation = storeLocation;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieArrHr = [];
  this.totals = 0;
};

salmonShop.prototype.randomNumber = function() {
  return Math.floor (Math.random() * (this.max - this.min + 1) + this.min);
};

salmonShop.prototype.salesPerHr = function () {
  for (var i = 0; i< storeHours.length; i++) {
  var ranNumb = Math.round(this.randomNumber() * this.avg);
  this.cookieArrHr.push(ranNumb);
  this.totals += ranNumb;
  }
};

var table = document.getElementById('cookieData');
var createRowElement = document.createElement('tr');
  table.appendChild(createRowElement);
function genTable(){
var store = document.createElement('th');
  store.textContent = 'Store Name:';
  createRowElement.appendChild(store);

for (var i = 0; i < storeHours.length; i++) {
  var storeHrs = document.createElement('th');
  storeHrs.textContent = storeHours[i];
  createRowElement.appendChild(storeHrs);
};
var storeTot = document.createElement('th');
  storeTot.textContent = 'Total : ';
  createRowElement.appendChild(storeTot);
};
  genTable();

  salmonShop.prototype.render = function() {
    this.salesPerHr();
  var storeName = document.createElement('tr')
  storeName.textContent = this.storeLocation;
  table.appendChild(storeName);

  for (var i = 0; i < storeHours.length; i++) {
  var dataElement = document.createElement('td');
  dataElement.textContent = this.cookieArrHr[i];
  storeName.appendChild(dataElement);
  };
  var cookieTot = document.createElement('td');
  cookieTot.textContent = this.totals;
  storeName.appendChild(cookieTot);
  };
  bellevue.render();
pikePlace.render();
