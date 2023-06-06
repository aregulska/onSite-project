export interface Property {
  id: string;
  name: string;
  type: string;
  required?: boolean;
  options?: { id: string; name: string }[];
}

export const propertyId: Property = {
  id: "id",
  name: "id",
  type: "text",
  required: true,
};

export const propertyName: Property = {
  id: "name",
  name: "name",
  type: "text",
  required: true,
};
export const propertyTitle: Property = {
  id: "title",
  name: "title",
  type: "text",
  required: true,
};
export const propertyPhotoUrl: Property = {
  id: "photoUrl",
  name: "photoUrl",
  type: "text",
  required: true,
};
export const propertyEmail: Property = {
  id: "email",
  name: "email",
  type: "email",
  required: true,
};
export const propertyPassword: Property = {
  id: "password",
  name: "password",
  type: "password",
};

export const propertyDueDate: Property = {
  id: "due_date",
  name: "due_date",
  type: "date",
};
export const propertyResponsible: Property = {
  id: "responsible",
  name: "responsible",
  type: "select",
};
