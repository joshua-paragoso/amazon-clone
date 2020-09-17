export const initialState = {
    basket: [],
    user: null,
};

//Selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.prive + amount,0); //iterates through the basket and tallies up the total

//action is what youre trying to do to the basket
const reducer=(state, action) => {

    console.log(action);

    //switch based on the action
    switch (action.type) {
        
        //when you press the basket to add
        case "ADD_TO_BASKET":
            return {
                //returning whatever the state originally was
                ...state,
                //change the basket to whatever it orginally was
                //plus whatever the action that you passed inside buck
                basket: [...state.basket, action.item],
            };
        
            //return to default state
            default:
                return state;
    }
}

//default state
export default reducer;