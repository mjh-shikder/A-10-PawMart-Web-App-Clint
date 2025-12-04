import React from "react";
import { Outlet } from "react-router";
import MyContainer from "../components/MyContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
  return (
    <div className="bg-base-200">
      <title>Paw Mart | Home</title>
      <header>
        <nav>
          <MyContainer>
            <Navbar></Navbar>
          </MyContainer>
        </nav>
      </header>
      <main>
        <MyContainer>
          <section>
            <Outlet></Outlet>
          </section>
        </MyContainer>
      </main>
      <footer>
        <MyContainer>
          <Footer></Footer>
        </MyContainer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default HomeLayout;
