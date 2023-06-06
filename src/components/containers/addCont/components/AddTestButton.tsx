import React, { useContext } from "react";
import { AddContext } from "../AddCont";

import { AddButton } from "../../../components/buttons/addButton/AddButton";

export const AddTestButton = () => {
  const { isAdding: on, handleSetAdding: setOn } = useContext(AddContext);

  const content = !on ? <AddButton action={() => setOn(true)} /> : null;
  return content;
};
