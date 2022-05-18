"use srict"

let a = ['hello', 'world', 23, '23', null];
const filterBy = (arr, type) => arr.filter(function(currentValue){
    if (typeof currentValue === type) {
        return false
    } return true
})
console.log(filterBy(a, "object"));