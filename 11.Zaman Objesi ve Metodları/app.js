let value;

const now=new Date();

const date1=new Date("9-19-1993 06:15:00")
const date2=new Date("September 19 1993")
const date3=new Date("9/19/1993");

value=date1;
value=date1.getMonth();//yılın hangi ay olduğunu söyler
value=date1.getDate();//hangi gün old söyler
value=date1.getDay();//haftanın hangi günü 0dan başlar

value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();

//doğum ayını değiştiricez
date1.setMonth(7);
date1.setDate(15);//günü değiştirdim
date1.setFullYear(1999);
date1.setHours(12);//saati
date1.setMinutes(15);
date1.setSeconds(30);
value=date1;
console.log(value);