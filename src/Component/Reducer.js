
export const Reducer = (state, action) => {
    if (action.type === "REMOVE") {
        return {
            ...state,
            items: state.items.filter((dValue) => {
                return dValue.id !== action.payload;
            })
        }
    }
    if (action.type === "REMOVEALL") {
        return {
            ...state,
            items: []
        };
    }
    if (action.type === "INCREMENT") {
        const updateCart = state.items.map((currElement) => {
            if (currElement.id === action.Payload) {
                return { ...currElement, quantity: currElement.quantity + 1 };
            }
            return currElement;
        });
        return { ...state, items: updateCart };
    }

    if (action.type === "DECREMENT") {
        const updateCart = state.items.map((curEle) => {
            if (curEle.id === action.payload) {
                return { ...curEle, quantity: curEle.quantity - 1 };
            }
            return curEle;
        })
            .filter((curEle) => {     // here we follow chain method
                return curEle.quantity !== 0;
            })
        return { ...state, items: updateCart };
    }

    if (action.type === "TOTAL") {
        const { totalItem, totalAmount } = state.items.reduce((accum, curval) => {
            let { quantity, price } = curval;

            let updatedtotalamount = quantity * price;
            accum.totalAmount += updatedtotalamount

            accum.totalItem += quantity;
            return accum;
        }, { totalItem: 0, totalAmount: 0 });  //reduce method have feature to put initial state.
        return { ...state, totalItem, totalAmount };
    }
    return state;
};
