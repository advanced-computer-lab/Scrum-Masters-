import { React, useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

const Password = () => {
    const [edit, setEdit] = useState(false);
     const [currentPassword, setCurrentPassword] = useState();
     const [loading, setLoading] = useState(true);
     const [values, setValues] = useState();
     const [success, setSuccess] = useState(false);
     const [error, setError] = useState(false);
    useEffect(() => {
      axios
        .get(`http://localhost:8081/user/profile/61aa2eb9d3eee0b9e4921105`)
        .then((result) => {
          console.log(result);
          setCurrentPassword(result.data.password);
          setLoading(false);
        })
        .catch((err) => console.log(err));
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 5000);
    }, [edit]);
  return <div></div>;
};

export default Password;
