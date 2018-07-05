function addItem() {
    var ul = document.getElementById("list");
    var x = document.getElementById("txtAdd");

    var li = document.createElement("li");

    if (x.value == "") { }

    else {
        li.setAttribute('id', x.value);
        li.appendChild(document.createTextNode(x.value));
        ul.appendChild(li);
    }
}
/*
function searchItem() {
    var ul = document.getElementById("list");
    var x = document.getElementById("txtSearch");
    var item = document.getElementById(x.value);
    var filter = x.value.toUpperCase();

    for (var i = 0; i < 2; i++) {
        alert (i);
        var name = ul[i].getElementsBy("list");
        if (name.toUpperCase().indexOf(filter) == 0) 
            ul[i].style.display = 'list-item';
        else
            ul[i].style.display = 'none';
    }
}*/


function searchItem(event) {

    var filter = event.target.value.toLowerCase();
    var lis = document.getElementsByTagName('li');

    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].textContent;
        if (name.toLowerCase().indexOf(filter) !== -1)
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}

var search = document.getElementById('txtSearch');
search.addEventListener('input', searchItem);