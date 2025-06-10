import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="mb-2">
      <Comment data={comment} />
      {comment.replies?.length > 0 && (
        <div className="pl-6 border-l-2 border-gray-300 ml-4">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

export default CommentList;
