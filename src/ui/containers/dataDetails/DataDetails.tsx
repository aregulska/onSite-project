import React from "react";

import { Form } from "../form/Form.tsx";
import { AddCont } from "../addCont/AddCont.tsx";
import { AddTestButton } from "../addCont/components/AddTestButton.tsx";
import { AddTestForm } from "../addCont/components/AddTestForm.tsx";
import { DiscussionList } from "./containers/DiscussionList.tsx";
import { InputPhoto } from "../../components/inputs/InputPhoto.tsx";
import { CloseButton } from "../../components/buttons/closeButton/CloseButton.tsx";

import { useDataDetailsController } from "./useDataDetailsController.ts";

// CEL KOMPONENTU: wyświetlenie struktury detali
export const DataDetails = ({
  elementId,
  onClose,
}: {
  elementId: string;
  onClose: Function;
}) => {
  const {
    element,
    handleUpload,
    handleAddComment,
    handleEdit,
    initialComment,
    commentAddProperties,
    issueViewProperties,
  } = useDataDetailsController(elementId);

  if (!element) return <div>No element...{elementId}</div>;

  return (
    <div className="data-details">
      <div className="data-details__top">
        <div className="data-details__title">{element.title}</div>
        <CloseButton action={onClose} />
      </div>
      <div className="data-details__main">
        <div className="data-details__photo">
          <InputPhoto photo={element.photoUrl} onUpload={handleUpload} />
        </div>
        <div className="data-details__form">
          <Form
            properties={issueViewProperties}
            formStyle={{ variant: "standard", size: "small" }}
            input={element}
            onChange={handleEdit}
          />
        </div>
      </div>
      <div className="data-details__bottom">
        <DiscussionList element={element} />
      </div>
      <AddCont
        title="Add New Comment"
        initialState={initialComment}
        addProperties={commentAddProperties}
        handleAddElement={handleAddComment}
      >
        <div className="data-details__add-button">
          <AddTestButton />
        </div>
        <AddTestForm />
      </AddCont>
    </div>
  );
};
