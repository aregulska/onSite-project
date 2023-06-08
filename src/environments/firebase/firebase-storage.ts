import { storage } from "./firebase-config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { editDocInDb } from "./firebase-api";

// TODO add upload management - uploadbytesresumable
async function uploadFileToStorage(file: File, path: string) {
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          //console.log("Upload is paused");
          break;
        case "running":
          //console.log("Upload is running");
          break;
        default:
          break;
      }
    },
    (error) => {
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;
        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
        default:
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //console.log("File available at", downloadURL);
      });
    }
  );
}

export async function uploadIssueFileToStorage(
  file: File,
  path: string,
  id: string
) {
  const storageRef = ref(storage, path);
  try {
    const uploadTask = await uploadBytes(storageRef, file);
    //console.log("UPLOAD TASK RETURN ", uploadTask);
    const downloadUrl = await getDownloadURL(ref(storage, path));
    //console.log("DOWNLOAD URL", downloadUrl);
    editDocInDb("issues", id, { photoUrl: downloadUrl });
  } catch (error) {
    return error;
  }
}

// pomocniccze
export async function downloadFilesUrlsFromStorage(path: string) {
  const storageRef = ref(storage, path);
  const downloadUrl = await getDownloadURL(storageRef);
  return downloadUrl;
}
