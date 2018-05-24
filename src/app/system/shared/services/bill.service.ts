import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { Bill } from './../models/bill.model';

@Injectable()
export class BillService {
    constructor(private http: Http) {}

    getBill(): Observable<Bill> {
        return this.http.get('http://localhost:3000/bill')
            .map((response: Response) => response.json());
    }

    getCurrency(): Observable<any> {
        return this.http.get('http://data.fixer.io/api/latest?access_key=46d2eb5fef968f8a3a8b6e669484a04f')
            .map((response: Response) => response.json());
    }
}