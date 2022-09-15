import React from "react";
import Header from "../components/common/Header";
import Courses from "../components/Home/Courses";
import HeroSection from "../components/Home/HeroSection";
import Institutes from "../components/Home/Institutes";
import Register from "../components/Home/Register";
import Success from "../components/Home/Success";
import Feedback from "../components/Home/Feedback";
import Faq from "../components/Home/Faq";
import Companies from "../components/Home/Companies";
import Footer from "../components/Home/Footer";
const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Courses />
            <Institutes />
            <Register />
            <Success />
            <Feedback />
            <Faq />
            <Companies />
            <Footer />
        </div>
    );
};

export default Home;
