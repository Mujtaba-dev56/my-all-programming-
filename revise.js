// const a=5;
// const v=5;
// const c=a+v;
// console.log(c);   
//  const a=10;
//  if (a>=10){
//     console.log('even');
//  }
//  else{
//     console.log('odd');
//  }


// by ternary operator

// const r=6;
// const m=(r<=0) ? 'positive' :'negative'
// console.log(m);



//  loops


// for(let a=1 ; a<=10 ; a++){
//      console.log('Ali'); 
// }

// let b=10;
// while(b<=15){
//     console.log('while');
//     b++;
// }
// let g=1;
// do{
//     console.log(g);
//     g++;
// } while(g<=7) ;

// for(i=1 ;i<=5 ; i++){

//     for(j=1 ; j)
//     console.log('*');

// }




//        FUNCTIONS


// function multiply(a,b){
// return a*b;
// }
// console.log(multiply(2,3));
// console.log(multiply(4,7));


//        FUNCTION EXPRESSION (in this we make varible to call function)




//             ARRAYS


//   let y= ['SARIM', 'ALI', 'UMAR', 'AMIR']
//   console.log(y);

//   Access any element of array
//   console.log(y[1]);
  
//   for of in array( it gives value of array elements)

//   for(let alpha of y){
//     console.log(alpha);
//   }

//     for in ( it gives index number of array elements)

//   for(let  alpha  in y){
//     console.log(y);
//   }


//    ARROW FUNCTION

//   const r=(a,b) => {
//     return a+b;

//   }
//   console.log(r(3,9));


//      foreach IN ARRAY
// arr=[33,7,88,90]
//   const d= arr.forEach( (num) =>{
// return num;
//   })

// console.log(d);

//        FILTER in array

//  const ar=[2,3,4,5,6,7]
// const newar=ar.filter( (nm) => {
// return nm > 3
// })
// console.log(newar);



//         MAP in array

// const v=[2,3,4,5,6];
// const c= v.map((doub)=> {
// return doub*2
// })

// console.log(c);



//    OBJECTS IN JS



// const r={
//   name: "ALI",
//   age: 20,
//   class: "2nd Year",
//   city: "lahore",

// }
// console.log(r);
// console.log(r["city"]);
// console.log(r["age"]);



//         DESTRUCTURING  with ARRAYS
// const colors =['red','black' ,'blue', 'yellow']
// const[col1,col2]=colors
// console.log(col1,col2);


//  DESTRUCTURIN with OBJECTS

// const z= {
//   name :'ALI',
//   city :'Lahore',
//   book : 'English',
//   age :20
// }
// const{name,age}= z;
// console.log(name,age);


// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------


// const r=1;
// const y=2;
// const c=r+y;
// console.log(c);

// const y= 20;
// if(y<30){
//  console.log('you are allowed');
// }

// else {
// console.log('you are not allowed');
// }

// const n=10;
// const b=(n<=20) ? 'okay' :'not okay';
// console.log(b);


// let u= 0;
// for(u=0 ;u<=10 ; u++){
//   console.log(u);
// }


// let r=1;
// while(r<=10){
//   console.log("2 * "+ r + " = " + 2*r);
//   r++;
// }


// let v=1;
// do{
// console.log(v);
// v++;
// } while (v<=5);

// function sum(b,c){
// return b+c;
// }
// console.log(sum(4,4));

// const f= (b,m) => {
// return b+m;
// }
// console.log(f(5,5));

// const y=['sts1','std2','std3','std4']
// console.log(typeof y);
// const y=['std1','std2','std3','std4']
// console.log(y[3]);
// y[2]= 'std';
// console.log(y);

// for(let data of y){
//   console.log(data);
// }

// for(let dat in y){
//   console.log(dat);
// }

//  const y= [2,3,4,5,6];
//  const z=y.filter((num)=>{
// return num >3;
//  } )
//  console.log(z);

//  const y=[3,4,5,6,7,8];
//  const z= y.map((num)=>{
// return num*5;
//  })
// console.log(z);

// const s={ 
//   name :'ALI',
//   Id :1234,
//   course: 'app dev',
//   city : 'Lahore',
//   college : 'intermediate',


// }

// let{name,age ,city}=s
// console.log(name);
// console.log(age);
// console.log(city);

// console.log(s);
// console.log( s.city);
// console.log(s.name);



const v=[10,'amir',2233,'karachi'];
const[age,name,code,city]=v
console.log(age);
console.log(name);
console.log(code);
console.log(city);