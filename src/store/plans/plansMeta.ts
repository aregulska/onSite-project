export interface Plan {
  id: string;
  title: string;
  file: string;
  project: string;
  due_date: string | null;
  issues: string[];
}

export const initialPlan: Plan = {
  id: "",
  title: "",
  file: "",
  project: "",
  due_date: "",
  issues: [],
};
