var firebaseConfig = {
    apiKey: "AIzaSyCPbeJXwTakIS6tHhIUv5E23l8M8vxeNFA",
    authDomain: "amigos-d25b7.firebaseapp.com",
    projectId: "amigos-d25b7",
    storageBucket: "amigos-d25b7.appspot.com",
    messagingSenderId: "149693413040",
    appId: "1:149693413040:web:ea8f2a1bf2d554bbf9ed75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore()
// const TURMA = "turmaA"

// db.collection(TURMA).onSnapshot((snapshot) => {
//     snapshot.forEach((doc) => {
//         let amigos = doc.data()
//         console.log(amigos)
//     })
// })
// db.collection(TURMA).doc("alunoNovo").set({
//     nome: `Sara`, 
//     notas: { nata1: 10, nota2: 10}
// }).then(() => {
//     console.log(`Amigo inserido com sucesso.`)
// })

console.log(firebase.auth())
