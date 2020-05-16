import firebase from '../../firebase'

export const newPost = async post => {
    firebase.database().ref('posts/' + userId).set({
        username: name,
        photo: email,
        text: imageUrl,
    });
}

export const getPosts = async () => {

}