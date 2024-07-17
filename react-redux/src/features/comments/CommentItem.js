import { useState } from "react";
import { useDispatch } from "react-redux";
import { commentDeleted, commentUpdated } from "./comments.slice";

function CommentItem({ comment }) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(comment.text);
    const dispatch = useDispatch();

    const handleEditComment = () => {
        dispatch(commentUpdated({ id: comment.id, text }));
        setIsEditing(false);
    };

    const handleDeleteComment = () => {
        dispatch(commentDeleted({ id: comment.id }));
    };

    return isEditing ? (
        <>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button onClick={() => setIsEditing(false)}>✖️</button>
            <button onClick={handleEditComment}>✅</button>
        </>
    ) : (
        <>
            <div onDoubleClick={() => setIsEditing(!isEditing)}>
                {comment.text}
            </div>
            <button onClick={handleDeleteComment}>✖️</button>
        </>
    );
}

export default CommentItem;
