"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthInputs from "../AuthInputs/AuthInputs";
import useAuth from "../../../hooks/useAuth";
import { AuthenticationContext } from "../../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [disabled, setDisabled] = useState(true);
  const { signin, signup } = useAuth();
  const { loading, data, error } = useContext(AuthenticationContext);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    password: "",
  });

  useEffect(() => {
    if (isSignIn) {
      if (inputs.email && inputs.password) return setDisabled(false);
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.city &&
        inputs.phoneNumber &&
        inputs.password
      )
        return setDisabled(false);
    }

    return setDisabled(true);
  }, [inputs]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (isSignIn) {
      const user = signin({ email: inputs.email, password: inputs.password }, handleClose);
    }
    else{
      const user = signup(inputs, handleClose)
    }
  };

  const renderContent = (signinContent: string, signupContent: string) => {
    return isSignIn ? signinContent : signupContent;
  };
  return (
    <div>
      <button
        className={`${renderContent(
          "bg-blue-400 text-white",
          ""
        )} border p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {renderContent("Sign in", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="p-2 h-[500px]">
          {loading ? (
            <div className="py-24 flex justify-center">
              <CircularProgress />
            </div>
          ) : (
              <>
              {
                error && <Alert severity="error">{error}</Alert>
              }
              <div className="uppercase font-bold text-center pb-2 mb-2 border-b">
                <p className="text-sm">
                  {renderContent("Sign In", "Create Account")}
                </p>
              </div>
              <div className="m-auto">
                <h2 className="text-2xl font-light text-center">
                  {renderContent(
                    "Login into your account",
                    "Create your opentable account"
                  )}
                </h2>

                <AuthInputs
                  inputs={inputs}
                  handleChangeInput={handleChangeInput}
                  isSignIn={isSignIn}
                />

                <button
                  className="rounded w-full border bg-red-600 p-3 mb-9 text-sm text-white disabled:bg-gray-500"
                  disabled={disabled}
                  onClick={handleClick}
                >
                  {renderContent("Sign In", "Create Account")}
                </button>
              </div>
              </>
          )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
