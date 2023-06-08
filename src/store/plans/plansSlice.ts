import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Plan } from "./plansMeta";

const initialPlanState: Plan[] = [];

const plansSlice = createSlice({
  name: "plans",
  initialState: initialPlanState,
  reducers: {
    planAdded: (state, action) => {
      // //console.log("ADD PLAN TO STORE", action.payload);
      let newPlan = action.payload;
      state.push(newPlan);
    },
    clearAllPlans: () => {
      // //console.log("CLEAR ALL PLAN");
      return [];
    },
  },
});

//SELEKTORS
export const useGetAllPlans = () => {
  return useSelector((state: RootState) => state.plans);
};
export const useGetAllPlansForProject = (projectId: string) => {
  const plans = useGetAllPlans();
  return plans.filter((plan) => plan.project === projectId);
};
export const useGetOnePlan = (id: string | null) => {
  return useSelector((state: RootState) => {
    if (!id) return null;
    return state.plans.find((plan) => plan.id === id);
  });
};

export const useAddOnePlan = () => {
  const dispatch = useDispatch();
  return (plan: Plan) => dispatch(planAdded(plan));
};
export const useClearAllPlans = () => {
  const dispatch = useDispatch();
  return () => dispatch(clearAllPlans());
};

export default plansSlice.reducer;

export const { planAdded, clearAllPlans } = plansSlice.actions;
