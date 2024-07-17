import { useState } from "react";
import { useDispatch } from "react-redux";
import { commentAdded } from "./comments.slice";
import "./styles.css";

function AddCommentForm({ postId }) {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSave = () => {
        if (text.length > 0) {
            dispatch(commentAdded({ text, postId }));
        }
    };

    return (
        <form className="container">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add your comment here"
            ></textarea>
            <button type="button" onClick={handleSave}>
                Add Comment
            </button>
        </form>
    );
}

export default AddCommentForm;
