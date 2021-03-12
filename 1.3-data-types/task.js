'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (percent <= 0 || isNaN(percent)) {
    	return `Параметр 'Процентная ставка' содержит неправильное значение ${percent}`;
    }
    if (contribution < 0 || isNaN(contribution)) {
    	return `Парметр 'Начальный взнос' содержит неправильное значение ${contribution}`;
    }
    if (amount <= 0 || isNaN(amount)) {
    	return `Параметр 'Общая стоимость' содержит неправильное значение ${amount}`;
    }

    let credit = amount - contribution;
    let monthlyPercent = percent / 100 / 12;
    let dates = (date.getFullYear() - new Date().getFullYear());

    if (dates <= 0) {
    	return `Параметр 'Срок ипотеки' содержит неправильное значение ${date}`;
    }
    console.log(isNaN(date));

    let months = dates * 12;
    let monthlyPayment = credit * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** months) - 1));
    let totalAmount = Number((monthlyPayment * months).toFixed(2));

    return totalAmount; // return totalAmount;
}

function getGreeting(name) { // если ввести пробелы, выводит Аноним
    
    if (name === "" || name === undefined || name.trim().length === 0) {
    	name = "Аноним";
    }

    return `Привет, мир! Меня зовут ${name}.`;
}