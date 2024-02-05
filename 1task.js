function getLowestNumber(numbers){
    let lowest = numbers[0]
    for(const num of numbers){
        if(num < lowest){
            lowest = num
        }
    }
    return lowest
}


const numbers = [167, 190, 120, 165, 137];
const lowest = getLowestNumber(numbers);
console.log(lowest)