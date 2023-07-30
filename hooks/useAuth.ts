import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );

  const signin = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post("/api/auth/signin", {
        email,
        password,
      });
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });

      handleClose();
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.errorMessage);
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const signup = async ({
    firstName,
    lastName,
    email,
    password,
    city,
    phoneNumber,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    city: string;
    phoneNumber: string;
  }, handleClose: () => void) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
        city,
        phoneNumber,
      });

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      handleClose();
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.errorMessage);
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const signout =() =>{
    deleteCookie("jwt");
    
    setAuthState({
      data: null,
      error: null,
      loading: false,
    });
  }

  return {
    signin,
    signup,
    signout
  };
};

export default useAuth;