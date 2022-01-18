const initialState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CARD": {
      const newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      console.log("new state", newState);
      return newState;
    }
    default: 
      return state; 
  }
};
