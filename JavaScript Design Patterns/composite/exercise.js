/**
 * Composite Coding Exercise
Consider the code presented below. 
We have two classes called SingleValue and ManyValues. 
SingleValue stores just one numeric value (initialized in the constructor), 
but ManyValues can store either numeric values or SingleValue objects (assume it implements a push() 
method for adding items).

You are asked to write a function called sum that takes an array of items 
(any item can be either SingleValue or ManyValues).

Here is a sample Jasminea unit test:

describe('composite', function()
{
  it('should sum up different objects', function()
  {
    let singleValue = new SingleValue(11);
    let otherValues = new ManyValues();
    otherValues.push(22);
    otherValues.push(33);
    expect(sum([singleValue, otherValues])).toEqual(66);
  });
});
 */

class SingleValue {
    constructor(number) {
        this.number = number;
    }

    getValue() {
        return this.number;
    }
}

class ManyValues {
    constructor() {
        this.numbers = [];
    }

    push(number) {
        this.numbers.push(number);
    }

    getValue() {
        return this.numbers;
    }
}

function sum(valueObjects) {
    let sum = 0;
    valueObjects.forEach((valueObject) => {
        const value = valueObject.getValue();

        if (value.length) {
            value.forEach((number) => {
                sum += number;
            });
        } else {
            sum += value;
        }
    });
    return sum;
}