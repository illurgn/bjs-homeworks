'use strict'

function getResult(a,b,c){
    let D = (b ** 2) - 4 * a * c;
    let x = [];

    if (D === 0) {
    	x[0] = -b / (2 * a);
    } else if (D > 0) {
    	x[0] = (-b + Math.sqrt(D)) / (2 * a);
    	x[1] = (-b - Math.sqrt(D)) / (2 * a);
    } // код для задачи №1 писать здесь
    
    return x; // return x;
}

function getAverageMark(marks){
	let sum = 0;

    if (marks.length === 0) {
		return 0;
	} else if (marks.length > 5) {
		console.log('Оценок слишком много!');
		marks.slice(0, 5);
	}

	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}

	return sum / marks.length;
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    let yearToday = new Date().getFullYear();

    let yearBirthday = dateOfBirthday.getFullYear();

    let check = yearToday - yearBirthday;

    if (check >= 18) {
    	return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
    	return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    } 
    // код для задачи №3 писать здесь
    // return result;
}