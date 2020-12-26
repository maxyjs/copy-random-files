function shuffleArray(arr) {

    let shuffledArray = arr,
        len = arr.length,
        randomIndex,
        temp;

    while (len) {
        randomIndex = Math.floor(Math.random() * len);
        len--;
        temp = shuffledArray[len];
        shuffledArray[len] = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = temp;
    }

    return shuffledArray;
};

module.exports = shuffleArray;

if (require.main === module) {
    test();
}

function test(){
    const testArr = [1,2,3,4,5,6,7,8,9];
    const result = shuffleArray(testArr);
    console.log ( "result test: ", result);
}