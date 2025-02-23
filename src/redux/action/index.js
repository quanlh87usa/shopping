// for Add item to cart
export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload : product
    }
}

// for Delete item to cart
export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload : product
    }
}


