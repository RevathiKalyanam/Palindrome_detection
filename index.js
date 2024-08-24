const input= document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value= input.value
    const reverse= reverseString(value)
    if(value===reverse){
        alert('Hurray! you did it. The given string is a PALINDROME');
    }
    else{
        alert("Oops! better luck next time.");
    }
    input.value=""
    
}
check();


/*document.getElementById("Check").addEventListener("click", function() {
    const input = document.getElementById("input");
    const value = input.value;
    
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    
    function check() {
        const reverse = reverseString(value);
        if (value === reverse) {
            alert('Hurray! The given string is a PALINDROME');
        } else {
            alert('Oops! Better luck next time.');
        }
        
        input.value = "";
    }
    
    check();
}); */


