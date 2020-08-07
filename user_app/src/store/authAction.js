export const registerWithEmail = (email, password) => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password).then((response) =>{
            console.log(response)
        }).catch((err) =>{
            console.log(err)
        }) 
    }
}

export const LoginWithEmail = (email, password) => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        firebase
        .auth()
        . signInWithEmailAndPassword(email, password).then((response) =>{
            console.log(response)
        }).catch((err) =>{
            console.log(err)
        }) 
    }
}

export const LoginWithGoogle = (email, password) => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
         .then((response) =>{
            console.log(response)
        }).catch((err) =>{
            console.log(err)
        }) 
       
    }
}


export const logoutUser = (email, password) => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        firebase
        .auth()
        .signOut()
        .then((response) =>{
            console.log(response)
        }).catch((err) =>{
            console.log(err)
        }) 
    }
}

