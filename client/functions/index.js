const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
  return admin.firestore()
    .collection('notifications')
    .add(notification)
    .then(response => {
      console.log('notification added: ', response);
    })
} 

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')          //trigger when a new project is added
  .onCreate(doc => {                      
    const project = doc.data();
    const notification = {
      content: 'A new project was added',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

  return createNotification(notification);
})

exports.userCreated = functions.auth
  .user()
  .onCreate(user => {
    return admin.firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {
        const newUser = doc.data();
        const notification = {
          content: 'A new user has joined',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
      })
})