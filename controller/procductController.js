const Product = require('../Components/Models/Products');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "server error" });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "server error" });
    }
};

module.exports  = {
    getAllProducts,
    getProductById
};
