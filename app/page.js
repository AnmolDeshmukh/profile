// 'use client'

// // import { useEffect, useState } from 'react';
// // import { personalData } from "@/utils/data/personal-data";
// // import AboutSection from "./components/homepage/about";
// // import Blog from "./components/homepage/blog";
// // import ContactSection from "./components/homepage/contact";
// // import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
// // import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
// // import Skills from "./components/homepage/skills";

// // export default function Home() {
// //   const [blogs, setBlogs] = useState([]);

// //   useEffect(() => {
// //     async function getData() {
// //       try {
// //         const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
// //         if (!res.ok) {
// //           throw new Error('Failed to fetch blogs');
// //         }

// //         const data = await res.json();
// //         const filtered = data
// //           .filter((item) => item?.cover_image)
// //           .sort(() => Math.random() - 0.5);

// //         setBlogs(filtered);
// //       } catch (error) {
// //         console.error("Blog fetch error:", error);
// //       }
// //     }

// //     getData();
// //   }, []);

// //   return (
// //     <div suppressHydrationWarning>
// //       <HeroSection />
// //       <AboutSection />
// //       <Experience />
// //       <Skills />
// //       <Projects />
// //       <Education />
// //       <Blog blogs={blogs} />
// //       <ContactSection />
// //     </div>
// //   );
// // }
// // 'use client'
// import HeroSection from "./components/homepage/hero-section";
// import AboutSection from "./components/homepage/about";
// import ContactSection from "./components/homepage/contact";
// export default function Home() {
//   return (
//     <div suppressHydrationWarning>
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <Projects />

//       <ContactSection />

//     </div>
//   );
// }
'use client'

import dynamic from 'next/dynamic';
import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";

// Dynamically import components that might be using browser-specific APIs
const Experience = dynamic(() => import('./components/homepage/experience'), { ssr: false });
const Projects = dynamic(() => import('./components/homepage/projects'), { ssr: false });
// If issues persist, consider dynamically importing HeroSection, AboutSection, or ContactSection as well.
// const HeroSection = dynamic(() => import('./components/homepage/hero-section'), { ssr: false });
// const AboutSection = dynamic(() => import('./components/homepage/about'), { ssr: false });
// const ContactSection = dynamic(() => import('./components/homepage/contact'), { ssr: false });

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Projects />
      <ContactSection />
    </div>
  );
}