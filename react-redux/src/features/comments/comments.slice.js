import { createSlice, nanoid } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        commentAdded: (state, action) => {
            state.push({ ...action.payload, id: nanoid() });
        },
        commentUpdated: (state, action) => {
            const id = action.payload.id;
            const updatedText = action.payload.text;

            const matchedComment = state.find((comment) => comment.id === id);

            if (matchedComment) {
                matchedComment.text = updatedText;
            }
        },
        commentDeleted: (state, action) => {
            const id = action.payload.id;

            const newComments = state.filter((comment) => comment.id !== id);

            return newComments;
        },
    },
});

export const { commentAdded, commentUpdated, commentDeleted } =
    commentsSlice.actions;

export default commentsSlice.reducer;
