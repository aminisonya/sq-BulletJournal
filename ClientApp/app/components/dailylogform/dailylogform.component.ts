import { Component, OnInit } from '@angular/core';
import { DailyLogEntry } from './dailylogentry';
import { DailyLogService } from './dailylogform.service';
import { Router } from '@angular/router';

@Component({
    selector: 'dailylogform',
    templateUrl: './dailylogform.component.html',
    providers: [DailyLogService]
})
export class DailyLogFormComponent implements OnInit {
    entriesList: DailyLogEntry[];

    todaysDate: Date = new Date();

    entryTypes = ['Task', 'Event', 'Note'];

    constructor(private dailyLogService: DailyLogService, private _router: Router) { }

    ngOnInit() {
        this.getAllEntries();
    }

    getAllEntries(): void {
        this.dailyLogService.getAllEntries()
            .subscribe(res => this.entriesList = res);
    }

    add(entry: DailyLogEntry) {
        if (!entry.entry && !entry.entrytype) {
            return;
        }

        entry.date = this.todaysDate;
        
        this.dailyLogService.addEntry(entry)
            .subscribe(res => console.log(res));

        this.getAllEntries();
    }

    editDailyLog(Id: number) {
        this._router.navigate(['dailylog', Id]);
    }
}