export const removeProductsFromProfil = (products, product) => {
    products.filter(prod => prod.id !== product.id)
}