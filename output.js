const outputItem = (array, itemType) => {
  for (const element of array) {
    console.log(
      `${element.name} starts at [${element.longitude} , ${element.latitude}] and is ${element.length} kilometers long.`
    );
    if (itemType === "river") {
      console.log(`The unique fish for this trip is ${element.uniqueFish}.
        `);
    }
    if (itemType === "trail")
      console.log(
        `The highlighted plant for this trip is ${element.plantHighlight}.
        `
      );
  }
};
const displayItems = (array, title) => {
  console.log(`${title}`);
  for (const element of array) {
    console.log(`      ${element.name} : ${element.price} `);
  }
};

module.exports = { outputItem, displayItems };
