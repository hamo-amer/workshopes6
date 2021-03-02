// I- variables
// 1)var and let     function scope ,block scope
for(var i=0;i<5;i++){
    if(i<10){
      var j=10
    console.log(i,j)
    }
    console.log("outside",i,j)
    }
    //problem with var
    var x=5
    var x=10
    // 2) const 
    const x=5
    x=10
  
// 2) Arrow function
function sum(a,b){
  return a+b;
}
var add=function(a,b){
  return a+b
}
const Arrowsum=(a,b)=>a+b

// 3) Default parameter values

// 4) Destructuring
var user={
  name:"John",
  lastName:"Doe"
}
const sayHello=(objet)=>{
  
  return "Hello " +objet.name+" "+objet.lastName;
}

const sayHello=(objet)=>{
  const {name,lastName}=objet
  // const name=objet.name
  // const lastName=objet.lastName
  // const {lastName,name}=objet
  return "Hello " +name+" "+lastName;
}

// 5) Template Literal

var name="Hazem"
console.log("my name is "+name)
console.log(`my name is ${name}`)

// 6) Spread operator
//Exemlpe 1
var names=["hazem","mohamed","sofiene"]
var newNames=names
newNames.push("ahmed")
// newNames=[...names]
//newNames=[.names,"ahmed"]

// Exemple 2
var numbers=[1,5,47,23]
var max=Math.max(...numbers)
console.log(max)

// Exemple 3
var user={
  name:"hazem",
  lastName:"touil"
}
var newUser={...user,age:20}
// newUser.age=20
console.log(user)
console.log(newUser)

// 7) forEach,map ,filter

var names=["hazem","mohamed","ahmed"]
var newNames=[]
names.forEach((el)=>
newNames.push(el.toUpperCase())
)
console.log(newNames)
var newNames=names.forEach((el)=>
newNames.push(el.toUpperCase())
)
names.forEach((el,index)=>{
  console.log(index);
  newNames[index]=el.toUpperCase()
  }
  )
  //map 
  var newNames=names.map(el=>
    el.toUpperCase()
    )


    var newNames=names.map((name,index)=> index)

// filter
let numbers=[1,5,45,78,-1]
var tab2=numbers.filter((el,i)=>el>0&& i%2===0)


// 8) turnery operator
 const pair=(n)=>{
   if(n%2===0)
   return true
   else 
   return false
 }
 const pair=(n)=>{
  return  n%2===0 ? true:false
 }
 const div=(n)=>{
  return  n%3===0 ? true: n%3===1 ? "rest 1":"rest2"
 }

