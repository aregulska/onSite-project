import React, { ChangeEvent, forwardRef, useState } from "react";

import { TextField, MenuItem, IconButton, TextFieldProps } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useAllUsers } from "../../../../store/users/usersSlice";
import {
  Property,
  GlobalEntityProps,
} from "../../../../store/metadata/properties";

type FieldInputProps = {
  inputRef: React.ForwardedRef<HTMLInputElement>;
  id: string;
  value: any;
  label: string;
  property: Property;
  variant: any;
  size: any;
} & TextFieldProps;

const FormFieldPassword = (props: FieldInputProps) => {
  const [hidePass, setHidePass] = useState(true);

  const fieldPropsPassword = {
    ...props,
    type: hidePass ? "password" : "text",
  };
  return (
    <TextField
      {...fieldPropsPassword}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setHidePass((prev) => !prev)}>
              {hidePass ? (
                <VisibilityOffIcon sx={{ fontSize: 18 }} />
              ) : (
                <VisibilityIcon sx={{ fontSize: 18 }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const FormFieldDate = (props: FieldInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        {...props}
        onChange={props.onChange}
        renderInput={(params) => <TextField {...props} {...params} />}
      />
    </LocalizationProvider>
  );
};

const FormFieldSelect = (props: FieldInputProps) => {
  const { property } = props;

  let users = useAllUsers();
  let options: string[] | undefined = ["No options"];
  if (property.id === "responsible") {
    options = users;
  } else {
    options = property.options;
  }
  return (
    <TextField {...props} select>
      {options
        ? options.map((option: any) => (
            <MenuItem sx={{ zIndex: 10000 }} value={option.id} key={option.id}>
              {option.name ? option.name : option}
            </MenuItem>
          ))
        : null}
    </TextField>
  );
};

interface FormFieldProps {
  property: Property;
  data: GlobalEntityProps;
  handleEditField: (name: string, value: any) => void;
  index: number;
  formStyle: any;
  ref: any;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (props, ref): any => {
    const { property, data, handleEditField, index, formStyle } = props;
    const propName = property.name;
    let value = data[propName as keyof GlobalEntityProps];

    // //console.log("FORM FIELD FORM STYLE", formStyle);
    const handleChange = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      handleEditField(property.name, target.value);
    };
    const handleDateChange = (value: any) => {
      let timestamp = value.toDate().getTime();
      handleEditField(property.name, timestamp);
    };

    let field;
    let fieldProps = {
      inputRef: index === 0 ? ref : null,
      ...formStyle,
      id: property.name,
      label: property.display_name,
      value: value,
      property,
    };

    if (property.type === "text" || property.type === "email") {
      field = <TextField {...fieldProps} onChange={handleChange} />;
    } else if (property.type === "select") {
      field = <FormFieldSelect {...fieldProps} onChange={handleChange} />;
    } else if (property.type === "date") {
      field = <FormFieldDate {...fieldProps} onChange={handleDateChange} />;
    } else if (property.type === "password") {
      field = <FormFieldPassword {...fieldProps} onChange={handleChange} />;
    }

    return field;
  }
);
