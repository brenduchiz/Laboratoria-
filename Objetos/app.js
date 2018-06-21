let michelle = {
  name:"Michelle",
  points:4100,
  isActive:true,
  courses:["Intro JS","Intro UX","UX master"]

}

let alexandra = {
  name:"Alexandra",
  points:4100,
  isActive:true,
  courses:["Intro JS","Intro UX","UX master"]

}

let andrea = {
  name:"Andrea",
  points:4100,
  isActive:true,
  courses:["Intro JS","Intro DESIGN","UX master"]

}

let students = [michelle, alexandra, andrea];
/* see the true*/
/*for(let i=0;  i<students.length; i++){
let result = students[i].isActive




 if (result === true) {
   console.log(students[i].name);
 }
}*/

/*sum*/
/*let suma = 0;

for(let i=0;  i<students.length; i++){

suma += students[i].points;
console.log(suma);

}*/

/*Existe dicho curso*/

for(let i=0;  i<students.length; i++){
let studentcourses = students[i].courses;

console.log(students[i]);
for(let h=0;  h<studentcourses.length; h++){

if ( studentcourses[h]==="Intro UX" ) {
/*console.log(students[i].name);*/
}



}

}




/*
men = document.getElementById("mensaje");
salt = document.getElementById("num_salt");

function cifrar()
      {

let result ="";
let mensa = men.value;
let saltos = parseInt(salt.value);
for (i = 0; i < mensa.length; i++) {
let no_ascii = mensa.charCodeAt(i);

if (no_ascii >= 65 && no_ascii <= 90){
-
result += String.fromCharCode((no_ascii - 65 + saltos) % 26 + 65);
document.getElementById("resultado").innerHTML = result;

}else if (no_ascii >= 97 && no_ascii <= 122) {
 result +=  String.fromCharCode((no_ascii - 97 + saltos) % 26 + 97);
document.getElementById("resultado").innerHTML = result;
console.log(result);
}else if (no_ascii === 32) {
 result += String.fromCharCode(no_ascii);

   document.getElementById("resultado").innerHTML = result;
console.log(result);
 }
}
     }



     function descifrar()
          {

let descifrado ="";
    let mensa = men.value;
    let saltos = parseInt(salt.value);


    for (i = 0; i < mensa.length; i++) {
    let no_ascii = mensa.charCodeAt(i);

    if (no_ascii >= 65 && no_ascii <= 90){

   descifrado += String.fromCharCode((no_ascii - 90 - saltos ) % 26 + 90);
    document.getElementById("resultado").innerHTML = descifrado;

    }else if (no_ascii >= 97 && no_ascii <= 122) {
    descifrado +=  String.fromCharCode((no_ascii - 122 - saltos) % 26 + 122);
    document.getElementById("resultado").innerHTML = descifrado;
    console.log(descifrado);
  }else

  if (no_ascii === 32) {
   descifrado += String.fromCharCode(no_ascii);
     document.getElementById("resultado").innerHTML = descifrado;
  console.log(descifrado);
   }


    }
         }
