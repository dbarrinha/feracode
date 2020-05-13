import firebase from '../../firebase'
export async function signIn({ email, password }) {
    let user = {}
    try {
        user = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(user)
    } catch (error) {
        return error
    }
    return user;
}
export const signUp = () => {

}

export const uploadImage = file => {
    var storageRef = firebase.storage().ref();
    storageRef.put(file).then(function (snapshot) {
        console.log(snapshot);
    });
}
