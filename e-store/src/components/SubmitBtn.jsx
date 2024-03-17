import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmiiting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmiiting}
    >
      {isSubmiiting ? (
        <>
          <span className="loading loading-spinner">sending...</span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
