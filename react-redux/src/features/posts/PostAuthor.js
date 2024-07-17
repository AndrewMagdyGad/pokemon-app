function PostAuthor({ post }) {
    return <span>by {post.authorName || "Anonymous"}</span>;
}

export default PostAuthor;
