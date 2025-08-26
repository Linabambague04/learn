import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: `./counter-page.component.html`,
    styles: [`
        h1{
            font-family: Arial, sans-serif;
            color: #000000;
        }

        button {
            padding: 10px;
            margin: 5px;
            width: 100px;
        }
    `],

    // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent{

    counter = 0;

    counterSignal = signal(10);

    /*constructor() {
        setInterval(() => {
            this.increaseBy(1);
            // this.counter++;
            //this.counterSignal.update(current => current + 1);
            console.log('Tick');
        },1000);
    }*/

    increaseBy(value: number) {
        this.counter += value;
        // this.counterSignal.set(this.counterSignal() + value);
        // Alternatively, using the update method
        this.counterSignal.update(current => current + value);
    }

    decreaseBy(value: number) {
        this.counter -= value;
    }

    reset() {
        this.counter = 0;
        this.counterSignal.set(0);
    }

}