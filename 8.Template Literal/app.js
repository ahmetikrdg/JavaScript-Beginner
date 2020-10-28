const name="Ahmet Karadağ";
const department="Bilişim";
const salary=4000;

// const a="İsim:"+ name+ "\n"+"Department " +department +"\n"+"Salary "+salary;
const a=`İsim:${name}\nDepartman:${department}\nMaaş:${salary}` //`` bunu altgr noktalıvirgüle basınca oluyor. yukarıdaki hamallık yerine bunu kullanıyoruz artık güncel olarak
console.log(a);

/* const html= "<ul>"+
      "<li>"+name+"</li>"+
      "<li>"+department+"</li>"+
      "<li>"+salary+"</li>"+
      "</ul>";
      document.body.innerHTML=html;  klasik hamallık yöntemi*/

      //template litrealle yapalım
      const html=`
      <ul>
        <li>${name}</li>
        <li>${department}</li>
        <li>${salary}</li>
      </ul>  
      `;
      document.body.innerHTML=html;