import Request from './service/product.js'
const baseUrl = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products'
const request = new Request()
const show = async () => {
    const response = await request.product(baseUrl)
    if (response) {
        console.log(response)

    }
}
show()