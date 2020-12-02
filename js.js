function myFunction() {
    var elements = document.getElementsByClassName("occupied");
    for (i = 0; i < elements.length; i++) {
        var string = elements[i].innerHTML;
        console.log("occupied = " + string);
        alert("occupied = " + string);
    }
}