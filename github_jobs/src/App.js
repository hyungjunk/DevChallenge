import GlobalStyles from "./GlobalStyles";
import MainLogo from "./components/MainLogo";
import SearchBar from "./components/SearchBar";
import SearchFilters from "./components/SearchFilters";
import Content from "./components/Content";
import JobList from "./components/JobList";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainLogo />
      <SearchBar />
      <Content>
        <SearchFilters />
        <JobList />
      </Content>
    </>
  );
}

export default App;
