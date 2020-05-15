import firebase from '../../firebase'

export const newPost = async post => {
    firebase.database().ref('posts/' + userId).set({
        username: name,
        photo: email,
        text: imageUrl,
        likes: 0,

    });
}

export const newPost = async ({ email, password }) => {

}