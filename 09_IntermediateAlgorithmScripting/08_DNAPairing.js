// DNA Pairing
/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by
the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the
missing base pairs for the provided DNA strand. For each character in the
provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are
grouped into one encapsulating array.
*/

function pairElement(str) {
  var inputStrand = str.split("");
  var result = [];

  for(let i=0;i< inputStrand.length; i++){
    result.push([inputStrand[i],findMatch(inputStrand[i])]);    
  }

  return result;
}

function findMatch(char){

  switch(char){
    case "C":
    return "G";
    case "G":
    return "C";
    case "A":
    return "T";
    case "T":
    return "A";
    default:
    console.log("Wrong Key");
    break;
  }

}

pairElement("GCG");

// Solutin 2
/*
function pairElement(str) {
    // create object for pair lookup
    const pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  
    // map character to array of character and matching pair
    return str
      .split("")
      .map(x => [x, pairs[x]]);
  }
  
  // test here
  pairElement("GCG");
*/