// Action Variables
import { SELECT_CATEGORY } from '../actionsVariables/actionVariables';

// Action Generators

export const selectCategory = (category) => {
  return {
    type: SELECT_CATEGORY,
    payload: category,
  };
};
