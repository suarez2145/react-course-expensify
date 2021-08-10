import { firebase, googleAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogin = () => {
    return () => {
        // this is the call to firebase saying we are using the pop-up window and our googleAuthProvider
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};