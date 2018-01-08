var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray() {
  chocolateBars.push("twix");
}
function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("m & m's");
}
function addElementToEndOfArray() {
  [...chocolateBars, "twix"]
}
function destructivelyAddElementToEndOfArray() {
  ["twix", ...chocolateBars]
}
