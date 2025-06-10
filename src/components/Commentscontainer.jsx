import CommentList from "./CommentList";

const Commentscontainer = ({ comments }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <CommentList comments={comments} />
    </div>
  );
};

export default Commentscontainer;
