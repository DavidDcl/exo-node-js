let info = require("./information.js");
let cowsay = require("cowsay");
let message = `Hello I'm ${info.information.name} from: ${info.information.campus} campus`;
//console.log(message);

console.log(
  cowsay.say({
    text: message,
    e: "oO",
    T: "U ",
  })
);
