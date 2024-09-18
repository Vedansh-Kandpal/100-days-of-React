import express from 'express';
const app = express()

app.get('/api/products', (req, res) => {
    const products = [
        {
            "id": "1",
            "name": "Wireless Bluetooth Headphones",
            "category": "Electronics",
            "price": 89.99,
            "brand": "SoundWave",
            "inStock": true
        },
        {
            "id": "2",
            "name": "Stainless Steel Water Bottle",
            "category": "Outdoor",
            "price": 24.99,
            "brand": "EcoHydrate",
            "inStock": true
        },
        {
            "id": "3",
            "name": "Smartphone 128GB",
            "category": "Electronics",
            "price": 699.99,
            "brand": "TechNova",
            "inStock": false
        },
        {
            "id": "4",
            "name": "Leather Wallet",
            "category": "Fashion",
            "price": 39.99,
            "brand": "UrbanStyle",
            "inStock": true
        },
        {
            "id": "5",
            "name": "Organic Green Tea",
            "category": "Food & Beverage",
            "price": 12.99,
            "brand": "GreenLeaf",
            "inStock": true
        },
        {
            "id": "6",
            "name": "Gaming Mouse",
            "category": "Electronics",
            "price": 59.99,
            "brand": "GameGear",
            "inStock": true
        },
        {
            "id": "7",
            "name": "Cotton Bed Sheet Set",
            "category": "Home",
            "price": 49.99,
            "brand": "SleepWell",
            "inStock": false
        },
        {
            "id": "8",
            "name": "Fitness Tracker",
            "category": "Electronics",
            "price": 129.99,
            "brand": "FitPulse",
            "inStock": true
        },
        {
            "id": "9",
            "name": "Portable Charger",
            "category": "Electronics",
            "price": 19.99,
            "brand": "ChargeUp",
            "inStock": true
        },
        {
            "id": "10",
            "name": "Yoga Mat",
            "category": "Fitness",
            "price": 34.99,
            "brand": "ZenFlex",
            "inStock": true
        }
    ]

    if (req.query.search) {
        const filteredProducts = products.filter(product =>
            product.name.includes(req.query.search)
        )
        res.send(filteredProducts)
        return
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)

})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})