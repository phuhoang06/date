function ktra(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = a%b;
    if (c == 0){
        alert('a chia hết cho b')
    }
    else {
        alert('a không chia hết cho b')
    }
}