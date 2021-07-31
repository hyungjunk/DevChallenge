import styles from "../styles/Layout.module.css";
import { useStore } from "../stores/storeContext";
import React, { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  // useStore를 매번 쓰는건 불편한듯 해서 Higher Order Component로 한번만 store를 주입하고 싶었지만
  // 라이브러리 메서드 없이 그냥 react 메서드만으로 하려고 하니 자식 컴포넌트까진 prop이 전달되지만 그 이하는 전달이 자동으로 되지 않았다.
  // React.Children처럼 React Prototype의 모든 자식을 선택하는 메서드가 뭔가 있을 것 같긴한데 잘 모르겠다.
  const { appStore, authStore } = useStore();
  useEffect(() => {
    if (authStore.user == null) return;
    appStore.initiate(navigator).then();
  }, [authStore.user]);

  return (
    <div role="layout" className={styles.layout}>
      {children}
    </div>
  );
}

export default Layout;

/**
 * 관련 Article:
 * https://www.digitalocean.com/community/tutorials/how-to-create-wrapper-components-in-react-with-props
 * https://levelup.gitconnected.com/react-hooks-mobx-todolist-c138eb4f3d04
 *
 const WithStore: React.ComponentType<WithStoreProps> = ({
  Component,
  children,
}) => {
  const store = useStore();
  // 이걸 보면 React prototype이 있나봄
  const childrenWithExtraProp = React.Children.map(children, (child) => {
    React.isValidElement(child);
    return React.cloneElement(child, { store });
  });

  return <Component store={store}>{childrenWithExtraProp}</Component>;
};

 export default WithStore;
 */
