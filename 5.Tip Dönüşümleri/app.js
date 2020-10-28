//veritiplerini stringe çevirme

let st;

st=String(5); //bu şekilde olabilir
st=(true).toString(); //bu şekilde
st=(3.15).toString();
console.log(st);
console.log(typeof st);

//sayıyı çevirme işlemleri

st=Number(10);
st=Number(null);
st=Number("hello world"); //hata alırsın string çünkü yine functionu diziyi falan numbere çeviremezsin
console.log(st);
console.log(typeof st);

const a="Ahmet"+"21";
console.log(a);
console.log(typeof a);

const b=Number("15")+15;
console.log(b);
console.log(typeof b);