
const productsDAO={};
import Product from "../models/Products.js";


productsDAO.getAll =async()=>{
    return await Product.find();
}

productsDAO.getOne=async(barcode)=>{
    return await Product.findOne({ barcode: barcode });
}

productsDAO.insertOne=async(product)=>{
    const newProduct=await Product.create(product);
    return newProduct;
};

productsDAO.updateOne= async(barcode,product)=>{
    const updateProduct=await Product.findOneAndUpdate({barcode:barcode},product);
    return updateProduct;
}

productsDAO.deleteOne= async (barcode) =>{
const deleteProduct =await Product.findOneAndDelete({barcode:barcode});
return deleteProduct;
};

export default productsDAO;


