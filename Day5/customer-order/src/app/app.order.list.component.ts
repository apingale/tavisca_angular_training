import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { Orders } from './model/oder';

@Component({
  selector: 'app-order-list',
  templateUrl: './app.order.list.component.html',
  styleUrls: ['./app.order.list.component.css']
})
export class OrderListComponent implements OnInit {
  CustomerId: number;
  Orders = Orders;
  masterOrders = Orders;
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.appService.receivedFilter.subscribe((param: number) => {
      this.CustomerId = param;
      this.filterOrders();
    });
    this.appService.searchFilter.subscribe((param: number[]) => {
      this.filterSearchOrders(param);
    });
  }
  filterOrders() {
    this.Orders = Orders;
    this.Orders = this.Orders.filter(x => x.CustomerId == this.CustomerId);
  }
  filterSearchOrders(ids: number[]) {
    this.Orders = Orders;
    this.Orders = this.Orders.filter(x => ids.find(s => s == x.CustomerId));
  }

}
