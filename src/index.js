module.exports = function check(str, bracketsConfig) {
  const braketsStep = [];
    const braketsArr = str.split('');

    if (braketsArr.length % 2) return false;

    for (let i = 0; i < braketsArr.length; i++) {
        const indexofSubArOpenBrakets = getIndexSubArray(braketsArr[i], bracketsConfig, 0);

        if (hasSubarrPair(braketsArr[i], bracketsConfig)) {
            if (braketsStep[braketsStep.length - 1] === indexofSubArOpenBrakets) {
                braketsStep.pop();
                continue;
            }
            braketsStep.push(indexofSubArOpenBrakets);
            continue;
        }

        if (indexofSubArOpenBrakets >= 0) {
            braketsStep.push(indexofSubArOpenBrakets);
            continue;
        }

        const indexofSubArCloseBrakets = getIndexSubArray(braketsArr[i], bracketsConfig, 1);

        if (braketsStep[braketsStep.length - 1] === indexofSubArCloseBrakets) {
            braketsStep.pop();
            continue;
        }

        return false;
    }

    if (braketsStep.length === 0) return true;

    return false;

    function getIndexSubArray(braket, subArr, index) {
        return subArr.findIndex(function ind(i) {
            return i[index] === braket
        });
    }

    function hasSubarrPair(el, braket) {
        const pairedElementsArr = [];

        for (let i = 0; i < braket.length; i++) {
            if (braket[i][0] === braket[i][1]) {
                pairedElementsArr.push(braket[i][0]);
            }
        }

        return pairedElementsArr.includes(el);
    }
}
