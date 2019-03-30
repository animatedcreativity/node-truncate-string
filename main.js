exports = module.exports = function(string, length, options) {
  var sanitize = require("node-sanitize-options");
  options = sanitize.options(options, {
    fullWord: true,
    splits: [" ", ",", "."]
  });
  options.ellipsis = sanitize.options(options.ellipsis, {
    char: ".",
    length: 3
  });
  if (typeof string !== "string") string = String(string);
  if (typeof length === "undefined") length = string.length;
  var str = "";
  var result;
  for (var i=0; i<=string.length-1; i++) {
    var char = string.substr(i, 1);
    str += char;
    if ((str.length >= length && options.fullWord === false)) result = str;
    if ((str.length >= length && options.fullWord === true && options.splits.indexOf(char) != -1)) result = str.substr(0, str.length - 1);
    if (i === string.length-1) result = str;
    if (typeof result !== "undefined") break;
  }
  var repeat = function() { var str = ""; for (var i=0; i<=options.ellipsis.length-1; i++) str += options.ellipsis.char; return str; };
  if (result.length < string.length) {
    return result + repeat();
  } else {
    return string;
  }
};