// Use getters and setters to Control Access to an Object

/*
Getter functions are meant to simply return (get) the value of an object's 
private variable to the user without the user directly accessing the private 
variable.

Setter functions are meant to modify (set) the value of an object's private 
variable based on the value passed into the setter function. This change could 
involve calculations, or even overwriting the previous value completely.

class Book {
    constructor(author) {
        this._author = author;
    }
  // getter
    get writer() {
        return this._author;
    }
  // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
The console would display the strings anonymous and newAuthor.

Notice the syntax used to invoke the getter and setter. They do not even look 
like functions. Getters and setters are important because they hide internal 
implementation details.

Note: It is convention to precede the name of a private variable with an 
underscore (_). However, the practice itself does not make a variable private.
*/
class Thermostat{
    constructor(temperature)
    {
        this._temperature = temperature;
    }

    get temperature()
    {
        return this.getCelsius(this._temperature);
    }

    set temperature(updateTemperature)
    {
        this._temperature = this.getFahrenhaitScale(updateTemperature);
    }

    getCelsius(fahrenhaitScale)
    {
        return 5/9 * (fahrenhaitScale-32);
    }

    getFahrenhaitScale(celsiusScale)
    {
        return celsiusScale * 9.0 / 5 +32;
    }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
