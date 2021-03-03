'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let credit = amount - contribution;
    let monthlyPercent = percent / 100 / 12;
    let months = (date.getFullYear() - new Date().getFullYear()) * 12;

    let monthlyPayment = credit * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** months) - 1));

    let totalAmount = (monthlyPayment * months).toFixed(2);
    console.log(totalAmount);

    return totalAmount; // return totalAmount;
}

function getGreeting(name) {
    
    if (name === "" || name === undefined) {
    	name = "Аноним";
    }

    return `Привет, мир! Меня зовут ${name}.`;
}