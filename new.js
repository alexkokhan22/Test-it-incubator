// задание 3, 4, 5
let search = document.querySelector('.search');
let butt = document.querySelector('.button');
let arr = [ 
    { name: 'Vasya', age: 22},
    { name: 'Alex',  age: 26 },
    { name: 'Lera', age: 21 }
];

butt.addEventListener('click', function () {
  if (search.value === 'google') {
        alert('Yandex круче. Но это не точно'); 
    }else {
        alert(search.value); 
    }

  alert(arr[0].name);

});





/* Задание 6
let superSum = function (num1, num2) {
    alert(num1 + num2);
};

superSum(2, 3);
*/


/* Задание 7
let numbers = [4, 3, 6, 9];
let currentIndex = 0;
let minValue = numbers[currentIndex];
let maxValue = numbers[currentIndex];

for (let j = currentIndex + 1; j <= numbers.length - 1; j++) {
  if (numbers[j] < minValue) {
    minValue = numbers[j];    
  }
  if (numbers[j] > maxValue) {
    maxValue = numbers[j];    
  }
  
}
console.log(minValue);
console.log(maxValue);
*/



/* Задание 8
let a = 3;
let b = 5;
a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);
*/


/* Задание 9
let findMax = function (arr) {
    let currentIndex = 0;
    let maxValue = arr[currentIndex];
    for (let j = currentIndex + 1; j <= arr.length - 1; j++) {
        if (arr[j] > maxValue) {
          maxValue = arr[j];    
        }
      }
    return maxValue;  
};

console.log(findMax([11,8,4,6]));
*/


/* Задание 10
let search = document.querySelector('.search');
let butt = document.querySelector('.button');

butt.addEventListener('click', function () {
  if (search.value === 'google') {
     setTimeout ("alert('Yandex круче. Но это не точно')", 3000); 
    }else {
      setTimeout("alert(search.value)", 3000); 
      
    }
});
*/