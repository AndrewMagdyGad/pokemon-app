import { useDispatch, useSelector } from "react-redux";
import AddCommentForm from "../comments/AddCommentForm";
import CommentsList from "../comments/CommentsList";
import PostAuthor from "./PostAuthor";
import { postDeleted } from "./posts.slice";
import ReactionButtons from "./ReactionButtons";

function PostsList() {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const handleDeletePost = (id) => {
        dispatch(postDeleted(id));
    };

    return (
        <section>
            <h2>Posts</h2>
            {posts.map((post) => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <div className="post-content">
                        <p>{post.content}</p>
                        <button onClick={() => handleDeletePost(post.id)}>
                            X
                        </button>
                    </div>
                    <PostAuthor post={post} />
                    <ReactionButtons post={post} />
                    <AddCommentForm postId={post.id} />
                    <CommentsList postId={post.id} />
                </article>
            ))}
        </section>
    );
}

export default PostsList;
