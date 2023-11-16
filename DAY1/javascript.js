
    const clickevent=()=>{
    var first=parseInt(document.getElementById("firstNum").value);
    var second=parseInt(document.getElementById("secondNum").value);
    if(first>second){
    document.write(first +"is larger than " + second);
} else {
    document.write(second+" is largest than "+first);
}
};
clickevent();