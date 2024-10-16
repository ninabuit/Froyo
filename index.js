// I need to create a prompt  to enter a list of comma-separated froyo flavors. 
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee

// In my prompt, I need to separate each word by a comma using .split 

const froyoOrder = prompt(`please enter in flavors separated by a comma`, `vanilla,vanilla,vanilla,strawberry,chocolate`);
const customerOrder = froyoOrder.split(",");

const theOrders = {};
// customerORder = [vanilla,vanilla,vanilla,strawberry,chocolate] 
for (let i = 0; i < customerOrder.length; i++){
    const ordersReceived = customerOrder[i]
    if (theOrders[ordersReceived]) {
        theOrders [ordersReceived]++

    }
    else theOrders[ordersReceived] = 1;
}
console.log(theOrders);
