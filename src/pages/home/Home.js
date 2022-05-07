import React from "react";
import Education from "../../components/education/Education";
import Introducation from "../../components/introduction/Introducation";
import Profile from "../../components/profile/Profile";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
export default function Home() {
  return (
    <>
    {/* <Topbar /> */}
    <Profile/>
    <Introducation/>
    <Education/>
  </>
  )
}
