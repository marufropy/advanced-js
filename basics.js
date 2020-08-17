//falsy
//0, "", undefined, null, NaN, false

//truthy
//1, "0", " ", [], true

//null vs undefined

const first = 1;
const second = "1";
const third = true;
if(first == second){
    console.log("true");
}
else{
    console.log("false");
}
if(first == third){
    console.log("true");
}
else{
    console.log("false");
}
if(second == third){
    console.log("true");
}
else{
    console.log("false");
}
if(first === second){
    console.log("true");
}
else{
    console.log("false");
}
if(first === third){
    console.log("true");
}
else{
    console.log("false");
}
if(second === third){
    console.log("true");
}
else{
    console.log("false");
}