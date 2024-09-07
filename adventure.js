const { rivers, wildlife, trails } = require("./data.js");
const { expensiveTrails, cheapTrails } = require("./money.js");
const { outputItem, displayItems } = require("./output.js");
const { longTrail, shortyTrail, totalTrailMiles } = require("./itemlength.js");

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`);

console.log("***************************************************");
console.log("*****              T R A I L S                *****");
console.log("***************************************************");
const trailTotal = totalTrailMiles(trails);
console.log(
  `We service ${Math.ceil(trailTotal)} miles of wilderness trails across the US`
);

const shortTrail = shortyTrail(trails);
const longestTrail = longTrail(trails);
console.log(`The shortest trail is ${shortTrail} kilometers`);

console.log(`The longest trail is ${longestTrail} kilometers`);

const cList = cheapTrails(trails);
const eList = expensiveTrails(trails);
console.log("~~~~~~~~~~~~~~~~~~~~~Trails~~~~~~~~~~~~~~~~~~~");
displayItems(cList, "The least expensive trails are");
displayItems(eList, "The most expensive trails are");

console.log(`TRAIL DETAILS:
---------------------------------`);

outputItem(trails, "trail");

console.log(`
    ***************************************************
    *****              R I V E R S                *****
    ***************************************************`);
const riverTotal = totalTrailMiles(rivers);
console.log(
  `We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`
);

const shortRiver = shortyTrail(rivers);
const longRiver = longTrail(rivers);
console.log(`The shortest river tour is ${shortRiver} kilometers`);
console.log(`The longest river tour is ${longRiver} kilometers`);

const crList = cheapTrails(rivers);
const erList = expensiveTrails(rivers);
console.log("~~~~~~~~~~~~~~~~~~~~~Rivers~~~~~~~~~~~~~~~~~~~");
displayItems(crList, "The least expensive rivers are");
displayItems(erList, "The most expensive rivers are");

console.log(`RIVER DETAILS:
    ---------------------------------`);

outputItem(rivers, "river");
