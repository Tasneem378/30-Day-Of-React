//Question4_Create a function called likeProduct. This function will helps to like to
//the product if it is not liked and remove like if it was liked.
function likeProduct(products, productId, userId) {
  const product = products.find((p) => p._id === productId);
  if (!product) {
    console.log("Product not found");
    return;
  }
  const userIndex = product.likes.indexOf(userId);
  if (userIndex === -1) {    
    product.likes.push(userId);
    console.log(`Liked the product '${product.name}'`);
  } else {   
    product.likes.splice(userIndex, 1);
    console.log(`Removed like from the product '${product.name}'`);
  }
}
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
likeProduct(products, "aegfal", "fg12cy"); // Remove like from the Laptop
likeProduct(products, "eedfcf", "zwf8md"); // Like the mobile phone
