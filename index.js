import express from 'express';
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});

const s3 = new AWS.S3();

const getter_params={
    Bucket:"1ec",
    Key:"products.json"
};

const app = express();  // Create an express app

app.use(express.json());  // Add a middleware to parse JSON

// Add a route to the app
app.get('/products', async (req, res) => {
    const data = await s3.getObject(getter_params).promise();
    const parsedData = JSON.parse(data.Body.toString())
    res.status(200).json(parsedData);
});


app.post('/checkout', async (req, res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const address = body.address;
    const products = body.products;

    const data = await s3.getObject(getter_params).promise();
    const parsedData = JSON.parse(data.Body.toString())

    const newProducts = products.map(product => {
        const productData = parsedData.find(p => p.id === product.id);
        return {
            ...productData,
            quantity: product.quantity,
            subtotal: (productData.price * product.quantity).toFixed(2)
        }
    });

    const total = newProducts.reduce((acc, product) => {
        return acc + parseFloat(product.subtotal);
    }, 0).toFixed(2);

    const response = {
        success: true,
        data: {
            orderId: '1',
            name,
            email,
            address,
            products: newProducts,
            total
        }
    };

    res.status(200).json(response);
});


// Start the app
app.listen(3000, () => {
    console.log('Server started on port 3000');
});


//stuff i removed 
