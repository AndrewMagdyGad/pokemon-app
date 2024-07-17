import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/posts.slice";
import usersSlice from "../features/users/users.slice";
import commentsSlice from "../features/comments/comments.slice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersSlice,
        comments: commentsSlice,
    },
});
