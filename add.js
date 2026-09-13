let x = 66
function showMessage() {
    verifyName()
    // alert("X value is : " + x);
    verifyAge()    
    console.log("I am here boy. x:", x);

}

function verifyName() {
    var nameValue = document.getElementById("name").value;
    if (nameValue.length >= 20) {
        alert("Name length must <= 20")
    }
    console.log("input name:", nameValue);
}

function verifyAge() {
    var ageValue = document.getElementById("age").value;
    if (ageValue.length >= 3) {
        alert("age must be less than 100")}
}
