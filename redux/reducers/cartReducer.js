const initialState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

export const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_TO_CARD": {
      let newState = { ...state };
 //console.log("action",action.payload.title)
      if (action.payload.checkboxValue) {
      //  console.log("ADD_TO_CARD");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
       // console.log("REMOVE_FROM_CARD");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }

     // console.log("new state", newState);
      return newState;
    }
    default:
      return state;
  }
};
