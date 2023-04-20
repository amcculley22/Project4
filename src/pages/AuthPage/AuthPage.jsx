import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import styles from "./AuthPage.module.scss";

export default function AuthPage({ setUser }) {
  return (
    <main className={styles.AuthPage}>
      <div className={styles.logoContainer}></div>
      <div className={styles.formsContainer}>
        <div className={styles.loginForm}>
          <h1 className={styles.text}>Login</h1>
          <LoginForm setUser={setUser} />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.signupForm}>
          <h1 className={styles.text}>Sign Up</h1>
          <SignUpForm setUser={setUser} />
        </div>
      </div>
    </main>
  );
}
