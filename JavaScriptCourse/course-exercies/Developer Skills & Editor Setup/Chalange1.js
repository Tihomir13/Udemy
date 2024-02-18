const printForecast = function (arr) {
    arr = [17, 21, 23];
    let finishedArr = "";

    for (let i = 0; i < arr.length; i++) {
        arr[i] = `...${arr[i]}ºC in ${i + 1} days`;
        finishedArr += arr[i];
    }

    console.log(finishedArr);
}

printForecast();