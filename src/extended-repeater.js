module.exports = function repeater(str, options) {
    let repeatTimes=1, newStr='', separator='+', addition='', additionRepeatTimes=1, additionSeparator='|';
    if (options.repeatTimes != undefined) {
        repeatTimes = options.repeatTimes;
    }
    if (options.repeatTimes != undefined) {
        additionRepeatTimes = options.additionRepeatTimes;
    }
    if (options.separator != undefined) {
        separator = options.separator;
    }
    if (options.addition !== undefined) {
        addition = options.addition;
    }
    if (options.additionSeparator != undefined) {
        additionSeparator = options.additionSeparator;
    }
    for (let i = 0; i < repeatTimes; i++) {
        newStr += str;
        for (let j = 0; j < additionRepeatTimes; j++) {
            newStr += addition + additionSeparator;
            if (j+1 == additionRepeatTimes) {
                newStr = newStr.substr(0, newStr.length-additionSeparator.length);
            }
        }
        newStr += separator;
        if (i+1 == repeatTimes) {
            newStr = newStr.substr(0, newStr.length-separator.length);
        }
    }
    return newStr;
};