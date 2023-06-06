import {
  Property,
  propertyName,
  propertyEmail,
  propertyPassword,
  propertyPhotoUrl,
} from "../metadata/properties";

export const loginProperties: Property[] = [propertyEmail, propertyPassword];

export const registerProperties: Property[] = [
  propertyName,
  propertyPhotoUrl,
  propertyEmail,
  propertyPassword,
];

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  img: string;
}
export const initialUserState: User = {
  id: "",
  email: "",
  password: "",
  name: "",
  img: "",
};
