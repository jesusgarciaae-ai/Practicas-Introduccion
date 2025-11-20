import Comment from "./Comment";

const CommentSection = (props) => {
  return (
    <div className="border border-top-0 border-secondary p-3 rounded-bottom">
      <p className="fs-2">Comment Section</p>
      <hr />
      <Comment
        name="Jesus"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Comment name="Natalia" text="Comentario" />
      <Comment name="Ethel" text="Comentario" />
      <Comment name="Victoria" text="Comentario" />
    </div>
  );
};

export default CommentSection;
