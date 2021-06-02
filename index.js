// node index.js
// 11 25 13 10 7 8 5 69 41 1 32 27 3 2
var array = [],
    arr = [];

function push() { // Addition(arraylarni alohida birinchi chiqaradi)
    var val = document.getElementById('input1').value;
    array = val.split(" ")
    document.getElementById("area").innerHTML = array;
    for (let i = 0; i < array.length; i++) {
        arr[i] = parseInt(array[i]);
    }
    return arr;
}
push();
// Bubble Sort 
function bubbleSort() {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    document.getElementById("area2").innerHTML = arr;
    return arr;
}
// Selection Sort 
function selectionSort() {
    let minIdx, temp,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    document.getElementById("area3").innerHTML = arr;
    return arr;
}