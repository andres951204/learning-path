/**
 * Flyweight Coding Exercise
You are given a class called Sentence ,
 which takes a string such as 'hello world'. 
 You need to provide a method at(index) such that the method returns a flyweight that can be used to capitalize a 
 particular word in the sentence.

Typical use would be something like:

let s = new Sentence('alpha beta gamma');
s.at(1).capitalize = true;
console.log(s.toString()); // alpha BETA gamma
 */

class Sentence {
    constructor(words) {
        this.words = words.split(' ');
        this.tokens = {};
    }

    at(index) {
        if (this.tokens[index] === undefined) {
            this.tokens[index] = new WordToken();
        }
        return this.tokens[index];
    }

    toString() {
        let result = [];
        for (let i = 0; i < this.words.length; i++) {
            let word = this.words[i];
            let token = this.tokens[i];
            if (token && token.capitalize) {
                result.push(word.toUpperCase());
            } else {
                result.push(word);
            }
        }
        return result.join(' ');
    }
}

class WordToken {
    constructor(capitalize = false) {
        this.capitalize = capitalize;
    }
}
