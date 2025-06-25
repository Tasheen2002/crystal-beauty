import Product from "../models/product.js";

export function getProducts(req, res) {
  Product.find().then((productList) => {
    res.json({
      List: productList,
    });
  });
}

export function createProducts(req, res) {
  const product = new Product(req.body);
  product.save().then(() => {
    res.json({
      message: "This is a post request for product router",
    });
  });
}

export function deleteProducts(req, res) {
  Product.deleteOne({ name: req.body.name }).then(() => {
    res.json({
      message: "Product deleted successfully",
    });
  });
}

export function getProductsByName(req, res) {
  const name = req.params.name;

  Product.find({ name: name })
    .then((productList) => {
      if (productList.length == 0) {
        res.json({
          message: "Product not found",
        });
      } else {
        res.json({
          List: productList,
        });
      }
    })
    .catch(() => {
      res.json({
        message: "Product not found",
      });
    });
}

export function deleteProductsByName(req, res) {
  Product.deleteOne({ name: req.params.name }).then(() => {
    res.json({
      message: "Product deleted successfully",
    });
  });
}
