import React, { Fragment, useState } from "react";
import ReactDOM from 'react-dom';

import Button from "../Button/Button";
import Card from "../Card/Card";
import errorModalStyles from "./ErrorModal.module.scss";

const Backdrop = (props) => {
  return (
    <div className={errorModalStyles.backdrop} onClick={props.onResetErrors}/>
  );
};
const ModalOverlay = (props) => {
  return (
    <Card className={errorModalStyles.modal}>
      <header className={errorModalStyles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={errorModalStyles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={errorModalStyles.actions}>
        <Button onClick={props.onResetErrors}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onResetErrors={props.onResetErrors}/>,document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onResetErrors={props.onResetErrors}/>,document.getElementById("overlay-root"))}
    </Fragment>
  );
};

export default ErrorModal;
