/* ---Blog Post--- */

import { PostHeader, PostContent, PostFooter } from "./post_info";
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

export default BlogPost;
