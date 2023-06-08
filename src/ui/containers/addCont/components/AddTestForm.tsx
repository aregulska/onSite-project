import React, { useContext } from "react";
import { AddContext } from "../AddCont.tsx";

import { Form } from "../../form/Form.tsx";
import { Modal } from "../../../components/modal/Modal.tsx";

export const AddTestForm = () => {
  const {
    isAdding: on,
    handleSetAdding: setOn,
    title,
    photo,
    addProperties,
    newElement,
    handleAddElement,
    handleEditField,
    handleClearEdit,
  } = useContext(AddContext);

  if (!on) return null;
  return (
    <Modal>
      <div className="add-form">
        <Form
          autofocus
          photo={photo}
          title={title}
          formStyle={{ variant: "outlined", size: "big" }}
          input={newElement}
          properties={addProperties}
          onChange={handleEditField}
          onCancel={() => {
            setOn(false);
          }}
          onOk={async () => {
            handleClearEdit();
            setOn(false);
            return handleAddElement(newElement);
          }}
        />
      </div>
    </Modal>
  );
};
