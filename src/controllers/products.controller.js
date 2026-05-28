import productsDAO from "../dao/products.dao.js";  
const productsControllers={};

//oobtener todos los productos
productsControllers.getAll=(req,res)=>{
    productsDAO.getAll() // Llamamos al método del DAO
        .then((products)=>{
            res.json({
                data: products,
            });
        })
        .catch((error)=>{
            res.json({
                error:error,
            });
        })
};

//buscar un solo producto
productsControllers.getOne=(req,res)=>{
    productsDAO
    .getOne(req.params.barcode)
    .then((product)=>{
        if(product)
            res.json({product})
        else
            res.status(404).json({error: "Product not found"})
    })
    .catch((error)=>{
        console.error("Error fetching products",error);
        res
            .status(500)
            .json({error: "An error ocurred while fetching the product"})
    });
};
//Insertar un producto
productsControllers.insertOne = (req, res) => {
    const product = req.body;
    productsDAO
        .insertOne(product)
        .then((response) => {
            console.log(response);
            res.json({
                messsage: "Product inserted successfully",
                product: response,
            });
        })
        .catch((error) => {
            console.error("Error inserting product: ", error);
            res
                .status(500)
                .json({ error: "An error ocurred while inserting the product" });
        });
};

/*
*/
// Actualizar un producto por id
productsControllers.updateOne =  (req,res) =>{
    productsDAO.updateOne(req.params.barcode,req.body)
    .then(()=>{
        res.json({
            message:"product updated successfully"})
        })
    .catch((err)=>{
        console.error("Error al actulizar: "+ err);
        res.json({
            message:"servidor no disponible",
            error:err
        })
    });
};

// Eliminar un producto por id 
productsControllers.deleteOne= (req,res)=>{
    productsDAO.deleteOne(req.params.barcode)
    .then((result)=>{
        res.json({
            message: "product deleted",
            product:result
        })
    })
    .catch((err)=>{
        console.log("An has ocurred while deleted the product")
        res.status(500).json({error:err})
    });
};


export default  productsControllers;