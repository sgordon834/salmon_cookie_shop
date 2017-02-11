var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  cookieArr = [];

  ranNumb: function(min, max) {
    return Math.floor (Math.random() * (this.max - this.min + 1) + this.min);
}
}
// cookieArr = [];

// makeCookie = function() {
//   for(var i = 0; i < 8; i++) {
//     this.cookieArr[i] = Math.round(this.ranNumb(this.min, this.max) * this.avg);
//   }
// }
// pikePlace.makeCookie();
