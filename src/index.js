module.exports = function check(str, bracketsConfig) {

    let openingBrackets = bracketsConfig.map(element => element[0]);
    let closingBrackets = bracketsConfig.map(element => element[1]);

    let stack = [];

    for (let i = 0; i < str.length; i++) {

        if (checkOpenBracket(str[i], openingBrackets) && checkOpenBracket(str[i], closingBrackets)) {
            if (!stack.includes(str[i])) {
                stack.push(str[i]);
            } else if (stack.pop() != str[i]) {
                return false;
            }
        }


        if (checkOpenBracket(str[i], openingBrackets)) {
            stack.push(str[i]);
        }


        if (checkOpenBracket(str[i], closingBrackets)) {
            if (stack.length == 0 || stack.pop() != openingBrackets[closingBrackets.indexOf(str[i])]) return false;
        }
    }

    return stack.length === 0;
}


function checkOpenBracket(str, openingArray) {
    return (openingArray.includes(str)) ? true : false;
}
