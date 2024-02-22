/**
 * Observer Coding Exercise
Imagine a game where one or more rats can attack a player. 
Each individual rat has an initial attack value of 
1. However, rats attack as a swarm, so each rat's attack value is actually equal to the total number of rats in play.

Given that a rat enters play through the initializer and leaves play (dies) via its die() 
method, please implement the Game and Rat classes so that, at any point in the game, 
the attack value of a rat is always consistent.

Here's a sample unit test your code should pass:

let game = new Game();
let rat = new Rat(game);
let rat2 = new Rat(game);
expect(rat.attack).toEqual(2);
expect(rat2.attack).toEqual(2);
 */

class Game {
    constructor() {
        this.players = []
    }

    enters(player) {
        this.players.push(player)
        this.players.map((player) => {
            console.log(player.attack)
            player.attack = this.players.length
        }
        )
        return this
    }

    leaves(player) {
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
        this.players.map((player) => {
            console.log(player.attack)
            player.attack = this.players.length
        }
        )
        return this
    }

}


class Rat {
    constructor(game) {
        this.game = game
        this.attack = 1
        this.game.enters(this)
    }

    die() {
        this.game.leaves(this)
    }
}