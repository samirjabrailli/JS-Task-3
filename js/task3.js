function topla() {
    let reqem1 = document.getElementById("num1")

    let reqem2 = document.getElementById("num2")

    let metn = document.getElementById("metn")

    let cem = +reqem1.value + +reqem2.value

    // metn.innerHTML = reqem1.value + "ve " + reqem2.value + "nin cemi : " + cem

    metn.innerHTML = reqem1.value + "+ " + +reqem2.value  + "=" + cem
}

function ferq() {

    let reqem1 = document.getElementById("num1")

    let reqem2 = document.getElementById("num2")

    let metn = document.getElementById("metn")

    let cix = +reqem1.value - +reqem2.value

    metn.innerHTML = +reqem1.value + " ve " + reqem2.value + " un ferqi : " +  cix
}

function hasil() {
    let reqem1 = document.getElementById("num1")

    let reqem2 = document.getElementById("num2")

    let metn = document.getElementById("metn")

    let vur = +reqem1.value * +reqem2.value

    metn.innerHTML = +reqem1.value + " ve " + reqem2.value + " un hasili : " + vur
}


function qaliq() {
    let reqem1 = document.getElementById("num1")

    let reqem2 = document.getElementById("num2")

    let metn = document.getElementById("metn")

    let qaliq = +reqem1.value % +reqem2.value

    metn.innerHTML = +reqem1.value + " ve " + reqem2.value + " un qaligi : " + qaliq
}