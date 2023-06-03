var inpVal = document.getElementById("inp");
var list = document.getElementById("list");


function delRow(btn){
    console.log(btn.parentNode);
    btn.parentNode.remove();
}


function editRow(btn){
    console.log();
    btn.parentNode.firstChild.nodeValue=prompt("Enter To Edit");
}


function addTask(){
    var li = document.createElement("li");
    var liVal = document.createTextNode(inpVal.value);
    li.appendChild(liVal);
    list.appendChild(li);

    console.log(li);
    console.log(inpVal.value);
    inpVal.value="";


    var del = document.createElement("BUTTON");
    var delText = document.createTextNode("delete");
    del.appendChild(delText);
    del.setAttribute("class", "btn");
    del.setAttribute("onclick" , "delRow(this)")
    li.appendChild(del);


    var edit = document.createElement("BUTTON");
    var editText = document.createTextNode("edit");
    edit.appendChild(editText);
    edit.setAttribute("class", "btn");
    edit.setAttribute("onclick" , "editRow(this)")
    li.appendChild(edit);

}


