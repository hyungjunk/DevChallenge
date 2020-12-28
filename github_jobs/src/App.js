import GlobalStyles from "./GlobalStyles";
import MainLogo from "./components/MainLogo";
import SearchBar from "./components/SearchBar";
import SearchFilters from "./components/SearchFilters";
import Content from "./components/Content";
import JobList from "./components/JobList";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <MainLogo />
        <SearchBar />
        <Content>
          <JobList />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
