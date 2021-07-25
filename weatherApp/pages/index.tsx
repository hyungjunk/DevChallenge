import { observer } from "mobx-react";
import { store } from "../src/stores/ObservableDataStore";
import Main from "../src/components/Main/Main";
import { useEffect } from "react";
import Layout from "../src/components/Layout";
import Side from "../src/components/Side/Side";

declare const navigator: Navigator;

const Home = observer((props) => {
  useEffect(() => {
    store.initiate(navigator).then();
  }, []);

  return (
    <Layout>
      <Side />
      <Main />
    </Layout>
  );
});

export async function getServerSideProps({ preview = false }) {
  console.log("getServerSideProps");
  return {
    props: { foo: "bar" },
  };
}

export default Home;
