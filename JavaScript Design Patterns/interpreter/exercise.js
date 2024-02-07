/**
 * 
Interpreter Coding Exercise
You are asked to write an expression processor for simple numeric expressions with the following constraints:

Expressions use integral values (e.g., '13' ), single-letter variables defined in Variables, as well as + and - operators only

There is no need to support braces or any other operations

If a variable is not found in variables  (or if we encounter a variable with >1 letter, e.g. ab), the evaluator returns 0 (zero)

In case of any parsing failure, evaluator returns 0

Example:

calculate("1+2+3")  should return 6

calculate("1+2+xy")  should return 0

calculate("10-2-x")  when x=3 is in variables  should return 5
 */

class ExpressionProcessor {
    constructor() {
        this.variables = {};
    }

    separateCharacters(str) {
        let tokens = ["+", "-"]
        var tempChar = tokens[0]; // We can use the first token as a temporary join character
        console.log(str.split("+"))
        for (var i = 1; i < tokens.length; i++) {
            console.log(str)
            let test = str.split(tokens[i])
            console.log(test)
            str = str.split(tokens[i]).join(tempChar);
        }
        str = str.split("");
        console.log("str " + str)
        return str;

    }

    calculate(expression) {
        this.separateCharacters(expression)
        let tokens = expression.match(/[a-z]+|\d+|[+\-]/g);
        if (!tokens) return 0;

        let position = 0;

        const evaluate = () => {
            let currentToken = tokens[position];

            if (currentToken.match(/\d+/)) {
                position++;
                return parseInt(currentToken);
            } else if (currentToken.match(/[a-z]/)) {
                if (currentToken.length === 1 && this.variables.hasOwnProperty(currentToken)) {
                    position++;
                    return this.variables[currentToken];
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        };

        let value = evaluate();

        while (position < tokens.length) {
            let operator = tokens[position];
            if (operator === "+" || operator === "-") {
                position++;
                let nextValue = evaluate();
                value = operator === "+" ? value + nextValue : value - nextValue;
            } else {
                return 0;
            }
        }

        return value;
    }
}