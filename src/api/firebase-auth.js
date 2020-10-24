/**
 * @description firebase 이용하여 인증
 */

import { FirebaseAuth } from '@/config/firebase.config';

export const Auth = {
  SignIn: (email, password) =>
    FirebaseAuth.signInWithEmailAndPassword(
      email,
      password,
    ),

  SignUp: (email, password) =>
    FirebaseAuth.createUserWithEmailAndPassword(
      email,
      password,
    ),

  SignOut: () => FirebaseAuth.signOut(),

  CurrentUser: () => FirebaseAuth.currentUser,
};
