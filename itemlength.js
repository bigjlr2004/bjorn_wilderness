// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
  let total = 0;
  for (const trail of trails) {
    total += trail.length;
  }

  return total;
};

// Get the shortest of all trails
const shortyTrail = (trailArray) => {
  // Set the value of the shortest variable to a number equal to the lenth of all the trails added together
  // As the function iterates through the array each value that is shorter in the array will be saved as the shortest value.
  let shortest = totalTrailMiles(trailArray);
  for (const trail of trailArray) {
    if (trail.length < shortest) {
      shortest = trail.length;
    }
  }
  return shortest;
};

// Get the longest of all trails
const longTrail = (allTrails) => {
  let longest = 0;
  for (const trail of allTrails) {
    if (trail.length > longest) {
      longest = trail.length;
    }
  }

  return longest;
};

module.exports = { longTrail, shortyTrail, totalTrailMiles };
