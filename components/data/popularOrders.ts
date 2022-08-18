/* eslint-disable prettier/prettier */
const popularData = [
    {
      id: '1',
      title: 'Jollof Rice',
      description: ' the ingredients used in msking the food and a little decriptions of the food',
      image:
        // 'https://i.pinimg.com/236x/d3/fc/3b/d3fc3b156de96b5bee01399d672fb554.jpg',
        require('../images/food/Jollof.jpg'),
      images: [
        require('../images/food/Jollof.jpg'),
        require('../images/food/jolof.jpg'),
        // require('../images/food/Jollof.jpg'),
          ],
      options: [
              'Fish',
              'Chicken',
              'Beef',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
      id: '2',
      title: 'Beans & Bread',
      description: ' the ingredients used in msking the food and a little decriptions of the food',
      image:
        // 'https://i.pinimg.com/236x/f5/1f/4f/f51f4f2fecd052cab34cd30a2e0d02b6.jpg',
        require('../images/food/beansandbread.jpg'),
      images: [
        require('../images/food/Jollof.jpg'),
        require('../images/food/jolof.jpg'),
        ],
    options:[],
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.06,
    },
    {
      id: '3',
      title: 'Moi-Moi',
      description: ' the ingredients used in msking the food and a little decriptions of the food',
      image:
        // 'https://i.pinimg.com/236x/a2/42/86/a242860e0239962c64aa2bb25ac78e56.jpg',
        require('../images/food/moimoi1.jpg'),
      images: [
        require('../images/food/moimoi1.jpg'),
        require('../images/food/moimoi2.webp'),
        require('../images/food/moi3.webp'),
        ],
      options: [
              'Fish',
              'Egg',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
  
    {
      id: '4',
      title: 'Amala',
      description: ' the ingredients used in msking the food and a little decriptions of the food',
      // image:
        // 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
        // require('../images/food/amala2'),
      // images: [
      //   // require('../images/food/amala'),
      //   // require('../images/food/amala2'),
      //   // require('../images/food/amala'),
      //   ],
      soup: [
      'Egusi Soup',
      'Okra Soup',
      'Ewedu',
      ],
      options: [
        'Fish',
        'Chicken',
        'Beef',
      ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
        id: '5',
        title: 'Barbecue',
        description: ' 1 whole chicken or fish, into halves rice vinegar, barbeque sauce, garlic, crushed salt, ground black pepper, paprika, onion powder, cayenne pepper, barbeque sauce',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/barbb.jpg'),
          images: [
            require('../images/food/barb.jpg'),
            require('../images/food/barbb.jpg'),
          ],
        // options: [
        //         'Plain Rice with Fish',
        //         'With Boiled Egg',
        //         'With Chicken',
        //       ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
        id: '6',
        title: 'Sharwama',
        description: ' the ingredients used in msking the food and a little decriptions of the food',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/sharwama.jpg'),
          images: [
            require('../images/food/sharwama.jpg'),
            require('../images/food/sharw.jpg'),
            require('../images/food/sha.jpg'),
          ],
        options: [
                'Beef',
                'Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
 
    {
        id: '7',
        title: 'Hamburger',
        description: ' the ingredients used in msking the food and a little decriptions of the food',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/hams.jpg'),
          images: [
            require('../images/food/hams.jpg'),
            require('../images/food/haaa.jpg'),
            require('../images/food/the-ultimate-hamburger.jpg'),
            ],
          // options: [
          //         'Plain Rice with Fish',
          //         'With Boiled Egg',
          //         'With Chicken',
          //       ],
          avgRating: 4.8,
          ratings: 2989,
          price: 99.98,
          oldPrice: 120.0,
      },
    {
        id: '8',
        title: 'Pizza',
        description: ' All purpose flour, tomato ketchup, tomato, Onion, chilli flakes, baking powder, sugar, processed cheese mushroom, capsicum (green pepper), oregan, mozzarella, yeast water',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/pizza.jpg'),
          images: [
            'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
            'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          ],
        options: [
                'Pineaple',
                'Jelapeno',
                // 'With Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
        id: '9',
        title: ' Plain Rice',
        description: '  long-grain white, Water  salt',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/rice.jpg'),
          images: [
            require('../images/food/rice.jpg'),
            require('../images/food/rice.jpg'),
            require('../images/food/rice.jpg'),
          ],
        options: [
                'Fish',
                ' Boiled Egg',
                ' Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
      id: '10',
      title: 'Cake',
      description: 'all purpose flour egg baking soda teaspoon vanilla essence powdered sugar butter milk',
      image:
        // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        require('../images/food/cake.jpg'),
        
        images: [
          require('../images/food/cake.jpg'),
          require('../images/food/cake.jpg'),
          require('../images/food/cake.jpg'),
        ],
      options: [
              'Strawberry',
              ' Vanilla',
              ' Chocolate',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.0,
    },

  {
    id: '11',
    title: 'Chicken',
    description: ' 3 cup all purpose flour 4 egg teaspoon baking soda teaspoon vanilla essence powdered sugar butter milk',
    image:
      // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
      require('../images/food/chickenn.jpg'),
    images: [
        require('../images/food/chickenn.jpg'),
        require('../images/food/chicken.jpg'),
        // require('../images/food/cake.jpg'),
      ],
    // options: [
    //         'Strawberry',
    //         ' Vanilla',
    //         ' Chocolate',
    //       ],
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.0,
  },

  ];
export default popularData;
