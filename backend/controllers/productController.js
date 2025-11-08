const ProductModel = require('../models/productModel');


//Get all Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {

    const products = await ProductModel.find({});
    res.json({
        success: true,
        products
    })
}

//Get Single product API - /api/v1/:id
exports.getSingleProducts = async (req, res, next) => {
    console.log(req.params.id, 'ID');
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message : "Unable to Get the Product with the given id"
        })
    }
   
    
}