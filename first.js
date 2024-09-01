// //simple hello world program

// console.log("hello")

// //simple variable declaration and addition program 

// const a=4;
// const b=3;
// const c=a+b;
// console.log(c);


// //coditional statements if/else...

// const age=10;
// if(age>=18)  {
//     console.log("You can vote")
// }
// else{
//     console.log("you cannot vote")
// }


// ternery operator similar to if else

// const marks=50;

// const result=( marks>=40) ?  "passed" : "failed";
// console.log(result);

// loops in js (for ,while ,do-while loop)

//        for loop
// for(let a=0 ; a<5 ; a++ ){
//     console.log("Ali");
// }

//  while loop 
// let t=1;
// while(t<5){
//     console.log(t);
//     t++;
// }

// do while loop
// let f=2;
// do {
//     console.log(f);
//     f++;
// } while(f<7);

// Arrays in js
// const students=['Ali',3,'Ahmed' ]
// console.log(students);

//  Function in js

//  function sum(a,b) {
//     console.log(a+b)

//  }
// sum(10,12)


// function expression
// let num= function sum(a,b) {
//     console.log(a+b)

//  }
// num(6,33)

// Anonymous function (the function which has no name)
// let g= function(c,d) {
//     console.log(c+d)
// }
// g(2,2)


// use of 'return' keyword
// function rew(s,w) {
//     return s+w ;

// }
//  console.log ( rew(3,7) );
//  console.log(rew(11,11))
//  console.log(rew(61,1))



//          Arrow function

// const a= () =>{
//     console.log("hello");
// }
// a()

//            Destructuring array (give seperate value to each element)


//   const g=["Ali", 20,"Lahore"]
//   const [name, age ,city] =g
//   console.log(name);
//   console.log(age);
//   console.log(city);


//         objects in JS  (similar to array)

//     const z=
//     {
//         fname :'Ali',
//         lname : 'khan',
//         age  : 18,

//     }

// console.log(z)
// // to print onle one property from object
// console.log(z.fname)

// we can also make array in object
// const t=
// {
//     fname :'Ali',
//     lname : 'khan',
//     age  : 18,
//   data :  [ 'group','number',' identity']
// }
// console.log(t);




// const f=(a,b) => {  return a+b;}
// console.log(f(4,4))



// let num= function (a,b) {
//     return a+b;
//   }
// console.log(num(2,2))

// const y=(c,d)=>{
//         return c*d

// }
// console.log(y(3,3));




//     for each array method

// let w=['ALI','AMIR','AHMED','ADIL','UMAR'];
//    w.map(( currvalue,index) =>{
//         return currvalue
//    })
// console.log(w);

const w=['ALI','AMIR','AHMED','ADIL','UMAR'];
  const j= w.map(( currvalue,index) =>{
       return currvalue;

})
 console.log(j);



