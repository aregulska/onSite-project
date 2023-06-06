import React from "react";

import { FormControl, Button } from "@mui/material";

import { FormField } from "./components/FormField";
import { InputPhoto } from "../../components/inputs/InputPhoto";

import { useFormController } from "./useFormController";
import {
  Property,
  GlobalEntityProps,
} from "../../../store/metadata/properties";

interface FormProps {
  autofocus?: boolean;
  photo?: boolean;
  title?: string;
  properties: Property[];
  input: GlobalEntityProps;
  onChange: (property: string, value: any) => void;
  onCancel?: () => void;
  onOk?: () => void;
  formStyle: InputStyleProps;
}

export interface InputStyleProps {
  variant: "outlined" | "standard" | "filled";
  size: "small" | "medium" | "big";
}

// CEL KONTROLKI: konfiguracja formularza
export const Form = ({
  autofocus,
  photo,
  title,
  formStyle,
  properties,
  input,
  onChange,
  onOk,
  onCancel,
}: FormProps) => {
  const { fieldRef, photoUrl, onUpload, handleOkWithPhoto } =
    useFormController(onOk);

  let refToPass = autofocus ? fieldRef : null;
  return (
    <div className="form">
      {title && <div className="form__title">{title}</div>}
      {photo && (
        <div className="form__photo">
          <InputPhoto photo={photoUrl} onUpload={onUpload} />
        </div>
      )}
      <FormControl fullWidth sx={{ textAlign: "left", borderColor: "#649e3c" }}>
        {properties.map((property, index) => (
          <div className="form-field" key={property.id}>
            <FormField
              formStyle={formStyle}
              index={index}
              ref={refToPass as any}
              property={property}
              data={input}
              handleEditField={onChange}
            />
          </div>
        ))}
      </FormControl>
      <div className="form__buttons">
        {onCancel && (
          <Button variant="outlined" size="large" onClick={onCancel}>
            CANCEL
          </Button>
        )}
        {onOk && (
          <Button variant="contained" size="large" onClick={handleOkWithPhoto}>
            OK
          </Button>
        )}
      </div>
    </div>
  );
};
