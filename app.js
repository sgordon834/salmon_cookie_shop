var storeHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  cookieArr: [],

  ranNumb: function(min, max) {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
// console.log(pikePlace.min, pikePlace.max);
// console.log(pikePlace);
  makeCookie: function() {
  for(var i = 0; i < storeHours.length; i++) {
    var hourlyCookies = Math.round(this.avg) * this.ranNumb();
    pikePlace.cookieArr.push(hourlyCookies);
  }
  console.log(pikePlace.cookieArr);
  }
};
pikePlace.makeCookie();
