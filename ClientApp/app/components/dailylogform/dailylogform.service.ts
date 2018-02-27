import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DailyLogEntry } from './dailylogentry';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class DailyLogService {

    apiRoot: string = "http://localhost:62652/api/dailylog";

    constructor(private http: HttpClient) { }

    getAllEntries(): Observable<DailyLogEntry[]> {
        let url = `${this.apiRoot}/getall`;
        return this.http.get<DailyLogEntry[]>(url);
    }

    getById(Id: number): Observable<DailyLogEntry> {
        let url = `${this.apiRoot}/get/${Id}`;
        return this.http.get<DailyLogEntry>(url);
    }

    addEntry(entry: DailyLogEntry): Observable<DailyLogEntry> {
        let url = `${this.apiRoot}/create`;
        return this.http.post<DailyLogEntry>(url, entry, httpOptions);
    }

    updateEntry(entry: DailyLogEntry): Observable<DailyLogEntry> {
        let url = `${this.apiRoot}/update/${entry.id}`;
        return this.http.put<DailyLogEntry>(url, entry);
    }

    deleteEntry(Id: number): Observable<DailyLogEntry> {
        let url = `${this.apiRoot}/remove/${Id}`;
        return this.http.delete<DailyLogEntry>(url);
    }
}