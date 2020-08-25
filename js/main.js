/* importing modules */
import Request from './service/product.js'
import productModel from './models/Product.js'

/* instantiating class */
const request = new Request()
const product = new productModel()

/* url API for getting products */
const baseUrl = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products'

/* loading products, this a asynchronous function ;) */
const showProducts = async () => {
    let response = await request.product(baseUrl)
    response = response.slice(0, 2)
    for (let i in response) {
        const productModel = product.create(
            {
                imageUrl: response[i].image,
                name: response[i].name,
                description: response[i].description,
                oldPrice: response[i].oldPrice,
                price: response[i].price,
                installmentCount: response[i].installments.count,
                installmentValue: response[i].installments.value
            })
        product.post('products', productModel)
    }
}

/* starting function */
showProducts()