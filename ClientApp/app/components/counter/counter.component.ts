import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public inputText = '';

    public submitEntry() {
        this.currentCount++;
    }
}
