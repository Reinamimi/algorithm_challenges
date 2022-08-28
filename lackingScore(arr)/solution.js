

function lackingScore(arr) {

    // finding common difference btw scores
    let cd = arr[1] - arr[0];

    // loop through score set and check constant common difference = cd
    for (let i=2; i<arr.length-1; i++) {
        if ((arr[i] - arr[i-1]) !== cd) {
            // return [arr[i] - cd, i];
            return `The missing score is ${arr[i] - cd} at ${i}`
        }
    }
}
console.log(lackingScore([45,50,55,65,70,75,80,85,90,95]))