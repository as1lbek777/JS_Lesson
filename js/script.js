//Object start
// const userData=[
//     "Sardorbek",
//     "Sayfullayev",
//     21,
//     ["Atham ","Jasur","Shahlo"]
// ]
// const userInfo={
//     firstName:"Sardorbek",
//     lastName:"Sayfullayev",
//     age:21,
//     friends:["Atham ","Jasur","Shahlo"]
// }
// console.log(userInfo);


// const person = new Object();
// person.name = "Sardorbek";
// person.age = 25;
// person.isDeveloper = true;

// console.log(person);

// const userInfo={
//     firstName:"Sardorbek",
//     lastName:"Sayfullayev",
//     age:21,
//     friends:["Atham ","Jasur","Shahlo"]
// }
// let name1="Name";

// console.log(userInfo[`last${name1}`]);

// let person = {
//     name: "Sardorbek",
//     age: 25,
//     isDeveloper: true
// };

// console.log(person.age); 
// console.log(person["age"]);

// let person = {
//     name: "Sardorbek",
//     age: 25
// };

// person.isDeveloper = true;
// person.secondName="Sayfullayev";

// person.age = 26;
// console.log(person);

// let person = {
//     name: "Sardorbek",
//     age: 25,
//     isDeveloper: true
// };

// delete person.age;
// delete person.name;
// delete person.isDeveloper;

// console.log(person); 

// const userInfo = {
//     firstName: "Sardorbek",
//     lastName: "Sayfullayev",
//     age: 21,
//     friends: ["Atham ", "Jasur", "Shahlo"]
// }
// let nomlangan = '';

// for (let i = 0; i < userInfo.friends.length; i++) {
//     if (userInfo.friends[i] !== undefined) {
//         nomlangan += userInfo.friends[i];
//     }
// }
// console.log(`Mening jami do'stlarimni soni ${userInfo.friends.length} va ularning ismlari ${nomlangan.split(" ").join("-")}`);


// let person = {
//     name: "Sardorbek",
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Tashkent",
//         country: "Uzbekistan"
//     }
// };

// console.log(person.skills[1]); 
// console.log(person.address.city); 
// let arr=[
//     {
//         firstName:"Nigora",
//         secondName:"Kenjayeva",
//         age:15,
//         school:"26-maktab"
//     },
//     {
//         firstName:"Jasmina",
//         secondName:"Jo'rayeva",
//         age:17,
//         school:"5-maktab"
//     },
//     {
//         firstName:"Bonur",
//         secondName:"Bozorov",
//         age:13,
//         school:"95-maktab"
//     }
// ]
// console.log(arr.map(index=>{
//     return index.school
// }));

// const market = [
//     {
//         fruit: "olma",
//         price: {
//             kg: 1000,
//             someonePrice: 2000
//         }
//     },
//     {
//         fruit: "nok",
//         price: {
//             kg: 500,
//             someonePrice: 8000
//         }
//     },
//     {
//         fruit: "banan",
//         price: {
//             kg: 100,
//             someonePrice: 6000
//         }
//     },
// ]
// let docWrt=market.map(index=>{
//     return `Meva nomi:${index.fruit}\n Umumiy Narx:${index.price.kg*index.price.someonePrice} so'm`
// })
// document.write(docWrt)
  