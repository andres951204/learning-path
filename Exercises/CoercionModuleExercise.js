function isValidName(name) {
    if(typeof name != "string" || name.length < 3) return false
    if(name.trim() < 3) return false
    return true
}

/*
//Course response
function isValidName(name) {
    if(typeof name == "string" && name.trim().length >= 3) return true
    return false
}
*/

function hoursAttended(attended, length) {
    if (attended != null && attended != undefined && typeof attended != 'boolean' && length != null && length != undefined && typeof length != 'boolean'){
        if(typeof attended == "string" && attended.trim() == "" || typeof length == "string" && length.trim() == "" ) return false
        if(typeof attended == "number" && attended < 0 && typeof length == "number" && length < 0) return false
        if (attended % 1 != 0 || length % 1 != 0) return false
        if(Number(attended) > Number(length)) return false
        return true
    } else {
        return false
    }
}

/*
//Course response
function hoursAttended(name) {
    if(typeof attended == "string" && attended.trim() != "") {
        attended = Number(attended)
    }
    if(typeof length == "string" && length.trim() != "") {
        length = Number(length)
    }
    if(typeof attended == "number" && typeof length == "number" && attended >= 0 && length >= 0 && Number.isInteger() && Number.isInteger(length) &&  attended <= length) {
        return true
    }
    return false
}
*/

// tests:
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);