class Customer {
    firstName: string;
    lastName: string;
    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

let cust = new Customer();
cust.firstName = "Humaiyun";
cust.lastName = "Uddin";
cust.greeter();