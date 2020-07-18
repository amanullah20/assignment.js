function woodCalculator(chair, table, khat){
    var chairNumber = chair * 1;
    var tableNumber = table * 3;
    var khatNumber = khat * 5;
    var totalWood = chairNumber + tableNumber + khatNumber;
    return totalWood;
}
var woodResult = woodCalculator(10, 15, 20);
console.log(woodResult);