/**
 * Mediator Coding Exercise
Our system has any number of instances of Participant  classes. Each Participant has a value integer attribute, initially zero.

A participant can say()  a particular value, which is broadcast to all other participants. At this point in time, every other participant is obliged to increase their value  by the value being broadcast.

Example:

Two participants start with values 0 and 0 respectively

Participant 1 broadcasts the value 3. We now have Participant 1 value = 0, Participant 2 value = 3

Participant 2 broadcasts the value 2. We now have Participant 1 value = 2, Participant 2 value = 3
 */

class Mediator {
    constructor() {
        this.participants = [];
    }

    addParticipants(participant) {
        this.participants.push(participant)
    }

    broadcast(sender, n) {
        // add values to all participants
        for (let i = 0; i < this.participants.length; i++) {
            console.log(this.participants[i].value)
            if (this.participants[i] != sender) {
                this.participants[i].value += n;
            }
        }
    }
}

class Participant {
    constructor(mediator) {
        this.mediator = mediator;
        this.value = 0;
        this.mediator.addParticipants(this)
    }

    say(n) {
        this.mediator.broadcast(this, n);
    }
}