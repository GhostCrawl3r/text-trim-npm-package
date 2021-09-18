function textTrimmer (text, charLength) {
    if(typeof text === "string") {
        if(text.length > charLength) {
            return text.slice(0,charLength).concat("...");
        }
        else {
            return text;
        }
    } else {
        return console.log(`Error: the variable (text: ${text}) is not a string!`)
    }
}

module.exports = textTrimmer;
