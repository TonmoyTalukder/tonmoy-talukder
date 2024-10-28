import React from "react";
import Intro from "../components/dev-page/components/Intro";
import Skills from "../components/dev-page/components/skills";
import SectionDivider from "../components/dev-page/components/section-divider";
// import Contact from "../components/dev-page/components/contact";
import Projects from "../components/dev-page/components/projects";

export default function Home() {
  return (
    <main
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Intro />
      <SectionDivider />
      <Projects/>
      <Skills />
      {/* <Contact /> */}
    </main>
  );
}
