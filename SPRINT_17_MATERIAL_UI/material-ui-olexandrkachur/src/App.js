import { ThemeProvider } from "@emotion/react";
import theme from "./styles";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return <>
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </ThemeProvider>
  </>;
}

export default App;
