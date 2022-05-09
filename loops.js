
let i = 1
do {
    console.log(i)
    i++
} while (i < 1000);

 let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
 }


 const Keys = () => {
     console.log(Object.keys(person))

 }

 Keys() 


 const Entries = () => {
     console.log(Object.entries(person))
 }

 Entries()


 let arrayofPerson = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "Female"
     }, 
     {
        firstName: "John",
        lastName: "Thomas",
        birthDate: "Nov 10, 2000",
        gender: "Male"
     },
     {
        firstName: "Himmler",
        lastName: "Rest",
        birthDate: "Aug 23, 1945",
        gender: "Male"
     },
     {
        firstName: "Dmitry",
        lastName: "Bivol",
        birthDate: "Aug 23, 1980",
        gender: "Male"
     },
 ]

const forOf = () => {
    for(let person of arrayofPerson)
    {
        let year = person.birthDate.slice(-4)
        year = parseInt(year)

        if(year % 2 != 0)
        {
            console.log(console.log(person.birthDate))
        }


    }
}

forOf()


const mapped = arrayofPerson.map((person) =>{
    return Object.values(person)
});

console.log(mapped)


const filtered = arrayofPerson.filter((person) =>{
   return person.gender === "Male"
})

console.log(filtered)



const before = (person , i, array) =>{
   let year = person.birthDate.slice(-4)
   year = parseInt(year)
   if(year < 1990){
      return true
   }
}
const age = arrayofPerson.filter((person, i, array) => {
   if(before(person,i,array)){
      return person
   }
})

console.log(age)