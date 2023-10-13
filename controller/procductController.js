const Product = require('../Components/Models/Products');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
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
        console.error(error);
        res.status(500).json({ message: "server error" });
    }
};

// Create a new product
// Create a new product
const postAll = async (req, res) => {
    try {
        // Check if the required properties exist in the request body
        if (!req.body.name || !req.body.description || !req.body.imageUrl || !req.body.countInStock || !req.body.price) {
            return res.status(400).json({ message: "Missing required fields in the request body" });
        }

        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            countInStock: req.body.countInStock,
            price: req.body.price,
        });

        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

  // Update a product
  const updateAllById =  async (req, res) => {
  
    const products = await Product.findById(req.body.cart);
    if (!cart) return res.status(400).send('Invalid cart');
  
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        countInStock: req.body.countInStock,
        price: req.body.price,
        
      },
      { new: true }
    );
  
    if (!product) {
      return res.status(404).send('Product not found');
    }
  
    res.send(products);
  };
  
  const deleteProduct = async (req, res) => {
    Product.findByIdAndRemove(req.params.id)
      .then(product => {
        if (product) {
          return res
            .status(200)
            .json({ success: true, message: 'The product was deleted' });
        } else {
          return res
            .status(404)
            .json({ success: false, message: 'Product not found' });
        }
      })
      .catch(err => {
        return res.status(500).json({ success: false, error: err });
      });
  };
  
  const getAllCounted = async (req, res) => {
    try {
      const productCount = await Product.countDocuments();
  
      res.send({
        productCount: productCount,
      });
    } catch (error) {
      console.error('Error counting products:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  const getFeatured = async (req, res) => {
      const products = await Product.find({isFeatured: true});
  
      if(products) {
        res.status(500).json({success: false})
      }
       res.send(products);
  };
  
  const getFeaturedCount = async (req, res) => {
    const count = req.params.count ? req.params.count : 0
    const products = await Product.find({isFeatured: true}).limit(+count);
  
    if(products) {
      res.status(500).json({success: false})
    }
     res.send(products);
  };

module.exports  = {
    getAllProducts,
    getProductById,
    postAll,
    updateAllById,
    deleteProduct,
    getAllCounted,
    getFeatured,
    getFeaturedCount
};
