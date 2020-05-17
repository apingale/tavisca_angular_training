export class Order {
    constructor(
        public OrderId: number,
        public OrderName: string,
        public Date: string,
        public CustomerId,
        public OrderQuantity: number,
        public Amount: number
    ) { }
}
export const Orders: Array<Order> = new Array<Order>();
Orders.push(new Order(10001, 'Laptop', '12/02/2020', 100, 1, 455));
Orders.push(new Order(10002, 'Router', '12/02/2020', 101, 3, 1235));
Orders.push(new Order(10003, 'Iron', '12/02/2020', 102, 2, 542));
