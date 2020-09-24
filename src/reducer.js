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

        //when you press the basket to remove
        case "REMOVE_FROM_BASKET":
                //find the index youre trying to delete
                //goes through all the basket items and if it matches the action id
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
    
                //copy basket and put it into temp variable
                //copy the state
                let newBasket = [...state.basket];

                //if you found the item
                if(index >= 0){
                    //new basket will look different
                    newBasket.splice(index,1);
                
                }else{
                    console.warn(
                        'cant remove product (id: ${action.id}) as its not in the basket'
                    );
                }

                //return current state
                return{
                    ...state,
                    basket: newBasket
                }

            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }
        
            //return to default state
            default:
                return state;
    }
}

//default state
export default reducer;