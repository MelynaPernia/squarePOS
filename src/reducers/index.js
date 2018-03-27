export default (state,action)=> {
    switch (action.type) {
        case 'ADD_PRODUCT':{
            let products =  [...state.sale.products]
            if (products.find(p => p.id === action.id)) {
                products = products.map(p => (
                    p.id === action.id ? { ...p, cant: p.cant + 1 } : p
                ))
            } else {
                products = [...products, {id: action.id, cant: 1}]
            }
            return {
                ...state,
                sale: {
                    ...state.sale,
                    products
                }
            }
        }
    }
    return state
}