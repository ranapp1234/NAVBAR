function data() {
    var user = document.getElementById("username").value;
    var a = document.getElementById("pdw").value;
    if (a == "" || user == "") {
        alert("all field are mandatory");
        return false;
    } else if (a.length < 5) {
        alert("password shoud be minimum of five character");
    }
    else {
        true;
    }
}
