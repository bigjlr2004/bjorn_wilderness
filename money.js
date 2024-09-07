const expensiveTrails = (array) => {
  //Declare an empty array for expensive trails.
  priceyTrails = [];
  for (const element of array) {
    if (element.price.length > 4) {
      priceyTrails.push(element);
    }
  }
  return priceyTrails;
};

const cheapTrails = (array) => {
  //Declare an empty array for expensive trails.
  cheapyTrails = [];
  for (const element of array) {
    if (element.price.length < 2) {
      cheapyTrails.push(element);
    }
  }
  return cheapyTrails;
};

module.exports = { expensiveTrails, cheapTrails };
