import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Form";

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {/*  form to be created */}
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

function CreateAccount() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return <div>CreateAccount</div>;
}

export default CreateAccount;

//https://levelup.gitconnected.com/create-a-signup-page-with-react-and-material-ui-9b203d18cf3f
