import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { BillService } from './../shared/services/bill.service';
import { Bill } from './../shared/models/bill.model';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.less']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(
    private billService: BillService
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

  ngOnInit() {
    Observable.combineLatest(
        this.billService.getBill(),
        this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
        console.log(data);
    });
}

}
