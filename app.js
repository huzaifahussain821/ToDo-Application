var list = document.getElementById("list");



function addToDo(){

    var todo_item = document.getElementById("todo-item")
var li = document.createElement('li');
var litext = document.createTextNode(todo_item.value);
li.appendChild(litext)

var delbtn = document.createElement("button")
var deltext = document.createTextNode("DELETE")
delbtn.setAttribute("class","btn")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(deltext)

li.appendChild( delbtn)


var editbtn = document.createElement("button");
var edittext = document.createTextNode("EDIT")
editbtn.setAttribute("class","btn")

editbtn.appendChild(edittext)
editbtn.setAttribute("onclick","editItem(this)")
li.appendChild(editbtn)



list.appendChild(li)
todo_item.value = ""

}

function deleteItem(e){
    e.parentNode.remove()
}


function deleteall(){
    list.innerHTML = ""
}


function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val )

    e.parentNode.firstChild.nodeValue = editValue

    
}