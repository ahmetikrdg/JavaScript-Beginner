//değişkenler

// var a=20;
// var b=10;
// var c=40;

// console.log(a,b,c);

//jsde iki veri tipi bulunur Primitive ve Reference

/* Primitive veri tipleri
var a=10; sayı yazarsam a number olur yazı yazarsam string 
consolede ne olduğunu görmek için numbermi stringmi
console.log(typof a);

var name="Ahmet";
console.log(typof name); string 

boolean
var a= false;
console.log(a);

undifenid 
var a; böyle bırakılsa undifenid yazar
a=10; 10 yazar
*/

//reference

var numbers=[1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers);// referans tiplerimiz birer objedir
console.log(numbers[2]);

var person={
    name:"Ahmet Karadağ",
    age:25
}
console.log(person);
console.log(typeof person); //buda obje js'de object olarak gözüken tüm ver tipleri referencedir

var date=new Date();
console.log(date);
console.log(typeof date);

var merhaba=function(){
    console.log("Merhaba");
}
console.log(merhaba);
console.log(typeof merhaba); //function olarak karşımıza çıktı buda reference veritipi

//primaty ve reference farkları
// primaty sadece o değişkenin değeri
//referenceler ise biz bellekte bir yeri gösterir biz o yer üzerinden o değerleri alabiliriz

var aa=[1,2,3];
var b=aa;
aa.push(4);
console.log(b);