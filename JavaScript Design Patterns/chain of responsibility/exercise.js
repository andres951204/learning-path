/**
 * Chain of Responsibility Coding Exercise
You are given a game scenario with classes Goblin and GoblinKing. Please implement the following rules:

A goblin has base 1 attack/1 defense (1/1), a goblin king is 3/3.

When the Goblin King is in play, every other goblin gets +1 Attack.

Goblins get +1 to Defense for every other Goblin in play (a GoblinKing is a Goblin!).

Example:

Suppose you have 3 ordinary goblins in play. Each one is a 1/3 (1/1 + 0/2 defense bonus).

A goblin king comes into play. Now every goblin is a 2/4 (1/1 + 0/3 defense bonus from each other + 1/0 from goblin king)

The state of all the goblins has to be consistent as goblins are added and removed from the game.

Here is an example of the kind of test that will be run on the system:

let game = new Game();
let goblin = new Goblin(game);
expect(goblin.attack).toEqual(1);
expect(goblin.defense).toEqual(1);
Note: creature removal (unsubscription) does not need to be implemented.
 */

class Goblin {
    constructor(game, baseAttack, baseDefense) {
        this.game = game;
        this.baseAttack = 1;
        this.baseDefense = 1;
        this.game.addGoblins(this);
    }

    get attack() {
        let attackCheck = 0
        console.log(this.game.goblins.length)
        for (let i = 0; i < this.game.goblins.length; i++) {
            console.log(this.game.goblins[i].baseAttack)

            let goblin = this.game.goblins[i];
            if (goblin instanceof GoblinKing) {
                attackCheck++
            }
        }

        return this.baseAttack + attackCheck
    }

    get defense() {
        let defenseCheck = this.game.goblins.length - 1
        return this.baseDefense + defenseCheck
    }

}

class GoblinKing extends Goblin {
    constructor(game) {
        super(game)
        this.baseDefense = 3;
        this.baseAttack = 3;
    }

}

class Game {
    constructor() {
        this.goblins = []
    }

    addGoblins(goblin) {
        this.goblins.push(goblin)
        return this
    }
}
