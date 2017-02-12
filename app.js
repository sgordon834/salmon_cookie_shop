//Global variable for time shop is open
var storeHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  total: 0,
  cookieArr: [],
  //Generates random number
  genNumb: function(min, max) {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  // console.log(pikePlace.min, pikePlace.max);
  // function to calculate avg cookies w/ random number
  cookiePerHr: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var hourlyCookies = Math.round(this.avg) * this.genNumb();
      this.cookieArr.push(hourlyCookies);
      this.total += hourlyCookies;

    }
    return this.cookieArr;
    console.log(this.total);
    // console.log(pikePlace.hourlyCookies);
  },
  //Render function to html
  render: function() {
    var ul = document.getElementById('pike-place');
    // console.log(this.cookieArr);
    var child;
    for (var i = 0; i < 8; i++) {
      var li = document.createElement('li');
      li.textContent = storeHours[i] + ' ' + this.cookieArr[i];
      ul.appendChild(li);
    }
    li.textContent = 'Totals ' + this.total;
    ul.appendChild(li);
  }
};
pikePlace.genNumb();
pikePlace.cookiePerHr();
pikePlace.render();
// pikePlace.cookiePerHr();

//Second shop

var seaTac = {
  min: 6,
  max: 24,
  avg: 1.2,
  total: 0,
  cookieArr: [],
  //Generates random number
  genNumb: function(min, max) {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  // console.log(pikePlace.min, pikePlace.max);
  // function to calculate avg cookies w/ random number
  cookiePerHr: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var hourlyCookies = Math.round(this.avg) * this.genNumb();
      this.cookieArr.push(hourlyCookies);
      this.total += hourlyCookies;

    }
    return this.cookieArr;
    console.log(this.total);
    // console.log(pikePlace.hourlyCookies);
  },
  //Render function to html
  render: function() {
    var ul = document.getElementById('seaTac');
    // console.log(this.cookieArr);
    var child;
    for (var i = 0; i < 8; i++) {
      var li = document.createElement('li');
      li.textContent = storeHours[i] + ' ' + this.cookieArr[i];
      ul.appendChild(li);
    }
    li.textContent = 'Totals ' + this.total;
    ul.appendChild(li);
  }
};
seaTac.genNumb();
seaTac.cookiePerHr();
seaTac.render();
// pikePlace.cookiePerHr();
