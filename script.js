function todolistmethod() {
    var item = document.getElementById("todoinput").value
    var text = document.createTextNode(item)
    var newitem = document.createElement("li")
    newitem.appendChild(text)
    document.getElementById("todolist").appendChild(newitem)


}
