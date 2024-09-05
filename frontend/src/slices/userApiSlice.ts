import { USERS_URL } from '../constants'; // Adjust path as needed
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
    }),
});

// Export the hook
export const { useLoginMutation } = usersApiSlice;