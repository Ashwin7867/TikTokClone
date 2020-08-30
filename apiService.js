import React from 'react';
import auth from '@react-native-firebase/auth';

export const SignupUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => resolve('Sign up successfully'))
      .catch((error) => reject(error));
  });
};
