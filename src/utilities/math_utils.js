// Generic utility function, could be called by any part of Vue code
// for example, a computed property might use a utility function to 
// help generate the computed value

export function double(number) {
    return number * 2
}

export function tripleArrayValues(array) {
    return array.map( number => number * 3)
}