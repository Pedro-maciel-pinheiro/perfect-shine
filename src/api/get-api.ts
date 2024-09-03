import productData from "@/data/products-data.json"









export const getProductData = () =>{
    const res = productData
    
    if(!res) {
      throw Error
    }
  
    return res
  }
  

