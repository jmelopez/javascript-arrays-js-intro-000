var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, chocolate){
return [`${chocolate}`, ...chocolateBars]
}
addElementToBeginningOfArray(chocolateBars, 'butter finger');

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolate) {
return (chocolateBars.unshift(chocolate))
}
destructivelyAddElementToBeginningOfArray('hershey')
}

function addElementToEndOfArray(chocolateBars, chocolate){
return [...chocolateBars, `${chocolate}`]
}
addElementToEndOfArray('milky way');

function destructivelyAddElementToEndOfArray(chocolateBars, chocolate) {
return (chocolateBars.push(chocolate))
}
