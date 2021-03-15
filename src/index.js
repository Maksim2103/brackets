module.exports = function check(str, bracketsConfig) {
    // your solution
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            count = count + 1;
        }
        if (str[i] == ")") {
            count = count - 1;
        }
        if (str[i] == "{") {
            count = count + 100;
        }
        if (str[i] == "}") {
            count = count - 100;
        }
        if (str[i] == "[") {
            count = count + 1000;
        }
        if (str[i] == "]") {
            count = count - 1000;
        }
        if (count < 0) {
            break;
        }
    }
    return count != 0 ? false : true;
};
