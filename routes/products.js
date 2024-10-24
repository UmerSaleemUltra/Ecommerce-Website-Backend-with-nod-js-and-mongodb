import express from 'express';
import Products from '../models/Products.js';

const app = express();
app.use(express.json()); // Middleware to parse JSON data

// GET route for fetching all products
app.get('/', async (req, res) => {
  try {
    const data = await Products.find();
    res.status(200).send({ message: 'Products fetched successfully!', data });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send({ message: 'Error fetching products' });
  }
});

// POST route for adding a new product
app.post('/addProduct', async (req, res) => {
  try {
    const data = req.body;
    await Products.create(data);
    res.status(201).send({ message: 'Product added successfully!' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).send({ message: 'Error adding product' });
  }
});

// Export the app for Vercel serverless
export default app;

/*
fetch('http://localhost:3001/products/addProduct', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
   
}).then(res => res.json())
.then(res => console.log(res))

*/