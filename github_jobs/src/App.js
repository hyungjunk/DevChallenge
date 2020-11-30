import GlobalStyles from "./GlobalStyles";
import MainLogo from "./components/MainLogo";
import SearchBar from "./components/SearchBar";
import SearchFilters from "./components/SearchFilters";
import Content from "./components/Content";
import JobList from "./components/JobList";
import { useMedia } from "react-use";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

function App() {
  const isWide = useMedia("(min-width: 400px)");
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLogo />
      <SearchBar />
      <Content>
        <SearchFilters />
        <JobList />
      </Content>
    </ThemeProvider>
  );
}

export default App;
