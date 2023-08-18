async function getData(){
    let main = document.getElementById("main");
    main.innerText = "";
    let resp = await fetch("/users.json", {method: "GET"});
    if(resp.ok === true){
        let users = await resp.json();
        Array.from(users).forEach(elem => {
            let d1 = document.createElement("div");
            let h2 = document.createElement("h2");
            h2.innerText = elem.name;
            d1.appendChild(h2);
            let p = document.createElement("p");
            p.innerText = `${elem.age} years old`;
            d1.appendChild(p);
            main.appendChild(d1);
        });
    }
    else
    alert("Error!");
}