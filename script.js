function add(){

    if(document.getElementById("demo").value === ""){
        alert("Enter Your Todo First");
    }

    else {
    var text = document.getElementById("demo").value;
    var list = document.getElementById("list");
    var newList = document.createElement("li");
    var txtNode = document.createTextNode(text);
    newList.appendChild(txtNode);
    list.appendChild(newList);
    var dltbtn = document.createElement("button");
    var dltbtnText = document.createTextNode("Delete");
    dltbtn.appendChild(dltbtnText);
    newList.appendChild(dltbtn);
    dltbtn.onclick=function(){
    
        var li=this.parentNode;
        var ul=li.parentNode;
        ul.removeChild(li);
       }
    clear();
    
    }
}

function clear(){
    document.getElementById("demo").value = "";
}

function clearAll(){
    document.getElementById("list").innerHTML="";
}



