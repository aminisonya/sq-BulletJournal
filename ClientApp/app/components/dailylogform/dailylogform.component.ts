import { Component, OnInit } from '@angular/core';
import { DailyLogEntry } from '../../../dailylogentry';
import { DailyLogService } from './dailylogform.service';

@Component({
    selector: 'dailylogform',
    templateUrl: './dailylogform.component.html',
    providers: [DailyLogService]
})
export class DailyLogFormComponent implements OnInit {
    dailylogs: DailyLogEntry[];

    entryTypes = ['Task', 'Event', 'Note'];

    constructor(private dailyLogService: DailyLogService) { }

    ngOnInit() {
        this.getAllEntries();
    }

    getAllEntries(): void {
        this.dailyLogService.getAllEntries()
            .subscribe(res => console.log(res));
    }

    add(entry: DailyLogEntry) {
        if (!entry.entry && !entry.entrytype) {
            return;
        }
        
        this.dailyLogService.addEntry(entry)
            .subscribe(res => console.log(res));
    }
}