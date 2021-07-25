import styles from "../styles/Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div role="layout" className={styles.layout}>
      {props.children}
    </div>
  );
}

export default Layout;
