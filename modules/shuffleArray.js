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