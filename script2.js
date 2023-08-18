function getData() {
    let main = document.getElementById("main");
    let loaderImg = document.querySelector(".tenor-gif-embed");
    main.innerText = "";
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log("Done!");
        if (xhr.readyState == 0)
            console.log('объект XMLHttpRequest создан');
        else
            if (xhr.readyState == 1)
            {
                console.log('метод open() был вызван');
                loaderImg.style.display = "block";
            }
            else
                if (xhr.readyState == 2)
                    console.log('запрос был отправлен');
                else
                    if (xhr.readyState == 3)
                        console.log('ответ получен от сервера');
                    else
                        if (xhr.readyState == 4) {
                            console.log('выполнение запроса полностью завершено ');
                            loaderImg.style.display = "none";
                            if (xhr.status === 200) {
                                let users = JSON.parse(xhr.responseText);
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
                            if(xhr.status === 404)
                                alert("Not found!");
                                else
                                alert("Error!");
                        }
    }


    // if(status === 200){
    //     alert(xhr.responseText);
    // }
    // else
    // {
    //     alert("Not found!");
    // }
    xhr.open("GET", "/users.json", true);
    xhr.send();
}

