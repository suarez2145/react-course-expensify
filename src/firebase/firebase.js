import * as firebase from 'firebase';





var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_API_KEY
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// i dont think we can write to the database with .set() in the newer firebase version " it keeps giving me an error"
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider, database as default};


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     //defining our new array // which is easier for REACT to process
//     const expenses = []

//     // iterating over each expense in the snapshot with forEach method 
//     snapshot.forEach((childSnapshot) => {
//         // pushing the expenses as an object into our new array ONLY defining the 'id' for each expense as the 'key'
//         // then we use the spread operator to push the rest of the attributes to the new object and to our new array 
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// });

// // here we are using the .on firebase method to subscribe to chnages made to our expenses 
// const onValueDisplay = database.ref('expenses').on('value', (snapshot) => {

//     const expenses = []

//     // iterating over each expense in the snapshot with forEach method 
//     snapshot.forEach((childSnapshot) => {
//         // pushing the expenses as an object into our new array ONLY defining the 'id' for each expense as the 'key'
//         // then we use the spread operator to push the rest of the attributes to the new object and to our new array 
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })


// // here i am subscribing to our expenses information and tracking everytime a child is removed 
// // by returning the key and value after its removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// // here i am subscribing to my expenses again but this time i am using the .on to subscribe to any change that occures to any of our expenses

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })




// //using .ref to reference what we want to delet from the database followed by the .remove method to delete from database
// // database.ref('isSingle')
// // .remove()
// // .then(() => { 
// //     console.log('data was removed')
// // }).catch((e) => {
// //     console.log('There was an error No data Removed', e)
// // })


// // database.ref().set({
// //     name: 'Exxon Suarez',
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Portland',
// //         country: 'United States'
// //     }
// //     // add the .then after our .set method  
// // }).then(() => {
// //     console.log('data is saved');
// // }).catch((error) => {
// //     console.log('this failed', error)
// // })


// // // here i use the .on method from firebase to 'subscribe' to our database which means we are watching the information in our database including any changes
// // const onValueDisplay = database.ref().on('value', (snapshot) => {
// //     // snapshot is the new instance of our database information

// //     // here i am assigning the information from my database to variables i want to use in the message i am printing to the screen
// //     let name = snapshot.val().name;
// //     let jobTitle = snapshot.val().job.title;
// //     let jobCompany = snapshot.val().job.company

// //     console.log(`${name} is a ${jobTitle} at ${jobCompany} `)
// // })


// // setTimeout(() => {
// //     database.ref('job/company').set('Firefox');
// // }, 5500)

// // setTimeout(() => {
// //     database.ref('name').set('Matt Murdock');
// // }, 7500)


// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // }).then(() => {
// //     console.log('Information Updated')
// // }).catch((e) => {
// //     console.log('somethig went wrong information NOT updated', e)
// // })


// //using .update method to update multiple information in one step ( has to be an object);
// // can also add new attributes
// // can also delete attributes by setting to null ( which is the same as calling .remove() method)

// // database.ref().update({
// //     job: 'Manager',
// //     // to change only the nested child attributes like 'city' under 'location' we have to use the 'location/city' syntex
// //     // if we dont use this syntex then all other attributes will be deleted not updated
// //     'location/city': 'Boston'
// // });


// // // writing to the age property in my object only 
// // // database.ref('age').set({
// // //     age: 35
// // // })

// // // writing only to the city property on the location property of our object 
// // // database.ref('location/city').set('New York')

// // // adding a new property to our original object by passing  in 'attributes' as a ref to our database
// // database.ref('attributes').set({
// //     height: "5'7",
// //     weight: 180
// // }).then(() => {
// //     console.log('data is saved')
// // }).catch((e) => {
// //     console.log('this failed!', e)
// // })