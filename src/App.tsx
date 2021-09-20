import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import Footer from "./components/MRFooter";
import Header from "./components/MRHeader";
import Home from "./pages/Home/Home";
import theme, { colors } from "./theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div style={{ backgroundColor: colors.appBackground }}>
          <Header/>
          <Home />
          <Footer />
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
