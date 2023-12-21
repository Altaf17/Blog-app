import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.authStatus);

  useEffect(() => {
    let authValue = authStatus === true ? true : false;
    if (authValue) {
      navigate("/login");
    } else if (authValue) {
      navigate("/");
    }
    setLoading(false);
  }, [authStatus, navigate, authentication]);
  return loading ? <h1>...Loading</h1> : <>{children}</>;
};

export default Protected;
