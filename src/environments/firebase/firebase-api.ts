import {
  doc,
  addDoc,
  collection,
  updateDoc,
  setDoc,
  query,
  where,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "./firebase-config";

interface MyQuery {
  prop: string;
  value: string;
}
export function createQuery(col: string, myQuery: MyQuery) {
  return myQuery
    ? query(collection(db, col), where(myQuery.prop, "==", myQuery.value))
    : collection(db, col);
}

export function subscribeToDb(q: any, add: Function, edit: Function) {
  return onSnapshot(q, (snapshot: any) => {
    // //console.log("SET CHANGE LOADING TO TRUE");
    snapshot.docChanges().forEach((change: any) => {
      const changedItem = { ...change.doc.data(), id: change.doc.id };
      if (change.type === "added") {
        // //console.log("ADD TO STORE", col, change.doc.data());
        add(changedItem);
      }
      // TODO: czy mogę w modyfikacji dostać tylko zmienione cechy
      if (change.type === "modified") {
        // //console.log("MODIFY IN STORE", change.doc.id, change.doc.data());
        edit(changedItem);
      }
      if (change.type === "removed") {
        // //console.log("Removed: ", change.doc.data());
      }
    });
    // //console.log("SUBSCRIBE CHANGES");
  });
}

export async function addNewToDb(col: string, data: {}) {
  try {
    const response = await addDoc(collection(db, col), data);
    //console.log("ADD TO DB DATABASE - WHAT IS RETURNING", response);
    return response;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function setNewToDbWithId(col: string, id: string, data: {}) {
  try {
    const response = await setDoc(doc(db, col, id), data);
    return response;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// patch  -> tylko zmieniane cechy
export async function editDocInDb(col: string, id: string, patch: {}) {
  try {
    const docRef = doc(db, col, id);
    const response = await updateDoc(docRef, patch);
    //console.log("EDIT IN DATABASE - WHAT IS RETURNING", response);
    return response;
  } catch (e) {
    console.error("Error editing document: ", e);
  }
}

// TODO: użyć albo wyrzucić
export async function deleteDocFromDb(col: string, id: string) {
  const response = await deleteDoc(doc(db, col, id));
  return response;
}
