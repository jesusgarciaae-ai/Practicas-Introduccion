import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Ej23Cod = () => {
  const postInfo = `
    export const PostHeader = (props) => {
  return (
    <div className="">
      <p>{props.titulo}</p>
    </div>
  );
};

export const PostContent = (props) => {
  return (
    <div>
      <p>{props.info}</p>
    </div>
  );
};

export const PostFooter = (props) => {
  return (
    <div>
      <p>{props.footer}</p>
    </div>
  );
};`;

  const blogPost = `import { PostHeader, PostContent, PostFooter } from "./post_info";
import CommentSection from "./Commet_section";

const BlogPost = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2>
            <PostHeader titulo={props.titulo} />
          </h2>

          <PostContent info={props.info} />
          <div className="card-footer bg-secondary">
            <PostFooter footer={props.footer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;`;

  const blog = `const Blog = () => {
  return (
    <div className="border border-bottom-0 border-secondary p-3 rounded-top">
      <p className=" fs-1">Blog</p>
      <div className="row row-cols-md-2 g-4">
        <div className="col">
          <BlogPost
            titulo="Blog post 1"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sinLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              
            footer="post footer"
          />
        </div>

        <div className="col h-100 border">
          <div className="row row-cols-md-1 g-2">
            <div className="col">
              <BlogPost
                titulo="Blog post 2"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sinLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                footer="post footer"
              />
            </div>
            <div className="col">
              <BlogPost
                titulo="Blog post 3 "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                footer="post footer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;`;

  const comment = `
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
};`;

  const commentSection = `
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
};`;

  const info = `
const Info = () => {
  return (
    <div
      className="card text-center rounded-pill text-bg-dark fs-4"
      style={{ width: "4rem", position: "fixed", right: "20px", top: "50%" }}
    >
      <div className="card-body">
        <a
          href="https://github.com/jesusgarciaae-ai"
          className=" link-secondary link-opacity-25-hover"
        >
          <i className="bi bi-github"></i>
        </a>
        <br />
        <a className=" link-secondary link-opacity-25-hover">
          <i className="bi bi-instagram"></i>
        </a>
        <br />
        <a className=" link-secondary link-opacity-25-hover">
          <i className="bi bi-discord"></i>
        </a>
        <br />
        <a className=" link-secondary link-opacity-25-hover">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};`;

  return (
    <div className="row row-cols-md-2">
      <div className="col">
        <p className="fs-3 fw-bold">Post Info</p>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {postInfo}
        </SyntaxHighlighter>
      </div>
      <div className="col">
        <p className="fs-3 fw-bold">Blog post</p>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {blogPost}
        </SyntaxHighlighter>
      </div>
      <div className="col">
        <p className="fs-3 fw-bold">Blog</p>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {blog}
        </SyntaxHighlighter>
      </div>
      <div className="col">
        <p className="fs-3 fw-bold">Comment</p>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {comment}
        </SyntaxHighlighter>
      </div>
      <div className="col">
        <p className="fs-3 fw-bold">Comment Section</p>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {commentSection}
        </SyntaxHighlighter>
      </div>
      <div className="col">
        <p className="fs-3 fw-bold">Author Info</p>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {info}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Ej23Cod;
