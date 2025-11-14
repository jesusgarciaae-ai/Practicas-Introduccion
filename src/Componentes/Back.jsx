import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Back = (props) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(props.to);
  };

  return (
    <button className="btn" onClick={handleBack}>
      <IoMdArrowRoundBack />
    </button>
  );
};

export default Back;
