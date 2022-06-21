import { getCartItems, getCartItem, createCartItem, updateCartItem, getPurchaces } from "../../services/cartService";

export const actionTypes = {
    SET_CART_LIST: 'SET_CART_LIST',
    SET_CART_ITEM: 'SET_CART_ITEM',
    CLEAR_CART_LIST: 'CLEAR_CART_LIST',
    SET_CURRENT_CART_PAGE: 'SET_CURRENT_CART_PAGE',
    SET_TOTAL_CART_PAGES: 'SET_TOTAL_CART_PAGES',
};

export function requestCartItems(userId) {
    return async (dispatch, store) => {
        try {
            const res = await getCartItems(userId);
            const list = res.docs;
            /*const totalPages = res.totalPages;
            const currentPage = res.page;
            await dispatch(setCurrentPage(currentPage));
            await dispatch(setTotalPages(totalPages));*/
            await dispatch(setCartList(list));
            return list;
        } catch (err) {
            console.log(err);
        }
    }
}

export function requestPurchaces(userId) {
    return async (dispatch, store) => {
        try {
            const res = await getPurchaces(userId);
            const list = res.docs;
            /*const totalPages = res.totalPages;
            const currentPage = res.page;
            await dispatch(setCurrentPage(currentPage));
            await dispatch(setTotalPages(totalPages));*/
            await dispatch(setCartList(list));
            return list;
        } catch (err) {
            console.log(err);
        }
    }
}

export function requestCartItem(id) {
    return async (dispatch, store) => {
        try {
            const res = await getCartItem(id);
            const item = res;
            await dispatch(setCartItem(item));
        } catch (err) {
            console.log(err);
        }
    }
}

export function newCartItem(user, product, quantity){
    return async(dispatch, store) => {
        try {
            const res = await createCartItem(user, product, quantity);
            const item = res;
            await dispatch(setCartItem(item))
        } catch (err) {
            console.log(err);
        }
    }
}

export function buyItem(cartId, cartItem) {
    return async(dispatch, store) => {
        try {
            const res = await updateCartItem(cartId, cartItem);
            const item = res;
            await dispatch(setCartItem(item));
        } catch (err) {
            console.log(err);
        }
    }
}

export function setCartItem(payload) {
    return {
        type: actionTypes.SET_CART_ITEM,
        payload,
    };
}

export function setCartList(payload) {
    return {
        type: actionTypes.SET_CART_LIST,
        payload,
    };
}

export function clearCart() {
    return {
        type: actionTypes.CLEAR_CART_LIST,
    };
}

export function setCurrentPage(payload) {
    return {
        type: actionTypes.SET_CURRENT_CART_PAGE,
        payload,
    }
}

export function setTotalPages(payload) {
    return {
        type: actionTypes.SET_TOTAL_CART_PAGES,
        payload,
    }
}