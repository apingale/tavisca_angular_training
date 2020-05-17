import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { Customer, Customers } from './model/cutomer';

@Component({
  selector: 'app-cutomer-list',
  templateUrl: './app.cutomer.list.component.html'
})
export class CutomerListComponent implements OnInit {
  customer: Customer;
  customers = Customers;
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.appService.searchFilter.subscribe((param: number[]) => {
      this.filterSearchCustomers(param);
    });
  }

  getSelectedCustomer(c: Customer): void {
    this.customer = c;
     this.appService.raiseEvent(this.customer.CustomerId);
      }

  filterSearchCustomers(ids: number[]) {
    this.customers = Customers;
    this.customers = this.customers.filter(x => ids.find(s => s == x.CustomerId));
  }

}
