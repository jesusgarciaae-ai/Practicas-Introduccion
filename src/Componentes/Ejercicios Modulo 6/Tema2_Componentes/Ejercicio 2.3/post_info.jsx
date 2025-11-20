/* ---Post info--- */

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
};
