// 2.  Questions:a, b and c are based on the following two arrays:users and products
// 	```js
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '17/05/2019 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '17/05/2019 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '17/05/2019 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '17/05/2019 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '17/05/2019 10:00 AM',
        isLoggedIn: false,
    },
];

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
// 	```

// 	a. Imagine you are getting the above users collection from a MongoDB database.

// 		a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(details) {
    return users.find((user) => user.email === details.email)
        ? 'email already exist'
        : users.find((user) => user.username === details.username)
        ? 'username already exist'
        : 'user added';
}

console.log(
    signUp({ username: 'Ale', email: 'ale@alex.com', password: '123123' })
);
// 		b. Create a function called ***signIn*** which allows user to sign in to the application
function signIn(details) {
    return users.find(
        (user) =>
            user.email === details.email && user.password === details.password
    )
        ? 'login success'
        : users.find(
              (user) =>
                  user.username === details.username &&
                  user.password === details.password
          )
        ? 'login success'
        : 'wrong details';
}

console.log(signIn({ email: 'alex@alex.com', password: '123123' }));
console.log(signIn({ username: 'Alex', password: '123123' }));
// 	b. The products array has  three elements and each of them has six properties.

// 		a. Create a function called ***rateProduct*** which rates the product
function rateProduct(id, userIdRatingObj) {
    let product = products.find((it) => it._id === id);
    if (!product) {
        return 'incorrect id';
    }
    let productRating = product.ratings.find(
        (it) => it.userId === userIdRatingObj.userId
    );
    if (productRating) {
        productRating.rate = userIdRatingObj.rate;
        return product;
    } else {
        product.ratings.push(userIdRatingObj);
        return product;
    }
    // return products;
}
console.log(rateProduct('hedfcg', { userId: 'fg12c', rate: 10 }));
// 		b. Create a function called ***averageRating*** which calculate the average rating of a product
function avgRatingProduct(id) {
    let product = products.find((it) => it._id === id);
    if (!product) {
        return 'incorrect id';
    }
    let sum = 0;
    product.ratings.forEach((it) => (sum += it.rate));
    return sum / product.ratings.length;
}
console.log(avgRatingProduct('hedfcg'));
// 	c. Create a function called ***likeProduct***. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(id, userId) {
    let product = products.find((it) => it._id === id);
    if (!product) {
        return 'incorrect id';
    }
    product.likes.includes(userId)
        ? product.likes.pop(userId)
        : product.likes.push(userId);
    return product;

    // return products;
}
console.log(likeProduct('hedfcg', 'fg12cy'));
