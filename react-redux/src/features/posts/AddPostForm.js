import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./posts.slice";
import { fetchUsers } from "../users/users.slice";

function AddPostForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [authorId, setAuthorId] = useState("");
    const users = useSelector((state) => state.users);

    const handleSavePost = () => {
        if (
            title.length > 0 &&
            content.length > 0 &&
            String(authorId).length > 0
        ) {
            dispatch(
                postAdded({
                    title,
                    content,
                    authorName: users.find((user) => user.id === +authorId)
                        .name,
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    },
                })
            );
        }
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                >
                    <option value=""></option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>

                <label>Content: </label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="button" onClick={handleSavePost}>
                    Save Post
                </button>
            </form>
        </section>
    );
}

export default AddPostForm;
