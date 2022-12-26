import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => {
  return (props) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return (
      <WrappedComponent {...props} router={{ location, params, navigate }} />
    );
  };
};

export default withRouter;
