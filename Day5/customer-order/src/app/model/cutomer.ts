export class Customer {
    constructor(
        public CustomerId: number,
        public CustomerName: string,
        public City: string,
        public Email: string,
        public ContactNumber: number
    ) { }
}

export const Customers: Array<Customer> = new Array<Customer>();
Customers.push(new Customer(100, 'Mark', 'Pune', 'john.doe@gmail.com', 455));
Customers.push(new Customer(101, 'Tony', 'Seattle', 'john.doe@gmail.com', 1235));
Customers.push(new Customer(102, 'Jack', 'London', 'john.doe@gmail.com', 542));