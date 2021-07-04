/*Goal:to identify in a give string all brackets have been closed in pairs like a HTML tag.
 Which should return true ou false also, should find bad brackets closed and return false for instante, 
 "AB ] CD [ EF ] GH [ IJ".
 "[AB  CD [ EF ] GH  IJ ]"
 "AB ] CD "
*/
function checkMatchingBrackets(str) {

    let bracketPairs = [];
    for (let i = 0; i < str.length; i++) {
        let obj = {};
        const char = str[i];

        if (char === '[') {
            obj.pair = [];
            obj.pair[0] = i;
            obj.matched = false;
            bracketPairs.push(obj);

        } else if (char === ']') {
            //consider if ] is first in string
            if (bracketPairs.length === 0) {
                obj.pair = [];
                obj.pair[1] = i;
                obj.matched = false;
                bracketPairs.push(obj);

            } else {
                const index = findMatchedFalse(bracketPairs);

                if (index !== null) {
                    bracketPairs[index].pair[1] = i;
                    bracketPairs[index].matched = true;

                }
            }

        }

    }
    const matchedBrackets = findMatchedFalse(bracketPairs) === null ? true : false;
    return matchedBrackets;
}
function findMatchedFalse(bracketPairs) {
    for (let i = 0; i < bracketPairs.length; i++) {

        if (!bracketPairs[i].matched)
            return i;
    }
    return null;
}
console.log(checkMatchingBrackets('AB]CD[EF]GH[IJ'))
