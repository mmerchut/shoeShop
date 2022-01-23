const buttonAdd1 = document.querySelector('.button_add_1');
const buttonAdd2 = document.querySelector('.button_add_2');
const buttonMinus1 = document.querySelector('.button_minus_1');
const buttonMinus2 = document.querySelector('.button_minus_2');
const buttonDelete1 = document.querySelector('.button_delete_1');
const buttonDelete2 = document.querySelector('.button_delete_2');
const box = document.querySelector('.box');
const box1 = document.querySelector('.box1');
const summaryPrice = document.querySelector('.summary_price');
const deliveryBox = document.querySelector('.delivery_cost');
const selectDelivery = document.querySelector('#shipment');
const discountCodeBox = document.querySelector('.discount_code');
const buyBtn = document.querySelector('.buy_btn');
const shoe1Pairs = document.querySelector('.shoe1_quantity');
const shoe2Pairs = document.querySelector('.shoe2_quantity');

let deliveryType = '';
let shoe1Quantity = 1;
let shoe2Quantity = 1;
let shoe1Price = 126.80;
let shoe2Price = 59.26;
let deliveryCost = 0;
let discount = 1;



const addShoe1 = () => {
    if (shoe1Quantity <= 3) {
    shoe1Quantity++;
    shoe1Price += 126.80
    summaryPrice.textContent = `${(shoe2Price + shoe1Price).toFixed(2)} $`
    shoe1Pairs.textContent = `Pairs: ${shoe1Quantity}`
    }
    else (
        alert("you can't add more")
    ) 
}

let shoesPrice = (shoe2Price + shoe1Price).toFixed(2)

const minusShoe1 = () => {
    if( shoe1Quantity >= 1 ) {
    shoe1Price -= 126.80;
    shoe1Quantity -= 1;
    summaryPrice.textContent = `${(shoe2Price + shoe1Price).toFixed(2)} $`
    shoe1Pairs.textContent = `Pairs: ${shoe1Quantity}`
    }
    else (
        alert("You can't delete more")
    )  
}

const deleteShoe1 = () => {
    box.style.display = 'none';
    shoe1Price = 0;
    shoe1Quantity = 0;
    summaryPrice.textContent = `${(shoe2Price + shoe1Price).toFixed(2)} $`
}

const addShoe2 = () => {
    if (shoe2Quantity <= 5) {
        console.log('dziala')
        shoe2Quantity++;
        shoe2Price += 59.26
        summaryPrice.textContent = `${(shoe2Price + shoe1Price).toFixed(2)} $`
        shoe2Pairs.textContent = `Pairs: ${shoe2Quantity}`
        }
        else (
            alert("you can't add more")
        )
}

const minusShoe2 = () => {
    console.log('dziala usun 1')
    if( shoe2Quantity >= 1 ) {
    shoe2Price -= 59.26;
    shoe2Quantity -= 1;
    summaryPrice.textContent = `${(shoe2Price + shoe1Price).toFixed(2)} $`
    shoe2Pairs.textContent = `Pairs: ${shoe2Quantity}`
    }
    else (
        alert("You can't delete more")
    )   
}

const deleteShoe2 = () => {
    box1.style.display = 'none';
    shoe2Price = 0;
    shoe2Quantity = 0;
    summaryPrice.textContent = `${(shoe2Price + shoe1Price).toFixed(2)} $`
}

const checkDelivery = () => {
    selectDelivery.value
    console.log(selectDelivery.value)
    switch(selectDelivery.value) {
        case 'I buy in the store':
            deliveryBox.textContent = 'Delivery cost: 0$ ';
            deliveryCost = 0
            break;
        case 'super delivery':
            deliveryBox.textContent = 'Delivery cost: 7$ ';
            deliveryCost = 7
            break;
        case 'max delivery':
            deliveryBox.textContent = 'Delivery cost: 23$ ';
            deliveryCost = 23
            break;
    }
}

const checkDiscountCode = () => {
    if (discountCodeBox.value == "20DISCOUNT") {
        discount = 0.8
    }    
}

const checkout = () => {
    checkDiscountCode()
    let price = (shoe2Price + shoe1Price) * discount + deliveryCost;
    console.log(price);
    summaryPrice.textContent = `${price.toFixed(2)} $`;
}


buttonAdd1.addEventListener('click', addShoe1);
buttonMinus1.addEventListener('click', minusShoe1);
buttonDelete1.addEventListener('click', deleteShoe1);
buttonAdd2.addEventListener('click', addShoe2);
buttonMinus2.addEventListener('click', minusShoe2);
buttonDelete2.addEventListener('click', deleteShoe2);
selectDelivery.addEventListener('click', checkDelivery);
buyBtn.addEventListener('click', checkout);