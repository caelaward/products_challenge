import {pool} from '../config/config.js'

const getProducts= async()=>{
    const [result]=await pool.query(`
   SELECT * FROM products `)
   return result
}

const getProduct=async(id)=>{
    const[fruit]=await pool.query(`
SELECT * FROM products
WHERE id= ?
`,[id])
return fruit
}

const addProduct=async(prod_name,quantity,amount,category,prodURL)=>{
    await pool.query(`
    INSERT INTO products (prod_name,quantity,amount,category,prodURL) values(?,?,?,?,?) `,
    [prod_name,quantity,amount,category,prodURL])
}

const deleteProduct=async(id)=>{
    const [fruit]=await pool.query(`
    DELETE FROM products WHERE id=?`,[id])
   return getProducts(fruit.DeleteId)
}

const editProduct=async(prod_name,quantity,amount,category,prodURL,id)=>{
    await pool.query(`
    UPDATE products SET prod_name=?, quantity=?, amount=?, category=?, prodURL=? 
    WHERE id=? `,
     [prod_name,quantity,amount,category,prodURL,id])
     return getProducts()
}

export{getProducts,addProduct,deleteProduct,editProduct,getProduct}