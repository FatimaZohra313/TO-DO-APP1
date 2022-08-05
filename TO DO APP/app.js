var list = [];
var inp = document.getElementById("inp");
var parent = document.getElementById("parent");
var h1 = document.getElementById("h1");
h1.innerHTML = "TO DO APP"

function renderList(){
    parent.innerHTML = "";
    for (var i = 0 ; i < list.length ; i++){
        parent.innerHTML += ` <li id="li">  <span id="text">${list[i].text}</span>
        <span>${list[i].time}</span>
        <button onclick="edit()">Edit</button>
        <button onclick="del()">Delete</button>
        </li>`;
    }

    // console.log(i);
}
function add(){
    var obj = {
        // id : prompt("Enter your id "),
        text : inp.value,
        time : new Date().getHours() + ":" + new Date().getMinutes(),
    }
    list.push(obj);
    renderList();
    console.log(obj.id);
}


function removeall(){
    parent.innerHTML="";
}

function edit(){
    var text = document.getElementById("text");
    var userValue = prompt("Enter your value");
    text.textContent =userValue ;
}
function del(){
    li.remove();
}

