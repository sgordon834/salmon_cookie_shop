var storeHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var pikePlace = {
    min: 17,
    max: 88,
    avg: 5.2,
    total: 0,
    cookieArr: [],

    genNumb: function(min, max) {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    // console.log(pikePlace.min, pikePlace.max);
    // console.log(pikePlace);
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

    render: function() {
        var ul = document.getElementById('pike-place');
        // console.log(pikeStoreEl);
        var child;
        // var total = 0;
        for (var i = 0; i < 8; i++) {
          var li = document.createElement('li');
          li.textContent = storeHours[i] + ' ' + this.cookieArr[i];
          ul.appendChild(li);


            // var pikeStoreEl = document.getElementById('pike-place');
            // console.log(pikeStoreEl);
            // var liEl = document.createElement('li');
            // for (var i = 0; i < storeHours.length; i++) {
            //   liEl.textContent = (storeHours + ' ' + this.total);
            //   ulEl.appendChild(liEl);
            //   console.log(storeHours);
        }
        li.textContent = 'Totals ' + this.total;
        ul.appendChild(li);
    }
};
pikePlace.genNumb();
pikePlace.cookiePerHr();
pikePlace.render();
// pikePlace.cookiePerHr();
