function foo() {
    var name = document.getElementById("qadeer");
    var names = document.getElementById("abdul");
    var math = Math.random() * 2;
    var floor = Math.floor(math);
    if(floor === 0){
        // alert(name.value + " to win");
        swal(name.value + " to win");
    }
    else if(floor === 1){
        // alert(names.value + " to win");
        swal(names.value + " to win");
    }
    name.value = "";
    names.value = "";
}