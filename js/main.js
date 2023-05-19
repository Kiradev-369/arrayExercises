
// * Lấy số nguyên

var integers = [];

function getInteger() {
  var numberN = getELE('numberN').value;
  var integer = parseInt(numberN);
  integers.push(integer);

  getELE('result1').innerHTML = '👉 ' + integers.join(', ');
}
getELE('btnAddNumber').onclick = getInteger;

function getELE(id) {
  return document.getElementById(id);
}


 //* tổng số dương

function sumPositiveNumbers() {
  var sum = 0;
  for (var i = 0; i < integers.length; i++) {
    if (integers[i] >= 0) {
      sum += integers[i];
    }
  }
  getELE("result2").innerHTML = "👉Tổng số dương " + sum;
}
getELE("btnTotal").onclick = sumPositiveNumbers;

 //* Đếm số
function countPositiveNumbers() {
  var count = 0;
  for (var i = 0; i < integers.length; i++) {
    if (integers[i] >= 0) {
      count++;
    }
  }
  getELE("result3").innerHTML = "👉Số dương " + count;
}
getELE("btnCount").onclick = countPositiveNumbers;

 //* Tìm số nhỏ nhất
function findMinNumber() {
  var minNumber = integers[0];
  for (var i = 0; i < integers.length; i++) {
    if (integers[i] < minNumber) {
      minNumber = integers[i];
    }
  }
  getELE("result4").innerHTML = '👉Số nhỏ nhất ' + minNumber;
}
getELE("btnSmallNumber").onclick = findMinNumber;

 //* Tìm số dương nhỏ nhất
function findMinPositiveNumber() {
  var minPositiveNumber = Infinity;
  for (var i = 0; i < integers.length; i++) {
    if (integers[i] > 0 && integers[i] < minPositiveNumber) {
      minPositiveNumber = integers[i];
    }
  }
  if (minPositiveNumber === Infinity) {
    getELE("result5").innerHTML = "👉Không có số dương";
  } else {
    getELE("result5").innerHTML = "👉Số dương nhỏ nhất " + minPositiveNumber;
  }
}
getELE("btnSmallPositiveNumber").onclick = findMinPositiveNumber;

 //* Tìm số chẵn cuối cùng
function findLastEvenNumber() {
  var lastEvenNumber = -1;
  for (var i = integers.length - 1; i >= 0; i--) {
    if (integers[i] % 2 === 0) {
      lastEvenNumber = integers[i];
      break;
    }
  }
  if (lastEvenNumber === -1) {
    getELE("result6").innerHTML = "👉Không có số chẵn";
  } else {
    getELE("result6").innerHTML = "👉Số chẵn cuối cùng " + lastEvenNumber;
  }
}
getELE("btnLastEvenNumber").onclick = findLastEvenNumber;

 //* Đổi chỗ hai giá trị trong mảng theo vị trí
function swapArrayElements(index1, index2) {
  if (
    index1 < 0 ||
    index1 >= integers.length ||
    index2 < 0 ||
    index2 >= integers.length
  ) {
    return (document.getElementById("result7").innerHTML =
      "Vị trí không hợp lệ nhe");
  }

  var temp = integers[index1];
  integers[index1] = integers[index2];
  integers[index2] = temp;

  document.getElementById("result7").innerHTML =
    "👉Mảng sau khi đổi " + integers;
}

document.getElementById("btnChange").onclick = function () {
  var index1 = parseInt(document.getElementById("index1").value);
  var index2 = parseInt(document.getElementById("index2").value);
  swapArrayElements(index1, index2);
};

 //* Sắp xếp theo thứ tự tăng dần
function sortIntegers() {
  var result = integers.sort(function (a, b) {
    return a - b;
  });
  document.querySelector("#result8").innerHTML = result;
}
document.querySelector("#btnArrange").onclick = sortIntegers;

 //* tìm số nguyên tố đầu tiên(nếu không có trả về -1)
function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < Math.sqrt(number); i++) {
    if(number % i === 0){
      return false;
    }
  }

  return true;
}

function findFirstPrimeNumber() {
  for(var i = 0; i < integers.length ; i++){
    if(isPrimeNumber(integers[i])){
      getELE('result9').innerHTML = '👉Số nguyên tố đầu tiên ' + integers[i]; return;
    }
  }

  getELE('result9').innerHTML = "👉Không có số nguyên tố";
}
getELE("btnPrime").onclick = findFirstPrimeNumber;

 //* Đếm số nguyên
var integers1 = [];

function getInteger1() {
  var enterNumber = getELE("enterNumber").value;
  var integer1 = parseInt(enterNumber);
  integers1.push(integer1);

  getELE("result10").innerHTML = integers1.join(', ');
}
getELE("btnAddInteger").onclick = getInteger1;


function countIntegers(){
    var count = 0;
    for(var i = 0;  i < integers1.length; i++){
      if(Number.isInteger(integers1[i])){
        count++
      }
    }
    getELE('result11').innerHTML ='👉'+ count;
}
getELE('btncountIntegers').onclick = countIntegers;

 //* so sánh số âm và số dương
function comparePositiveAndNegativeNumbers(){
  var positiveCount  = 0;
  var negativeCount = 0;

  for(var i = 0; i < integers.length ; i++){
    if(integers[i] > 0){
      positiveCount++
    } else if(integers[i] < 0){
      negativeCount++
    }
  }

  if(positiveCount > negativeCount){
    getELE('result12').innerHTML = '👉Số dương > Số âm'
  } else if(positiveCount < negativeCount){
    getELE('result12').innerHTML = '👉Số dương < Số âm'
  } else{
    getELE('result12').innerHTML = '👉Số dương = Số âm'
  }
}
getELE('btnCompare').onclick = comparePositiveAndNegativeNumbers;