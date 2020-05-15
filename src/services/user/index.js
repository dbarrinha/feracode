import firebase from '../../firebase'

export const newCoverPic = async (userId, url, child) => {
    firebase.database().ref('coverPic/' + userId).set({
        coverUrl: url,
        child: child
    });
}

export const deleteCoverPicFile = async (child) => {
    var storageRef = firebase.storage.ref()
    var desertRef = storageRef.child('coverPic/'+child);
    desertRef.delete().then(function () {
        // File deleted successfully
    }).catch(function (error) {
        // Uh-oh, an error occurred!
    });
}