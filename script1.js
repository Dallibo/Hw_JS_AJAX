function getData(){
    let main = document.getElementById("main");
    main.innerText = "";
let xhr = new XMLHttpRequest();

xhr.open("GET", "/users.json", false);
xhr.send();
let status = xhr.status;
console.log(status);
// if(status === 200){
//     alert(xhr.responseText);
// }
// else
// {
//     alert("Not found!");
// }
if(status===200){
    let users = JSON.parse(xhr.responseText);
    Array.from(users).forEach(elem=>{
        let d1 = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerText  = elem.name;
        d1.appendChild(h2);
        let p = document.createElement("p");
        p.innerText = `${elem.age} years old`;
        d1.appendChild(p);
        main.appendChild(d1);
    });
}
else
alert("Not found!");
}