import React, { useRef } from "react";
import styles from "../../styles/Login.module.css";
import Head from "next/head";
import { useGoogleLogin } from "../../hooks/useGoogleLogin";

const Login: React.FC = () => {
  const googleLoginBtn = useRef();
  const { loading } = useGoogleLogin(googleLoginBtn);
  return (
    <>
      <Head>
        <meta
          name="google-signin-client_id"
          content="20529798417-bb370cti3vl7fnlets7n4kqpblahelv8.apps.googleusercontent.com"
        />
        <script src={"https://apis.google.com/js/platform.js"} defer />
      </Head>
      <div className={styles.login}>
        <meta
          name="google-signin-client_id"
          content="20529798417-kinbio8de28hg3skasqvbl591bnjvp9f.apps.googleusercontent.com"
        />
        <script src={"https://apis.google.com/js/platform.js"} defer />
        {loading ? (
          <div style={{ color: "white" }}>loading...</div>
        ) : (
          <div
            className="g-signin2"
            data-onsuccess="onSignIn"
            ref={googleLoginBtn}
          />
        )}
      </div>
    </>
  );
};

export default Login;
