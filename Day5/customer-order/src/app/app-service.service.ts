import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  receivedFilter: EventEmitter<number>;
  searchFilter: EventEmitter<number[]>;
  constructor() { this.receivedFilter = new EventEmitter<number>();
    this.searchFilter = new EventEmitter<number[]>();
  }
  id: number;

  raiseEvent(id: number): void {
    this.id = id;
    this.receivedFilter.emit(id);
}
raiseSearch(id: number[]): void {
  this.searchFilter.emit(id);
}
}
