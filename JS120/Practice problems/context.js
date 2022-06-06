let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }, this);
  },
};

let franchise1 = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
  	let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

let franchise2 = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

let franchise3 = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => this.name + ' ' + number);
  },
};

console.log(franchise.allMovies());
console.log(franchise1.allMovies());
console.log(franchise2.allMovies());
console.log(franchise3.allMovies());