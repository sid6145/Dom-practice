

document.ondragstart = function (event){
    event.dataTransfer.setData("Text", event.target.id)
}

document.ondrag = function(event){
    document.getElementById('dragText').innerHTML = "Yay! I am being dragged, don't drop me"
}

document.ondragover = function(event){
    event.preventDefault();
}

document.ondrop = function(event){
    event.preventDefault()
    if(event.target.id == "dropZone"){
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById('dragText').innerHTML = "oh i am alive"
    }
}