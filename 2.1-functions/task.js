'use strict';

// задача №1
function getSolutions(a, b, c) {
	let D = (b ** 2) - 4 * a * c;

	if (D < 0) {
		return {D,
		        roots: []};
	} else if (D === 0) {
		let x1 = -b / (2 * a);
        return {D,
		        roots: [x1]};
	} else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);
		return {D,
		        roots: [x1, x2]};
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.roots.length === 2) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	} else if (result.roots.length === 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
	} else {
		console.log(`Уравнение не имеет вещественных корней`);
	}
}

// задача №2
function getAverageScore(data) {                // data = {имя предмета: [массив значений]}
	let averageScore = {};
	let average = [];

	for (let key in data) {
		averageScore[key] = getAverageMark(data[key]);
		for (let i = 0; i < data[key].length; i++) {
			average.push(data[key][i]);
		}
	}

	averageScore.average = getAverageMark(average);
	return averageScore;
}

function getAverageMark(marks) {
	let sum = 0;

    if (marks.length === 0) {
		return 0;
	}

	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}

	return sum / marks.length;
}

// задача №3
function getPersonData(secretData) { 
    let personData = {};

    personData.firstName = getDecodedValue(secretData.aaa);
    personData.lastName = getDecodedValue(secretData.bbb)

    return personData;
}

function getDecodedValue(secret) {
    if (secret === 0) {
    	return secret = 'Родриго';
    } else if (secret === 1) {
    	return secret = 'Эмильо';
    }
} 