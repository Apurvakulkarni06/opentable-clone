"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import React, { createContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  email: string;
}

interface State {
  loading: boolean;
  data: User | null;
  error: string | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});
const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    data: null,
    error: null,
  });

  const fetchUser = async()=>{
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });


    const jwtToken = getCookie("jwt");
    if(!jwtToken){
      return setAuthState({
        data: null,
        error: null,
        loading: false,
      });
    }
    try {
        const response = await axios.get("/api/auth/me", {
          headers:{
            Authorization: `Bearer ${jwtToken}`
          }
        })

        axios.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
        setAuthState({
          data: response.data,
          error: null,
          loading: false,
        });

      
    } catch (error:any) {
      return setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  }

  useEffect(()=>{
    // to update the state and persist the auth state after refershing page
    fetchUser();
  }, [])
  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
