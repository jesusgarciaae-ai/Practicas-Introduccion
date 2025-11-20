const Comment = (props) => {
  return (
    <div className="container mb-3 rounded p-3 bg-body-secondary">
      <div className="d-flex align-items-center gap-3">
        <div
          className="rounded-circle bg-primary-subtle"
          style={{ width: "50px", height: "50px" }}
        ></div>

        <p className="m-0 fw-bold">{props.name}</p>
      </div>

      <hr />

      <p className="m-0">{props.text}</p>
    </div>
  );
};

export default Comment;
