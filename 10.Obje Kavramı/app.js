let value;
const programmer={
    name:"Ahmet Karadağ",
    age:21,
    email:"ahmetikrdg@outlook.com",
    langs:["C#","Asp.Net Core","Linq","Sql"],

    address:{
        city:"Ankara",
        street:"Bahçelievler"
    },

    work:function(){
        console.log("Programcı Çalışıyor...");
    }
}

value=programmer;
value=programmer.address.city;
programmer.work();
console.log(value);

const programmers=[
    {name:"Mustafa Murat",age:25},
    {name:"Ahmet Karadağ",age:21}
]

value=programmers[0].name;
console.log(value);

