export interface Property {
  id: string;
  name: string;
  display_name: string;
  type: string;
  required?: boolean;
  options?: { id: string; name: string }[];
}

export const propertyId: Property = {
  id: "id",
  name: "id",
  display_name: "Id",
  type: "text",
  required: true,
};

export const propertyName: Property = {
  id: "name",
  name: "name",
  display_name: "Name",
  type: "text",
  required: true,
};
export const propertyTitle: Property = {
  id: "title",
  name: "title",
  display_name: "Title",
  type: "text",
  required: true,
};
export const propertyPhotoUrl: Property = {
  id: "photoUrl",
  name: "photoUrl",
  display_name: "Photo",
  type: "text",
  required: true,
};
export const propertyEmail: Property = {
  id: "email",
  name: "email",
  display_name: "Email",
  type: "email",
  required: true,
};
export const propertyPassword: Property = {
  id: "password",
  name: "password",
  display_name: "Password",
  type: "password",
};

export const propertyDueDate: Property = {
  id: "due_date",
  name: "due_date",
  display_name: "Due Date",
  type: "date",
};
export const propertyResponsible: Property = {
  id: "responsible",
  name: "responsible",
  display_name: "Responsible",
  type: "select",
};
