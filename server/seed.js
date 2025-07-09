const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Product = require("./models/Product"); // adjust path if needed

async function seedProducts() {
  await mongoose.connect(process.env.MONGO_URI);

  const products = [
    // Shoes
    {
      name: "Nike Air Max",
      description: "Comfortable running shoes",
      price: 120,
      category: "Shoes",
      image: "https://res.cloudinary.com/dczb80p41/image/upload/v1746986721/cld-sample-5.jpg"
    },
    {
      name: "Adidas Sneakers",
      description: "Stylish sneakers for everyday use",
      price: 100,
      category: "Shoes",
      image: "https://res.cloudinary.com/dczb80p41/image/upload/v1746986718/samples/shoe.jpg"
    },
    {
      name: "Puma Running Shoes",
      description: "Lightweight and durable running shoes",
      price: 90,
      category: "Shoes",
      image: "https://res.cloudinary.com/dczb80p41/image/upload/v1746986712/samples/ecommerce/shoes.png"
    },

    // T-Shirts
    {
      name: "Basic White T-Shirt",
      description: "Soft cotton white T-shirt, perfect for everyday wear",
      price: 25,
      category: "T-Shirts",
      image: "https://res.cloudinary.com/dczb80p41/image/upload/v1746986718/samples/smile.jpg"
    },
    {
      name: "Graphic Tee",
      description: "Cool graphic print T-shirt to stand out",
      price: 30,
      category: "T-Shirts",
      image: "https://res.cloudinary.com/dczb80p41/image/upload/v1746986718/samples/look-up.jpg"
    },
    {
      name: "Long Sleeve Tee",
      description: "Comfortable long sleeve shirt for cooler days",
      price: 35,
      category: "T-Shirts",
      image: "https://res.cloudinary.com/dczb80p41/image/upload/v1746986712/samples/people/smiling-man.jpg"
    },

    // Accessories
    {
      name: "Baseball Cap",
      description: "Classic baseball cap with adjustable strap",
      price: 15,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Leather Watch",
      description: "Compact leather Watch with multiple card slots",
      price: 45,
      category: "Accessories",
      image: "https://res.cloudinary.com/dczb80p41/image/upload/v1746986711/samples/ecommerce/analog-classic.jpg"
    },
    {
      name: "Sunglasses",
      description: "Stylish sunglasses with UV protection",
      price: 60,
      category: "Accessories",
      image: "https://res.cloudinary.com/dczb80p41/image/upload/v1746986719/samples/man-portrait.jpg"
    }
  ];

  // Clear existing products
  await Product.deleteMany({});

  // Insert sample products
  await Product.insertMany(products);

  console.log("✅ Sample products seeded!");
  mongoose.disconnect();
}

seedProducts().catch(console.error);
