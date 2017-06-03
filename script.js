function todolistmethod() {
    var item = document.getElementById("todoinput").value
    var text = document.createTextNode(item)
    var newitem = document.createElement("li")
    newitem.appendChild(text)
    document.getElementById("todolist").appendChild(newitem)


}

function deleteAll() {
    document.getElementById("todoList").innerHTML = '';
}



function deletecomp() {

    item.innerHTML = null;
    input.focus();

}