// - У нас есть 100 (создать константу)
const wallet = 100;
// - Цена помидоров на рынке - 10 (создать константу)
const tomateCost = 10;
// - Цена огурцов на рынке - 5 (создать константу)
const cucumberCost = 5;
// - Цена яблок на рынке - 15 (создать константу)
const appleCost = 15;
// - Оставшиеся деньги потратим на орехи (создать переменную)
let balance;
// - Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
let summaCost = 2*(tomateCost + cucumberCost + appleCost);
console.log(summaCost);
// - оставшиеся деньги потратили на орехи (присвоить значение переменной)
balance = wallet - summaCost;
// - сколько денег мы потратили на орехи? (вывести переменную в консоль)
console.log("we spend on nuts", balance); // я не знаю почему но у меня консоль русский язык внезапно не выводит, выводит абракадабру, на уроке такого не было

// - на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)
// - в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
// выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи' 
if (balance > summaCost) {
	console.log("we spent more on nuts than on everything else");
} else if (summaCost > balance) {
	console.log("we spent on everything else more than on nuts");
} else {
	console.log("we spent on nuts and everything else the same money");
}