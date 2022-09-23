/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function GenerateRandomNumberOnRange(MinNumber, MaxNumber) {
  return Math.floor(Math.random() * MaxNumber) + MinNumber;
}

function BuildTheExcuse() {
  var result = "";

  let randomWho = who[GenerateRandomNumberOnRange(0, (who.length - 1))];
  let randomAction = action[GenerateRandomNumberOnRange(0, (action.length - 1))];
  let randomWhat = what[GenerateRandomNumberOnRange(0, (what.length - 1))];
  let randomWhen = when[GenerateRandomNumberOnRange(0, (when.length - 1))];

  result = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  return result;
}

window.onload = function() {
  //write your code here
  let result = BuildTheExcuse();

  document.getElementById("excuse").innerHTML = result;
};
