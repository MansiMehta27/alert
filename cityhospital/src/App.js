import { connect } from "formik";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Bookappointment from "./Appointment/Bookappointment";
import LIstappointment from "./Appointment/LIstappointment";
import Footer from "./Componets/Header/Footer/Footer";
import Header from "./Componets/Header/Header";
import About from "./Container/About/About";
import Contect from "./Container/Contect/Contect";
import Department from "./Container/Departments/Department";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";
import { ThemeProvider } from "./context/ThemeContext";
import { configurstore, store } from "./Redux/Store";
import Privateroute from "./Route/Privateroute.js/Privateroute";
import Publicroute from "./Route/Publicroute.js/Publicroute";
import { SnackbarProvider } from 'notistack';

function App() {
  
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider>
          <Provider store={store}>
            <Header />
            <Switch>
              <Publicroute exact path={"/"} component={Home} />
              <Privateroute exact path={"/departments"} component={Department} />
              <Route exact path={"/about"} component={About} />
              <Publicroute exact path={"/login"} component={Login} />
              <Route exact path={"/contect"} component={Contect} />
              <Privateroute exact path={"/bookappointment"} component={Bookappointment} />
              <Privateroute exact path={"/listappointment"} component={LIstappointment} />
            </Switch>
            <Footer />
          </Provider>
          </ThemeProvider>
      </SnackbarProvider>
    </>
  );
}
export default App;
