import { nanoid } from "nanoid";

// edycja do bazy
import { uploadIssueFileToStorage } from "../../../environments/firebase/firebase-storage";
import { editIssueInDb } from "../../../store/issues/issueModel";
// selektor z redux
import { useGetOneIssue } from "../../../store/issues/issueSlice";

// TODO: to zamienić na typy w typescript
import {
  issueViewProperties,
  commentAddProperties,
} from "../../../store/issues/issuesMeta";
//TODO: BRAC Z INNEGO MIEJSCA
import { initialComment } from "../../../store/issues/issuesMeta";

export const useDataDetailsController = (elementId: string) => {
  const element = useGetOneIssue(elementId);
  const comments = element ? (element.comments ? element.comments : []) : [];

  const handleEdit = (property: string, value: any) => {
    // //console.log("HANDLE EDIT ISSUE", elementId, property, value);
    editIssueInDb(elementId, { [property]: value });
  };

  const handleAddComment = (newComment: {}) => {
    // //console.log("HANDLE ADD COMMENT", newComment);
    let addComment = { ...newComment, id: nanoid(), add_date: Date.now() };
    let newComments = [...comments, addComment];
    editIssueInDb(elementId, { comments: newComments });
  };
  function handleUpload(e: any) {
    let path = "issues/" + e.target.files[0].name;
    // //console.log("UPLOAD PHOTO", e);
    if (!element) return;
    uploadIssueFileToStorage(e.target.files[0], path, element.id);
  }

  return {
    element,
    comments,
    handleEdit,
    handleAddComment,
    handleUpload,
    initialComment,
    issueViewProperties,
    commentAddProperties,
  };
};
