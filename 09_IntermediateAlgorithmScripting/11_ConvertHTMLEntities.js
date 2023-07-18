// Convert HTML Entities
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
string to their corresponding HTML entities.
*/

function convertHTML(str) {
    var string = str.split("");
  
    for (var i = 0; i < string.length; i++) {
      switch (string[i]) {
        case "<":
          string[i] = "&lt;";
          break;
        case "&":
          string[i] = "&amp;";
          break;
        case ">":
          string[i] = "&gt;";
          break;
        case '"':
          string[i] = "&quot;";
          break;
        case "'":
          string[i] = "&apos;";
          break;
      }
    }
  
    string = string.join("");
    return string;
}

convertHTML("Dolce & Gabbana");

// Solution 2 

/*
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");
*/

// Solution 3
/*
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");
*/