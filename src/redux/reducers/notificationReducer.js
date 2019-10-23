const initialState = {
 
    notifications: [
        {
            id: 0,
            message: 'Danas se kabasti otpad odvozi sa Cengic Vile u 10:00 na vise lokacija.'
        },
        
        {
            id: 1,
            message: 'Danas se kabasti otpad odvozi sa Cengic Vile u 10:00 na vise lokacija.'
        },

        {
            id: 2,
            message: 'Danas se kabasti otpad odvozi sa Cengic Vile u 10:00 na vise lokacija.'
        },
    ]

}


export default function (state = initialState, action) {
    switch (action.type) {

        default:
            return state
    }
}