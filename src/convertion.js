const num = 458;

const placeValue = (num, res = [], factor = 1) => {
    if(num){
        const val = (num % 10) * factor;
        res.unshift(val);
        return placeValue(Math.floor(num / 10), res, factor * 10);
    }

    return res
}

const randomInFromIntervals = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}

let generatedNumbers = randomInFromIntervals(1, 1000);

console.log(`Output`);
console.log(`Randomly Generated number : ${generatedNumbers}`);
console.log(`Breakdown : ${placeValue(generatedNumbers)}`);