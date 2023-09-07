//Question3_The products array has three elements and each of them has six properties. a. Create
//a function called rateProduct which rates the product b. Create a function called averageRating
//which calculate the average rating of a product.
   const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ];
  
  function rateProduct(productId, userId, rating) {
    const product = products.find((p) => p._id === productId);
    if (!product) {
      console.log('Product not found');
      return;
    }
  
    product.ratings.push({ userId, rate: rating });
    console.log(`Rated ${product.name} with ${rating} stars.`);
  }
  
  function averageRating(productId) {
    const product = products.find((p) => p._id === productId);
    if (!product || product.ratings.length === 0) {
      console.log('Product not found or no ratings available.');
      return 0;
    }
  
    const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
    const average = totalRating / product.ratings.length;
    return average;
  }
  rateProduct('eedfcf', 'user123', 4.0);
  console.log(`Average rating mobile phone: ${averageRating('eedfcf')}`);
  










































































