// src/data/products.js
import banerImage from "../assets/images/products/banerImage.png";
import banerImage1 from "../assets/images/products/baner_img1.jpeg";
import banerImage2 from "../assets/images/products/banerImage2.png";

export const products = [
  {
    id: 1,
    title: "Interior Design Book",
    description: "A comprehensive guide to modern interior design ideas.",
    price: 25.0,
    oldPrice: 30.0,
    discount: 17,
    category: "Book",
    rating: 4.7,
    inStock: true,
    images: [banerImage],
    sku: "BK-001",
    tags: ["interior", "design", "book"],
    information: {
      weight: "0.6 kg",
      dimensions: "21 x 14 x 2 cm",
      pages: 320,
      language: "English",
      publisher: "Modern Press"
    },
    reviews: [
      { id: 1, name: "Amit", rating: 5, comment: "Great reference book!", date: "2024-04-12" },
      { id: 2, name: "Nina", rating: 4, comment: "Useful examples and photos.", date: "2024-05-02" }
    ]
  },
  {
    id: 2,
    title: "Modern Architecture Book",
    description: "Exploring the trends in contemporary architecture.",
    price: 30.0,
    oldPrice: 36.0,
    discount: 17,
    category: "Book",
    rating: 4.8,
    inStock: true,
    images: [banerImage1],
    sku: "BK-002",
    tags: ["architecture", "modern"],
    information: {
      weight: "0.8 kg",
      dimensions: "24 x 16 x 3 cm",
      pages: 400,
      language: "English",
      publisher: "Architext"
    },
    reviews: [
      { id: 1, name: "Sahil", rating: 5, comment: "Inspiring layouts and case studies.", date: "2024-03-10" }
    ]
  },
  {
    id: 3,
    title: "Stylish Round Chair",
    description: "Minimalistic round chair perfect for modern home interiors.",
    price: 45.0,
    oldPrice: 50.0,
    discount: 10,
    category: "Accessories",
    rating: 4.5,
    inStock: true,
    images: [banerImage2],
    colors: ["black", "blue"],
    sizes: ["M", "L"],
    sku: "AC-103",
    tags: ["chair", "living", "minimal"],
    information: {
      weight: "8 kg",
      dimensions: "70 x 70 x 85 cm",
      material: "Wood + Fabric",
      assembly: "Partial assembly required"
    },
    reviews: [
      { id: 1, name: "Reena", rating: 5, comment: "Comfortable and stylish.", date: "2024-06-15" },
      { id: 2, name: "Vikram", rating: 4, comment: "Good value for money.", date: "2024-07-02" }
    ]
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    description: "Comfortable chair designed for office and home workspaces.",
    price: 60.0,
    oldPrice: 70.0,
    discount: 14,
    category: "Office",
    rating: 4.6,
    inStock: true,
    images: [banerImage2],
    colors: ["black", "grey"],
    sizes: ["M", "L"],
    sku: "OF-210",
    tags: ["office", "ergonomic"],
    information: {
      weight: "12 kg",
      dimensions: "68 x 70 x 110 cm",
      material: "PU Leather + Metal",
      tilt: "Yes"
    },
    reviews: [
      { id: 1, name: "Karan", rating: 5, comment: "Back support is excellent.", date: "2024-02-20" }
    ]
  },
  {
    id: 5,
    title: "Luxury Sofa Set",
    description: "Modern and comfortable sofa set for living rooms.",
    price: 200.0,
    oldPrice: 250.0,
    discount: 20,
    category: "Furniture",
    rating: 4.9,
    inStock: true,
    images: [banerImage1],
    colors: ["brown", "blue"],
    sizes: ["L", "XL"],
    sku: "FS-500",
    tags: ["sofa", "living room", "luxury"],
    information: {
      weight: "65 kg",
      dimensions: "230 x 90 x 85 cm",
      material: "Fabric upholstery",
      seats: 3
    },
    reviews: [
      { id: 1, name: "Leena", rating: 5, comment: "Superb comfort and finish.", date: "2024-01-11" }
    ]
  },
  {
    id: 6,
    title: "Comfort Swing Chair",
    description: "Soft cushioned swing chair perfect for relaxation.",
    price: 80.0,
    oldPrice: 100.0,
    discount: 20,
    category: "Lifestyle",
    rating: 4.4,
    inStock: true,
    images: [banerImage],
    colors: ["orange", "red"],
    sizes: ["M", "L"],
    sku: "LS-320",
    tags: ["swing", "outdoor"],
    information: {
      weight: "15 kg",
      dimensions: "100 x 80 x 160 cm",
      material: "Rattan + Cushion",
      outdoor: "Yes"
    },
    reviews: [
      { id: 1, name: "Manu", rating: 4, comment: "Very relaxing.", date: "2024-05-28" }
    ]
  },
  {
    id: 7,
    title: "Fashionable Jacket",
    description: "Trendy jacket for modern casual wear.",
    price: 55.0,
    oldPrice: 65.0,
    discount: 15,
    category: "Clothing",
    rating: 4.3,
    inStock: true,
    images: [banerImage2],
    colors: ["black", "red"],
    sizes: ["M", "L", "XL"],
    sku: "CL-720",
    tags: ["jacket", "fashion"],
    information: {
      weight: "0.9 kg",
      dimensions: "Varies by size",
      material: "Poly-cotton"
    },
    reviews: [
      { id: 1, name: "Riya", rating: 4, comment: "Looks great and warm.", date: "2024-03-30" }
    ]
  },
  {
    id: 8,
    title: "Modern Coffee Table",
    description: "Stylish coffee table for modern living rooms.",
    price: 120.0,
    oldPrice: 150.0,
    discount: 20,
    category: "Furniture",
    rating: 4.5,
    inStock: true,
    images: [banerImage1],
    colors: ["brown", "black"],
    sizes: ["L", "XL"],
    sku: "FT-410",
    tags: ["table", "living room"],
    information: {
      weight: "20 kg",
      dimensions: "120 x 60 x 45 cm",
      material: "Wood + Glass"
    },
    reviews: [
      { id: 1, name: "Gaurav", rating: 5, comment: "Solid build quality.", date: "2024-06-01" }
    ]
  },
  {
    id: 9,
    title: "Home Decor Accessories",
    description: "Set of decorative items for a modern home.",
    price: 35.0,
    oldPrice: 40.0,
    discount: 13,
    category: "Accessories",
    rating: 4.2,
    inStock: true,
    images: [banerImage2],
    colors: ["gold", "silver"],
    sizes: ["M", "L"],
    sku: "AC-209",
    tags: ["decor", "accessories"],
    information: {
      weight: "1.2 kg",
      dimensions: "Assorted",
      material: "Ceramic/Metal"
    },
    reviews: [
      { id: 1, name: "Priya", rating: 4, comment: "Nice little pieces.", date: "2024-02-14" }
    ]
  },
  {
    id: 10,
    title: "Minimalist Wardrobe",
    description: "Sleek wardrobe design for modern bedrooms.",
    price: 250.0,
    oldPrice: 300.0,
    discount: 17,
    category: "Furniture",
    rating: 4.8,
    inStock: true,
    images: [banerImage],
    colors: ["white", "black"],
    sizes: ["L", "XL"],
    sku: "FT-900",
    tags: ["wardrobe", "storage"],
    information: {
      weight: "120 kg",
      dimensions: "180 x 60 x 220 cm",
      material: "Engineered wood"
    },
    reviews: [
      { id: 1, name: "Asha", rating: 5, comment: "Looks premium and roomy.", date: "2024-04-05" }
    ]
  },
  {
    id: 11,
    title: "Lifestyle Magazine",
    description: "Trendy magazine covering home, fashion, and wellness.",
    price: 15.0,
    oldPrice: 18.0,
    discount: 17,
    category: "Book",
    rating: 4.1,
    inStock: true,
    images: [banerImage2],
    sku: "MG-011",
    tags: ["magazine", "lifestyle"],
    information: {
      weight: "0.3 kg",
      dimensions: "28 x 21 cm",
      pages: 96
    },
    reviews: [
      { id: 1, name: "Asha", rating: 5, comment: "Looks premium and roomy.", date: "2024-04-05" }
    ]
  },
  {
    id: 12,
    title: "Office Desk Organizer",
    description: "Keep your desk tidy with this modern organizer.",
    price: 25.0,
    oldPrice: 30.0,
    discount: 17,
    category: "Office",
    rating: 4.3,
    inStock: true,
    images: [banerImage],
    colors: ["black", "brown"],
    sizes: ["M"],
    sku: "OF-122",
    tags: ["organizer", "desk"],
    information: {
      weight: "0.7 kg",
      dimensions: "30 x 20 x 10 cm",
      material: "Wood/PU"
    },
    reviews: [{ id: 1, name: "Meera", rating: 4, comment: "Very handy.", date: "2024-05-09" }]
  },
  {
    id: 13,
    title: "Casual T-Shirt",
    description: "Comfortable cotton t-shirt for daily wear.",
    price: 20.0,
    oldPrice: 25.0,
    discount: 20,
    category: "Clothing",
    rating: 4.2,
    inStock: true,
    images: [banerImage1],
    colors: ["white", "blue", "black"],
    sizes: ["S", "M", "L"],
    sku: "CL-330",
    tags: ["tshirt", "casual"],
    information: {
      weight: "0.25 kg",
      dimensions: "Varies by size",
      material: "100% Cotton"
    },
    reviews: [{ id: 1, name: "Rahul", rating: 4, comment: "Good fit.", date: "2024-06-10" }]
  },
  {
    id: 14,
    title: "Decorative Wall Clock",
    description: "Modern wall clock to enhance home interiors.",
    price: 40.0,
    oldPrice: 50.0,
    discount: 20,
    category: "Accessories",
    rating: 4.5,
    inStock: true,
    images: [banerImage2],
    colors: ["black", "white"],
    sizes: ["M"],
    sku: "AC-444",
    tags: ["clock", "decor"],
    information: {
      weight: "1.5 kg",
      dimensions: "40 x 40 x 6 cm",
      material: "Metal + Glass"
    },
    reviews: [{ id: 1, name: "Neha", rating: 5, comment: "Looks elegant.", date: "2024-03-21" }]
  },
  {
    id: 15,
    title: "Luxury Bed Frame",
    description: "Elegant and sturdy bed frame for comfortable sleep.",
    price: 300.0,
    oldPrice: 350.0,
    discount: 14,
    category: "Furniture",
    rating: 4.9,
    inStock: true,
    images: [banerImage1],
    colors: ["brown", "black"],
    sizes: ["L", "XL"],
    sku: "FT-777",
    tags: ["bed", "luxury"],
    information: {
      weight: "85 kg",
      dimensions: "200 x 180 x 120 cm",
      material: "Solid wood"
    },
    reviews: [{ id: 1, name: "Sunil", rating: 5, comment: "Very sturdy and beautiful.", date: "2024-02-02" }]
  },
  {
    id: 16,
    title: "Stylish Hoodie",
    description: "Cozy hoodie perfect for casual wear.",
    price: 45.0,
    oldPrice: 55.0,
    discount: 18,
    category: "Clothing",
    rating: 4.3,
    inStock: true,
    images: [banerImage],
    colors: ["grey", "black", "red"],
    sizes: ["M", "L", "XL"],
    sku: "CL-910",
    tags: ["hoodie", "casual"],
    information: {
      weight: "0.6 kg",
      dimensions: "Varies by size",
      material: "Fleece"
    },
    reviews: [{ id: 1, name: "Jaya", rating: 4, comment: "Warm and comfortable.", date: "2024-06-30" }]
  },
  {
    id: 17,
    title: "Yoga Swing Chair",
    description: "Relaxing swing chair for yoga and meditation.",
    price: 90.0,
    oldPrice: 110.0,
    discount: 18,
    category: "Lifestyle",
    rating: 4.6,
    inStock: true,
    images: [banerImage2],
    colors: ["purple", "orange"],
    sizes: ["M", "L"],
    sku: "LS-670",
    tags: ["yoga", "swing"],
    information: {
      weight: "10 kg",
      dimensions: "120 x 80 x 160 cm",
      material: "Canvas + Frame"
    },
    reviews: [{ id: 1, name: "Arun", rating: 5, comment: "Great for light exercises.", date: "2024-01-20" }]
  },
  {
    id: 18,
    title: "Fashion Sketchbook",
    description: "Sketchbook for fashion design and illustration.",
    price: 22.0,
    oldPrice: 28.0,
    discount: 21,
    category: "Book",
    rating: 4.4,
    inStock: true,
    images: [banerImage1],
    sku: "BK-118",
    tags: ["sketchbook", "design"],
    information: {
      weight: "0.4 kg",
      dimensions: "29 x 21 cm",
      pages: 120
    },
    reviews: [
       { id: 1, name: "Riya", rating: 4, comment: "Looks great and warm.", date: "2024-03-30" },
       { id: 1, name: "Arun", rating: 5, comment: "Great for light exercises.", date: "2024-01-20" }
    ]
  },
  {
    id: 19,
    title: "Modern Office Lamp",
    description: "LED desk lamp for modern workspaces.",
    price: 35.0,
    oldPrice: 45.0,
    discount: 22,
    category: "Office",
    rating: 4.5,
    inStock: true,
    images: [banerImage2],
    colors: ["black", "white"],
    sizes: ["M"],
    sku: "OF-303",
    tags: ["lamp", "desk"],
    information: {
      weight: "1.1 kg",
      dimensions: "40 x 15 x 15 cm",
      material: "Aluminum + LED"
    },
    reviews: [{ id: 1, name: "Tina", rating: 4, comment: "Bright light, low power.", date: "2024-05-04" }]
  },
  {
    id: 20,
    title: "Home Accent Rug",
    description: "Stylish rug to complement any living room.",
    price: 60.0,
    oldPrice: 75.0,
    discount: 20,
    category: "Homelife",
    rating: 4.7,
    inStock: true,
    images: [banerImage],
    colors: ["red", "blue", "beige"],
    sizes: ["L", "XL"],
    sku: "HM-210",
    tags: ["rug", "decor"],
    information: {
      weight: "6 kg",
      dimensions: "160 x 230 cm",
      material: "Wool blend"
    },
    reviews: [{ id: 1, name: "Kriti", rating: 5, comment: "Beautiful texture and color.", date: "2024-04-18" }]
  }
];

export default products;
