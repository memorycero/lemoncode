

class SlotMachine {

    private counter: number = 0;
    private result: boolean;

    public play() {

        this.incrementCounter();

        this.generateResult();

        this.checkResult();
    }

    private incrementCounter() {
        this.counter += 1;
    }

    private generateResult() {
        this.result = this.generateSingleResult()
            && this.generateSingleResult()
            && this.generateSingleResult();
    }

    private generateSingleResult(): boolean {
        return new Boolean(Math.floor(Math.random() * Math.floor(2))).valueOf();
    }

    private checkResult() {
        if(this.result){
            console.log("Congratulations!!!. You won " +  this.counter  + " coins!!");
            this.resetCounter();
        } else {
            console.log("Good luck next time!!");
        }
    }

    private resetCounter() {
        this.counter = 0;
    }
}

const machine1 = new SlotMachine();
for (let index = 0; index < 20; index++) {
    machine1.play();
}