import { useEffect } from "react";

import { downloadFilesUrlsFromStorage } from "../../environments/firebase/firebase-storage.ts";

let buildingPaths = [
  "buildings/building1.jpg",
  "buildings/building2.jpg",
  "buildings/building3.jpg",
];

let userPaths = [
  "users/man1.jpg",
  "users/man2.jpg",
  "users/woman1.jpg",
  "users/woman2.jpg",
];

let plansPaths = [
  "plans/building.pdf",
  "plans/buildingR.pdf",
  "plans/floor-plan.pdf",
  "plans/building (1) (1).pdf",
];

let backgroundsPaths = [
  "backgrounds/background1.jpg",
  "backgrounds/background1r.jpg",
];

export function useAddBaseData() {
  useEffect(() => {
    buildingPaths.forEach((path) => {
      downloadFilesUrlsFromStorage(path).then((url) => {
        console.log("DOWNLOAD URL", url);
      });
    });
  }, []);
}

//gs://on-site-app.appspot.com/backgrounds
