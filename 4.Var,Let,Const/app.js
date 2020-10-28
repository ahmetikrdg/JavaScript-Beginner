var a;
console.log(a);

let name="Ahmet Karadağ";
// console.log(name);

name="Murat";
console.log(name);
//varda name ayrı yerde 2 isim verirsen sondaki çalışır consolelog varsa aralarında ikiside çalışır leftte öyle.

//const sabit anlamıan gelir. Verdiğim değeri başka yerde değiştiremem

/* const name="Mustafa Murat";
console.log(name);
name="Murat";
console.log(name);//hata verecek bu değere 2 defa ataamazsın diye
const a;
a=10;//bundada hata alırız bir üst satırda hepsini yapmalıyız const a=10; gibi*/

const c=[1,2,3,4]
console.log(c);
c.push(5);
console.log(c);
//bunu yapabilirsin burada reference döndüü için yer değişmiyo o adresin olduğu yere 5i gönderiyo mülakatlarda sorulur 
//ve şuda var artık modern jsde var falan kullanılmaz const ve let kullanılır