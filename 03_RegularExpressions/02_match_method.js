// Match Single Character with Multiple Possibilities
/*
You can search for a literal pattern with some flexibility with 
character classes. Character classes allow you to define a group 
of characters you wish to match by placing them inside square 
([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. 
You can create the regex /b[aiu]g/ to do this. The [aiu] is the 
character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

In order, the four match calls would return the values ["big"], 
["bag"], ["bug"], and null.
*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiouAEIOU]/gi;
let result = quoteSample.match(vowelRegex);
console.log(result);

// Match Letters of the Alphabet
/*
Inside a character set, you can define a range of characters to 
match using a hyphen character: -

Which can be used for large range characters.

For example, to match lowercase letters a through e you would use [a-e].

Note also work with numbers and Uppercase letters.
*/

let quoteSampleTwo = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let resultTwo = quoteSample.match(alphabetRegex); \

let quoteSampleThree = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let resultThree = quoteSample.match(myRegex);

// Match Single Characters Not Specified
/*
To create a negated character set, you place a caret character (^) after 
the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. 
Note that characters like ., !, [, @, / and white space are matched - 
the negated vowel character set only excludes the vowel characters.
*/

// Create a single regex that matches all characters that are not a 
// number or a vowel. Remember to include the appropriate flags in the 
// regex.

let quoteSampleFour = "3 blind mice.";
let myRegexFour = /[^ie3]/gi;
let resultFour = quoteSample.match(myRegex); 

// Match Characters that Occur One or More Times
/*
Sometimes, you need to match a character (or group of characters) that 
appears one or more times in a row. This means it occurs at least once, 
and may be repeated.

You can use the + character to check if that is the case. Remember, the 
character or pattern has to be present consecutively. That is, the 
character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because 
of the +, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches 
and return ["a", "a"] because the a characters are not in a row - there 
is a b between them. Finally, since there is no a in the string bcd, it 
wouldn't find a match.
*/

let difficultSpelling = "Mississippi";
let myRegexFive = /s+/g;
let resultFive = difficultSpelling.match(myRegex);

// Match Characters that Occur Zero or More Times
/*
The last challenge used the plus + sign to look for characters that occur 
one or more times. There's also an option that matches characters that 
occur zero or more times.

The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go* /;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
In order, the three match calls would return the values ["goooooooo"], 
["g"], and null.
*/

/*
Q
For this challenge, chewieQuote has been initialized as the string 
Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex 
that uses the * character to match an uppercase A character immediately 
followed by zero or more lowercase a characters in chewieQuote. Your 
regex does not need flags or character classes, and it should not match 
any of the other quotes.
*/

let chewieRegex = /Aa*/; 
let resultSix = chewieQuote.match(chewieRegex);

