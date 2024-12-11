import axios from 'axios';

const PRODUCTS_RESTAPI_URL = 'http://localhost:8088/producthive/api/products';

//Service layer interacting with product-hive rest-api of springboot using axios Http library
class ProductService{

    static getProducts(){
        return axios.get(PRODUCTS_RESTAPI_URL);
    }
}
export default ProductService;