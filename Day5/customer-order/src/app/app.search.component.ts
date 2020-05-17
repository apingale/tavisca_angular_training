import { Component, OnInit } from '@angular/core';
import { Orders } from './model/oder';
import { Customers, Customer } from './model/cutomer';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './app.search.component.html',
  styleUrls: ['./app.search.component.css']
})
export class SearchComponent implements OnInit {
orders = Orders;
customers = Customers;
  constructor(private service: AppServiceService) {  }

  ngOnInit(): void {
   
  }

  onKeyUp(event) {     
    const searchText = event.target.value;
    if (searchText.length > 1) {
        const results = new Array<Customer>();
        
        this.customers.forEach(function(value) {
            if (!value.CustomerName.toLowerCase().search(searchText.toLowerCase())
            || !value.City.toLowerCase().search(searchText.toLowerCase())
            || !value.Email.toLowerCase().search(searchText.toLowerCase())) {
                results.push(value);
            }
        });
        if (results.length > 0) {
            this.service.raiseSearch(results.map(x => x.CustomerId));
        }
    } else {
      this.service.raiseSearch(this.customers.map(x => x.CustomerId));
    }
}

}
