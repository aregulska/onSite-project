import { useRef, useEffect, useState, ChangeEvent } from "react";
import { uploadIssueFileToStorage } from "../../../environments/firebase/firebase-storage";

export const useFormController = (onOk: () => void | {}) => {
  // ŁADOWANIE I WYŚWIETLANIE ZDJĘCIA
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const onUpload = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (!target.files) return;
    const file = target.files[0];
    // //console.log("UPLOAD PHOTO IN FORM", file);
    setPhotoFile(file);
  };
  const photoUrl = photoFile ? URL.createObjectURL(photoFile) : null;

  // USTAWIANIE FOCUSU
  const fieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (fieldRef.current) fieldRef.current.focus();
  }, []);

  // DODANIE ZDJĘCIA DO ISSUE
  async function handleOkWithPhoto() {
    const newElement = await onOk();
    console.log("NEW ELEMENT", newElement, photoFile);
    if (photoFile && newElement) {
      let path = "issues/" + photoFile.name;
      console.log("UPLOAD PHOTO", photoFile, "PATH", path);
      uploadIssueFileToStorage(photoFile, path, newElement.id);
    }
  }

  return { fieldRef, photoUrl, onUpload, handleOkWithPhoto };
};
