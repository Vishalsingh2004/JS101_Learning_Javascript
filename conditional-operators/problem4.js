let storedid = "abc@gmail.com";
let storedpass = "Vishal@123";

let givenid = "abc@gmail.com";
let givenpass = "Vishal@123";

if(storedid == givenid){
  if (storedpass == givenpass) {
    console.log("Login successfully")
  }else{
    console.log("Incorrect password")
  }
}else{
  console.log("Login successfully")
}