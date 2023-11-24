import { fakeDb } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => fakeDb.products,
        SingleProduct: (parent, args, context) => {
            // console.log(parent, args, context);
            const result = fakeDb.products.find((prod) => prod.id === args.productId);
            return result;
        },
        categories: () => fakeDb.categories,
        category: (parent, args, context) => {
            const result = fakeDb.categories.find((cat) => cat.id === args.categoryId);
            // console.log(args);
            return result;
        },
    },
    // New Query in terms of relation
    Product: {
        // without destructureing
        category: (parent, args, context) => {
            const result = fakeDb.categories.find((cat) => cat.id === parent.categoryId);
            // console.log(parent);
            return result;
        },
        //  destructureing
        reviews: ({ id }, args, context) => {
            const result = fakeDb.reviews.filter((review) => review.productId === id);
            // console.log(parent, args, context);
            return result;
        },
    },
    Category: {
        products: ({ id }, args, context) => {
            return fakeDb.products.filter((product) => product.categoryId === id);
            // console.log(parent, args, context);
        },
    },
};
