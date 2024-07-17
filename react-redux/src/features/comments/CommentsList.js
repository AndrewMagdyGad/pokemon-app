import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";

function CommentsList({ postId }) {
    const comments = useSelector((state) =>
        state.comments.filter((comment) => comment.postId === postId)
    );

    return comments.map((comment) => <CommentItem comment={comment} />);
}

export default CommentsList;
