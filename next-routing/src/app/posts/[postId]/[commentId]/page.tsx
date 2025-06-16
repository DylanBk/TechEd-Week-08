type Props = {
    params: {
        postId: number,
        commentId: number,
    }
};

const Comment = async ({params}: Props) => {
    const commentData = await params;
    console.log(commentData)

    return (
        <>
            <h2 className="mt-44 text-3xl text-center">This is the page for comment {commentData.commentId}</h2>
            <p className="mt-8 text-center">Post Id: {commentData.postId}</p>
        </>
    );
};

export default Comment;