function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0 ){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex--; 

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    } 
    return array;
}

//run the function

arr = ["wetthebed.html", "wokeUpInTime.html"];
shuffle(arr);
console.log(arr);

//set attributes
let one = document.getElementById('one');
let two = document.getElementById('two');

one.setAttribute("href", arr[0]);
two.setAttribute("href", arr[1]);