import { getProducts,addProduct,deleteProduct,editProduct,getProduct } from "../models/database.js";

export default{
    getProds:async(req,res)=>{
        res.send( await getProducts())
    },
    getProd:async(req,res)=>{
        res.send(await getProduct(+req.params.id))
    },
    addProds:async(req,res)=>{
        const { prod_name, quantity, amount, category, prodURL } = req.body;
        const post = await addProduct(prod_name, quantity, amount, category, prodURL);
        res.send(await getProducts());  
    },
    deleteProd:async(req,res)=>{
        res.send(await deleteProduct(req.params.id))
    },
    editProd:async(req,res)=>{
       const [fruit]=await getProduct(+req.params.id)

       let {prod_name,quantity,amount,category,prodURL}=req.body

       prod_name ? prod_name=prod_name: {prod_name}=fruit
       quantity ? quantity=quantity: {quantity}=fruit
       amount ? amount=amount: {amount}=fruit
       category ? category=category: {category}=fruit
       prodURL ? prodURL=prodURL: {prodURL}=fruit

       await editProduct(prod_name,quantity,amount,category,prodURL,+req.params.id)

       res.json(await getProducts())

    }  
}