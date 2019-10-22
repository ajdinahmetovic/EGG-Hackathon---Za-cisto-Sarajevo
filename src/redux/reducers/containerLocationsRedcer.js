const initialState = {
 

    locationData: [
        {
            id: 0,
            img: require('../../assets/kanta.png'),
            location: 'Novo Sarajevo',
            locationAdress: 'Zelenih beretki 23.',
            recycleType: 'Papir, Staklo'
        },
        {
            id: 1,
            img: require('../../assets/kanta.png'),
            location: 'Novo Sarajevo',
            locationAdress: 'Zelenih beretki 23.',
            recycleType: 'Papir, Staklo'
        },
        {
            id: 2,
            img: require('../../assets/kanta.png'),
            location: 'Novo Sarajevo',
            locationAdress: 'Zelenih beretki 23.',
            recycleType: 'Papir, Staklo'
        },
        {
            id: 3,
            img: require('../../assets/kanta.png'),
            location: 'Novo Sarajevo',
            locationAdress: 'Zelenih beretki 23.',
            recycleType: 'Papir, Staklo'
        },
    ]

};


export default function (state = initialState, action) {
    switch (action.type) {

        default:
            return state
    }
}