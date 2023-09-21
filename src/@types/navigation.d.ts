import { NewMealDTO } from "../types";

export type RoutesParamList = {
  Dashboard: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesParamList {}
  }
}
