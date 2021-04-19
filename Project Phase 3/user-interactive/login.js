// This module allows the user to log in to the app

/*
Revisions:
- We are no longer using a database. All information will be stored in key value storage.

- The user only needs to supply either a email or a username. Both are not necessary.
*/

class login {
    login(emailName, password) {
    /*
        initially show login screen
        ask the user for ONE of (email, username) and password
        save user's email or username/password
        if user logs in correctly, show home screen of app
        - check if email or name, and password match the saved versions in key value storage 
        - relevant documentation for key value storage: https://reactnative.dev/docs/asyncstorage
        - if everything is correct, display home screen
        - a previous tutorial I used for login with React Native: https://aboutreact.com/react-native-login-and-signup/
        
        @param emailName: string of user's email or username
        @param password: string of user's password

        NOTE: login screen is shown if a user signs up and then logs out
    */
    }
}