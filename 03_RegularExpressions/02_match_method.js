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
let resultTwo = quoteSample.match(alphabetRegex);

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

// Find Characters with Lazy Matching
/*
You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is 
basically a pattern that starts with t, ends with i, and has some letters 
in between.

However, you can use the ? character to change it to lazy matching. "titanic" 
matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided, but pattern 
matching an HTML string with regular expressions is completely fine.
*/

/*
Q

Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter 
is coming</h1>". Remember the wildcard . in a regular expression matches any 
character.
*/

let text = "<h1>Winter is coming</h1>";
let myRegexSeven = /<.*?>/;
let resultSeven = text.match(myRegex);


/*
Question :

Time to pause and test your new regex writing skills. A group of criminals 
escaped from jail and ran away, but you don't know how many. However, you do 
know that they stay close together when they are around other people. You are
responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a 
row. It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
But it does not find matches in the following strings since there are no 
letter z characters:

""
"ABC"
"abcabc"
Write a greedy regex that finds one or more criminals within a group of other 
people. A criminal is represented by the capital letter C.

*/

let reCriminals = /C+/;

// Match Beginning String Patterns
/*
In an earlier challenge, you used the caret character (^) inside a character 
set to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
Outside of a character set, the caret is used to search for patterns at the 
beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
The first test call would return true, while the second would return false.
*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let resultEight = calRegex.test(rickyAndCal);

// Match Ending String Patterns
/*
You can search the end of strings using the dollar sign character $ at the end 
of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

The first test call would return true, while the second would return false.
*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let resultNine = lastRegex.test(caboose);

// Match All Letters and Numbers
/*
The closest character class in JavaScript to match the alphabet is \w. 
This shortcut is equal to [A-Za-z0-9_]. This character class matches upper 
and lowercase letters plus numbers. Note, this character class also includes 
the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

All four of these test calls would return true.

These shortcut character classes are also known as shorthand character classes.
*/

let quoteSampleTen = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let resultTen = quoteSampleTen.match(alphabetRegexV2).length;

// Match Everything But Letters and Numbers
/*
You can search for the opposite of the \w with \W. Note, the opposite pattern 
uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

The first match call would return the value ["%"] and the second would return ["!"].
*/

let quoteSampleEleven = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi;
let resultEleven = quoteSampleEleven.match(nonAlphabetRegex).length;

// Match All Numbers
/*
The shortcut to look for digit characters is \d, with a lowercase d. This is equal 
to the character class [0-9], which looks for a single character of any number between 
zero and nine.
*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi;
let resultTwelve = movieName.match(numRegex).length;

// Match All Non-Numbers
/*
The shortcut to look for non-digit characters is \D. This is equal to the character 
class [^0-9], which looks for a single character that is not a number between zero 
and nine.
*/

let movieNameTwo = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let resultThirdteen = movieNameTwo.match(noNumRegex).length;

// Restrict Possible Usernames
/*
QUESTION
You need to check all the usernames in a database. Here are some simple rules that 
users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more 
of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can 
only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
// second solution : let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let resultUserName = userCheck.test(username);

// Match Whitespace
/*
You can search for whitespace using \s, which is a lowercase s. This pattern 
not only matches whitespace, but also carriage return, tab, form feed, and new 
line characters. You can think of it as similar to the character 
class [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

This match call would return [" ", " "].
*/
/*
Q : Change the regex countWhiteSpace to look for multiple whitespace 
characters in a string. */

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let resultFourteen = sample.match(countWhiteSpace);

// Match Non-Whitespace Characters
/*
Search for non-whitespace using \S, which is an uppercase s. This pattern 
will not match whitespace, carriage return, tab, form feed, and new line 
characters. You can think of it being similar to the character class 
[^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;

The value returned by the .length method would be 32.
*/

let sampleTwo = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let resultFifteen = sample.match(countNonWhiteSpace);

// Specify Upper and Lower Number of Matches
/*
You can specify the lower and upper number of patterns with quantity specifiers. 
Quantity specifiers are used with curly brackets ({ and }). You put two numbers 
between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the 
string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
The first test call would return true, while the second would return false.
*/

/* Q: Change the regex ohRegex to match the entire phrase Oh no only when it 
has 3 to 6 letter h's. */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let resultSixteen = ohRegex.test(ohStr);

// Specify Only the Lower Number of Matches
/*
To only specify the lower number of patterns, keep the first number followed 
by a comma.

For example, to match only the string hah with the letter a appearing at least 
3 times, your regex would be /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);

In order, the three test calls would return true, false, and true.
*/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let resultSeventeen = haRegex.test(haStr);

// Specify Exact Number of Matches
/*
To specify a certain number of patterns, just have that one number 
between the curly brackets.

For example, to match only the word hah with the letter a 3 times, 
your regex would be /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);

In order, the three test calls would return false, true, and false.
*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let resultEighteen = timRegex.test(timStr);

// Check for All or None
/*
You can specify the possible existence of an element with a question 
mark, ?. This checks for zero or one of the preceding element. You can 
think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English 
and you can use the question mark to match both spellings.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

Both uses of the test method would return true.
*/

let favWord = "favorite";
let favRegex = /favou?rite/;
let resultNineteen = favRegex.test(favWord);

// Positive and Negative Lookahead
/*
Lookaheads are patterns that tell JavaScript to look-ahead in your string 
to check for patterns further along. This can be useful when you want to 
search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search 
pattern is there, but won't actually match it. A positive lookahead is 
used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element 
in the search pattern is not there. A negative lookahead is used as (?!...) 
where the ... is the pattern that you do not want to be there. The rest of the 
pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);

Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one 
string. Here is a (naively) simple password checker that looks for between 
3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let resultTwenty = pwRegex.test(sampleWord);

// Check For Mixed Grouping of Characters
/*
Sometimes we want to check for groups of characters using a Regular 
Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the 
following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using 
the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

The test method here would return true.
*/

let myString = "Eleanor Roosevelt";
let myRegexTwentyOne = /(Franklin D.|Eleanor) Roosevelt/;
let resultTwentyOne = myRegexTwentyOne.test(myString); 

// Reuse Patterns Using Capture Groups
/*

let repeatStr = "row row row your boat";

You could use /row row row/, but what if you don't know the specific word 
repeated? Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured 
in parentheses. In this case, the goal is to capture a word consisting of 
alphanumeric characters so the capture group will be \w+ enclosed by 
parentheses: /(\w+)/.

The substring matched by the group is saved to a temporary "variable", which 
can be accessed within the same regex using a backslash and the number of the 
capture group (e.g. \1). Capture groups are automatically numbered by the 
position of their opening parentheses (left to right), starting at 1.

The example below matches a word that occurs thrice separated by spaces:

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
Using the .match() method on a string will return an array with the matched 
substring, along with its captured groups.
*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let resultTwentyTwo = repeatNum.match(reRegex);

// Use Capture Groups to Search and Replace
/*
You can search and replace text in a string using .replace() on a string. 
The inputs for .replace() is first the regex pattern you want to search for. 
The second parameter is the string to replace the match or a function to do 
something.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

The replace call would return the string The sky is blue..

You can also access capture groups in the replacement string with dollar 
signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

The replace call would return the string Camp Code.
*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1";
let resultTwentyThree = str.replace(fixRegex, replaceText);

// Remove Whitespace from Start and End
/*
Question
Sometimes whitespace characters around strings are not wanted but are there. 
Typical processing of strings is to remove the whitespace at the start and 
end of it.

Write a regex and use the appropriate string methods to remove whitespace at 
the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to 
complete this challenge using regular expressions.
*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let resultTwentyFour = hello.replace(wsRegex, "");