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
        return this.http.get < DailyLogEntry[] >(url);
    }

    getById(Id: number): Observable<DailyLogEntry> {
        let url = `${this.apiRoot}/get/${Id}`;
        return this.http.get<DailyLogEntry>(url);
    }

    addEntry(entry: DailyLogEntry): Observable<DailyLogEntry> {
        let url = `${this.apiRoot}/create`;
        return this.http.post<DailyLogEntry>(url, entry, httpOptions);
    }

    //doPUT(Id: number) {
    //    console.log("PUT");
    //    let url = `${this.apiRoot}/update/${Id}`;
    //    this.http.put(url, { Id: 2, entry: "eat a hearty breakfast", entrytype: "task", date: "tuezday" }).subscribe(res => console.log(res.json()));
    //}

    //doDELETE(Id: number) {
    //    console.log("DELETE");
    //    let url = `${this.apiRoot}/remove/${Id}`;
    //    this.http.delete(url).subscribe(res => console.log(res.json()));
    //}
}