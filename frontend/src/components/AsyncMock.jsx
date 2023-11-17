const products = [
    {
        id: '1',
        name: 'iPhone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flaptronic.pe%2Fcatalogo%2Fproducto%2Fiphone-12-64gb-128gb%2F&psig=AOvVaw2kP9xesG3HyA8mq9DvRP94&ust=1700263737132000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKD4zpDWyYIDFQAAAAAdAAAAABAD',
        stock: 25,
        description: 'Descripción de iPhone 12'
    },
    {
        id: '2',
        name: 'iPhone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flaptronic.pe%2Fcatalogo%2Fproducto%2Fiphone-12-64gb-128gb%2F&psig=AOvVaw2kP9xesG3HyA8mq9DvRP94&ust=1700263737132000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKD4zpDWyYIDFQAAAAAdAAAAABAD',
        stock: 25,
        description: 'Descripción de iPhone 12'
    },
    {
        id: '3',
        name: 'iPhone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flaptronic.pe%2Fcatalogo%2Fproducto%2Fiphone-12-64gb-128gb%2F&psig=AOvVaw2kP9xesG3HyA8mq9DvRP94&ust=1700263737132000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKD4zpDWyYIDFQAAAAAdAAAAABAD',
        stock: 25,
        description: 'Descripción de iPhone 12'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const AsyncMock = () => {
  return (
    <div>AsyncMock</div>
  )
}
