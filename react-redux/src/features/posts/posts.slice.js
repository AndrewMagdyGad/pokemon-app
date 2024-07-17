import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "This is the first post",
        content: "This is the content of this first post",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
    {
        id: 2,
        title: "This is the second post",
        content: "This is the content of this second post",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push({ ...action.payload, id: nanoid() });
        },
        postDeleted: (state, action) => {
            const id = action.payload;
            state = state.filter((post) => post.id !== id);
            return state;
        },
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find((post) => post.id === postId);

            if (existingPost) {
                existingPost.reactions[reaction] += 1;
            }
        },
    },
});

export const { postAdded, postDeleted, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
