import { PRODUCTS_URL } from '../constants'; // Adjust path as needed
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => PRODUCTS_URL,
            keepUnusedDataFor: 5,
        }),
    }),
    overrideExisting: false, // Ensure it does not override existing endpoints
});

// Export the hook
export const { useGetProductsQuery } = productApiSlice;