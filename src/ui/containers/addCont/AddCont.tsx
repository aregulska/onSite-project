import React, { useState, createContext } from "react";

import { Property } from "../../../store/metadata/properties";

// CEL KOMPONENTU: compund component do dodawania -> przekazuje dane do formularza + akcje dodania i cancelowania

interface AddContProps {
  title: string;
  photo?: boolean;
  initialState: any;
  addProperties: Property[];
  handleAddElement: Function;
  children?: React.ReactNode;
}

interface AddContContext {
  title: string;
  photo?: boolean;
  addProperties: Property[];
  isAdding: boolean;
  handleSetAdding: Function;
  newElement: any;
  handleEditField: (property: string, value: any) => void;
  handleClearEdit: Function;
  handleAddElement: Function;
}
// kontekst
export const AddContext = createContext<AddContContext>({
  title: "",
  photo: false,
  addProperties: [],
  isAdding: false,
  handleSetAdding: () => {},
  newElement: {},
  handleEditField: () => {},
  handleClearEdit: () => {},
  handleAddElement: () => {},
});

export const AddCont = (props: AddContProps) => {
  const { title, photo, initialState, addProperties, handleAddElement } = props;

  const [isAdding, setIsAdding] = useState(false);
  const [newElement, setNewElement] = useState<{}>(initialState);

  function handleEdit(property: string, value: any) {
    setNewElement((prev) => ({ ...prev, [property]: value }));
  }
  function handleClearEdit() {
    setNewElement(initialState);
  }

  function handleSetAdding(value: boolean) {
    setIsAdding(value);
  }

  const context = {
    title,
    photo,
    addProperties,
    isAdding,
    handleSetAdding,
    newElement,
    handleEditField: handleEdit,
    handleClearEdit,
    handleAddElement,
  };
  return (
    <AddContext.Provider value={context}>{props.children}</AddContext.Provider>
  );
};
