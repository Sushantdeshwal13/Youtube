const Comment = ({ data = {} }) => {
  const { name = "Anonymous", text = "No comment" } = data;

  return (
    <div className="flex items-start gap-3 py-2">
      <img
        className="w-10 h-10 rounded-full"
        src="https://www.gravatar.com/avatar?d=mp"
        alt="user"
      />
      <div>
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
