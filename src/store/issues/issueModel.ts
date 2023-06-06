//ISSUE HANDLERS - TO DB
import { useState, useEffect } from "react";

import {
  addNewToDb,
  editDocInDb,
  createQuery,
  subscribeToDb,
} from "../../environments/firebase/firebase-api";

export const addIssueToDb = (element: {}) => {
  return addNewToDb("issues", element);
};

export const editIssueInDb = (elementId: string, patch: {}) => {
  editDocInDb("issues", elementId, patch);
};

export function useSubscribeToDb(
  col: string,
  myQuery: {},
  add: Function,
  edit: Function,
  clear: Function
) {
  // TODO: zrobić stan i zwracać - loading, error, fulfilled
  console.log("SUBSCRIBE TO DB", col, myQuery);
  const q = createQuery(col, myQuery);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToDb(q, add, edit);
    setLoading(false);
    return () => {
      console.log("UNSUBSCRIBE", col);
      clear();
      unsubscribe();
    };
  }, []);
  return { loading };
}
