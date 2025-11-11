import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button className="btn" onClick={handleBack}>
      <IoMdArrowRoundBack />
    </button>
  );
};

export default Back;
