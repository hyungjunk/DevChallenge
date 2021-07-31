import { useLayoutEffect, useState } from "react";
import { useStore } from "../stores/storeContext";

declare const window: any;

export function useGoogleLogin(loginBtnRef) {
  const { authStore } = useStore();
  const [loading, setLoading] = useState(true);
  const googleSDK = () => {
    window.googleSDKLoaded = () => {
      window.gapi.load("auth2", () => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        //버튼 클릭시 사용자 정보 불러오기
        auth2?.attachClickHandler(
          loginBtnRef.current,
          {},
          (googleUser) => {
            console.log(googleUser);
            authStore.login(googleUser);
          },
          (error) => {
            alert(JSON.stringify(error, undefined, 2));
          },
        );
      });
    };
    //구글 SDK 불러오기
    // TODO: ID 필요없는 것 같은데?
    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  };
  useLayoutEffect(() => {
    if (authStore.isLoggedIn) return;
    googleSDK();
    setLoading(false);
  }, []);

  const logout = (): void => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      authStore.logout();
    });
  };
  return { loading, logout };
}
