import { Product, ProductList, ProductListConfig } from 'src/type/product.type'
import { SuccessResponse } from 'src/type/utils.type'
import http from 'src/utils/http'

const URL = 'products'
const productApi = {
  getProduct(params: ProductListConfig) {
    return http.get<SuccessResponse<ProductList>>(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
  }
}

export default productApi
