import {
  Property,
  propertyTitle,
  propertyDueDate,
  propertyResponsible,
} from "../metadata/properties";

// DEFINICJA TYPÓW I INITIAL STATE
export interface Issue {
  id: string;
  no: number;
  title: string;
  status: string;
  due_date: number;
  responsible: string;
  marker_position: {
    top: number;
    left: number;
  };
  comments: Comment[];
  project: string;
  plan: string;
  category: string;
  photoUrl: string;
}

export const initialIssue = {
  id: "",
  title: "",
  no: -1,
  status: "pending",
  due_date: "",
  responsible: "",
  marker_position: {
    top: 0,
    left: 0,
  },
  comments: [],
  project: "",
  plan: "",
  category: "",
};

export interface Comment {
  id: string;
  title: string;
  add_date: number;
  responsible: string;
}

export const initialComment = {
  id: null,
  title: null,
  add_date: null,
  responsible: null,
};

// CECHY SPECYFICZNE DLA ISSUES
const issueStatusProp: Property = {
  id: "status",
  name: "status",
  display_name: "Status",
  type: "select",
  options: [
    { id: "pending", name: "pending" },
    { id: "in progress", name: "in progress" },
    { id: "done", name: "done" },
  ],
};
const issueCategoryProp: Property = {
  id: "category",
  name: "category",
  display_name: "Category",
  type: "select",
  options: [
    { id: "hvac", name: "hvac" },
    { id: "facade", name: "facade" },
    { id: "constr", name: "constr" },
  ],
};

// METADANE UI
export const issueAddProperties = [
  propertyTitle,
  propertyDueDate,
  propertyResponsible,
  issueStatusProp,
  issueCategoryProp,
];

export const commentAddProperties = [propertyTitle, propertyResponsible];

export const issueViewProperties = [
  propertyTitle,
  propertyDueDate,
  propertyResponsible,
  issueStatusProp,
  issueCategoryProp,
];
