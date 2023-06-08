import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setNewToDbWithId } from "./firebase-api";

// TODO - zależność od store
import { User } from "../../store/users/usersMeta";

let userAuth = auth;

export async function registerUser(userData: User) {
  //console.log("REGISTER USER", userData.email, userData.password);
  try {
    const user = await createUserWithEmailAndPassword(
      userAuth,
      userData.email,
      userData.password
    );
    // //console.log(user, user.user.uid);
    await setNewToDbWithId("users", user.user.uid, {
      email: userData.email,
      name: userData.name,
      photoUrl: userData.photoUrl,
    });
    // //console.log("ADD USER", addUser);
  } catch (error) {
    return error;
  }
}

export async function signInUser(email: string, password: string) {
  return signInWithEmailAndPassword(userAuth, email, password);
}
export async function signOutUser() {
  return userAuth.signOut();
}
