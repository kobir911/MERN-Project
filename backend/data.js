import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'kobi',
      email: 'kobi@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'kobi1',
      email: 'kobi1@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image:
        'https://res.cloudinary.com/marn-chlothing-store/image/upload/v1673385240/vbdv5wwglvqspbzzdwtr.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image:
        'https://res.cloudinary.com/marn-chlothing-store/image/upload/v1673993239/p2_c9gzbi.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image:
        'https://res.cloudinary.com/marn-chlothing-store/image/upload/v1673993239/p4_juimsq.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image:
        'https://res.cloudinary.com/marn-chlothing-store/image/upload/v1673124313/x1kmxveixq1d0gdw03df.jpg',
      price: 65,
      countInStock: 0,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
