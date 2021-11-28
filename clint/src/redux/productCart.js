import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartitems: JSON.parse(localStorage.getItem("cartitem")) || [],
    stock: 0,
    totalQuntity: JSON.parse(localStorage.getItem("totalQuntity")) || 0,
    totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        onAdd(state, action) {
            const itermIndex = state.cartitems.findIndex((item) => item._id === action.payload._id);
            if (itermIndex >= 0) {
                state.cartitems[itermIndex].cartQuantity += 1;
                localStorage.setItem('cartitem', JSON.stringify(state.cartitems))
            } else {

                const productquntiy = { ...action.payload, cartQuantity: 1 }
                state.cartitems.push(productquntiy)
                localStorage.setItem('cartitem', JSON.stringify(state.cartitems))
            }
        },
        onRemov(state, action) {
            const nextCartiIterm = state.cartitems.filter(
                (cartitem) => cartitem._id !== action.payload._id
            );
            state.cartitems = nextCartiIterm;
            localStorage.setItem('cartitem', JSON.stringify(state.cartitems))
        },
        onDecrease(state, action) {
            const itermIndex = state.cartitems.findIndex(
                (cartitem) => cartitem._id === action.payload._id
            )
            if (state.cartitems[itermIndex].cartQuantity > 1) {
                state.cartitems[itermIndex].cartQuantity -= 1
            } else if (state.cartitems[itermIndex].cartQuantity === 1) {
                const nextCartiIterm = state.cartitems.filter(
                    (cartitem) => cartitem._id !== action.payload._id
                );
                state.cartitems = nextCartiIterm;
                localStorage.setItem('cartitem', JSON.stringify(state.cartitems))
            }
        },
        getTotal(state, action) {
            let { total, quatity } = state.cartitems.reduce((cartTotal, cartitem) => {
                const { price, cartQuantity } = cartitem;
                const itermTotal = price * cartQuantity;

                cartTotal.total += itermTotal
                cartTotal.quatity += cartQuantity

                return cartTotal
            }, {
                total: 0,
                quatity: 0
            });
            state.totalQuntity = quatity;
            state.totalAmount = total;
            localStorage.setItem('totalQuntity', JSON.stringify(state.totalQuntity))
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
        }

    }

})

export const { onAdd, onRemov, onDecrease, getTotal } = cartSlice.actions;
export default cartSlice.reducer;