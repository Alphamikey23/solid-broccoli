//
function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}


function isPalindrome(str) {
    // if(str.length === 0) {
    //     return false;
    // }
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}


module.exports = {add, subtract, isPalindrome};