const initialState = 'General Knowledge';

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'selectCategory':
      return action.payload;
    default:
      return state;
  }
};

export default CategoryReducer;
