let value;

const numbers=[43,56,33,23,44,25,66];

const langs=["Phyton","Java","C++","JavaScript"];

const a =["Merhaba",22,null,undefined,3.14];
console.log(a);

value=numbers.length;
value=numbers[0];
value=numbers[numbers.length-1];//son indexteki sayıyı gösterme
//herhangi bir indexteki değeri değiştirme
numbers[0]=50;
value=numbers;
//ındex of değer nerede varmı?
value=numbers.indexOf(1000);
//Arryin sonuna değer ekleme
numbers.push(2000);
value=numbers;
//başına ekleme
numbers.unshift(1000);
value=numbers;
//Arryin sonundan değer atma
numbers.pop();
value=numbers;
//başından atma
numbers.shift();
value=numbers;
//belirli indexten belirli indexi at 0,3 arası sil
numbers.splice(0,3);
value=numbers;
//Reverse terse çevirme
numbers.reverse();
value=numbers;
//küçükten büyüğe sıralama
value=numbers.sort(function(x,y){
 return x-y; //y-x yaparsan büyükten olur
});
console.log(value);