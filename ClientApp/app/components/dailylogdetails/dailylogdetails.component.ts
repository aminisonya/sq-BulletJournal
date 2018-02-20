import { Component, OnInit } from '@angular/core';
import { DailyLogEntry } from '../dailylogform/dailylogentry';
import { DailyLogService } from '../dailylogform/dailylogform.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dailylogdetails',
    templateUrl: './dailylogdetails.component.html',
    providers: [DailyLogService]
})
export class DailyLogDetailsComponent implements OnInit {
    entryId: number;

    currentEntry: DailyLogEntry;

    entryTypes = ['Task', 'Event', 'Note'];

    constructor(private route: ActivatedRoute, private dailyLogService: DailyLogService) {
        this.route.params.subscribe(res => this.entryId = res.id);
    }

    ngOnInit() {
        this.getById(this.entryId);
    }

    getById(entryId: number) {
        this.dailyLogService.getById(entryId)
            .subscribe(res => this.currentEntry = res);
    }

    updateDailyLog(updatedEntry: DailyLogEntry) {
        updatedEntry.date = this.currentEntry.date;

        console.log(updatedEntry);
    }
}