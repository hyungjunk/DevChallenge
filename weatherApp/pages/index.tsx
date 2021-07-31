import Main from "../src/components/Main/Main";
import Layout from "../src/components/Layout";
import Side from "../src/components/Side/Side";
import AuthRequired from "../src/components/Auth/AuthRequired";
import { RootStoreProvider } from "../src/stores/storeContext";

const Home = () => {
  return (
    <RootStoreProvider>
      <AuthRequired>
        <Layout>
          <Side />
          <Main />
        </Layout>
      </AuthRequired>
    </RootStoreProvider>
  );
};

export async function getServerSideProps({ preview = false }) {
  console.log("getServerSideProps");
  return {
    props: { foo: "bar" },
  };
}

export default Home;
