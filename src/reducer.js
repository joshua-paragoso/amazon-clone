export const initialState = {
    baker: [],
    // user: null,
};

//action is what youre trying to do to the basket
const reducer = (state, action) => {

    //switch based on the action
    switch(action.type){
        
        //when you press the basket to add
        case 'ADD_TO_BAKSET':
            return {
                //returning whatever the state originally was
                ...state,
                //change the basket to whatever it orginally was
                //plus whatever the action that you passed inside
                basket: [...state.basket,action.item],
            };
        
            //return to default state
            default:
                return state;
    }
};

//default state
export default reducer;