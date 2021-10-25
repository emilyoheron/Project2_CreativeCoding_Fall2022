
//shuffle an array of links

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

arr = ["2ndpage.html", "3rdpage.html", "4thpage.html"];
shuffle(arr);
console.log(arr);

//set attributes
let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');

link1.setAttribute("href", arr[0])
link2.setAttribute("href", arr[1])
link3.setAttribute("href", arr[2])










