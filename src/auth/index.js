import firebase from '../firebase'
export async function  signIn ({email, password}) {
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
