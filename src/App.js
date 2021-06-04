// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import SideNavigationBar from "./components/Layout/SideNavigationBar";
import Footer from "./components/Layout/Footer";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log("openDrawer-ApP", openDrawer);
  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };
  const toggleDrawer = () => {
    console.log("toggleDrawer");
    setOpenDrawer(false);
  };
  return (
    <>
      <Header showDrawer={openDrawerHandler}></Header>
      {openDrawer ? (
        <SideNavigationBar
          left={openDrawer}
          toggleDrawerHandler={toggleDrawer}
        ></SideNavigationBar>
      ) : (
        ""
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
