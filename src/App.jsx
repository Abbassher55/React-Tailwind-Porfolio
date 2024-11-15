import { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import desktopDeveloperImg from "../assets/images/profile.png";
import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";
import Projects from "./components/Projects";

import { learn_technologies } from "./data/data";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  {
    /*Theme Toggle icons*/
  }
  let themeToggleIcon = <BsMoonFill className="text-xl" />;

  if (darkMode) {
    themeToggleIcon = <HiOutlineSun className="text-xl" />;
  }
  return (
    <main className={darkMode ? "dark" : ""}>
      {/*Navbar Section*/}
      <section className="dark:bg-custom-dark">
        <nav className="container">
          <div className="relative z-50 flex flex-col  items-center justify-between py-5 text-custom-dark dark:text-white max-sm:space-y-5 md:flex-row">
            <div className="text-3xl font-bold capitalize ">Abbas Sher</div>
            <div className="flex items-center">
              <button onClick={() => setDarkMode(!darkMode)} className="mr-10 hover:text-custom-green">
                {themeToggleIcon}
              </button>
              <ul className="flex items-center gap-x-10">
                <li>
                  <a href="https://github.com/Abbassher55" className="hover:text-custom-green">
                    <BsGithub className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abbas-sher/" target="_blank" className="hover:text-custom-green">
                    <BsLinkedin className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" className="hover:text-custom-green">
                    <BsTwitter className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="https://www.frontendmentor.io/profile/Abbassher55" target="_blank" className="hover:text-custom-green">
                    <SiFrontendmentor className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* Hero Section*/}
      <section className="relative dark:bg-custom-dark dark:text-white">
        <div className="container max-sm:overflow-hidden md:py-24">
          <div className="flex flex-col-reverse items-center justify-center gap-3 md:flex-row">
            <div className="md:w-2/3">
              <h1 className="heading-xl relative z-40 capitalize">
                nice to meet you!
                <br />
                i’m <span className="relative after:absolute after:left-0 after:top-full after:h-1 after:w-full after:bg-custom-green after:content-['']">abbas sher.</span>
              </h1>
              <p className="my-6 max-w-lg text-center dark:text-custom-gray md:my-12 md:text-left xl:my-16">Based in Pakistan, I’m a front-end developer passionate about building accessible web apps that users love.</p>

              <a href="#contact_form" className="mx-auto block w-fit border-b-2 border-custom-green pb-2 text-center hover:cursor-pointer hover:text-custom-green md:mx-0">
                Contact me
              </a>
            </div>
            <div className="relative md:w-1/3">
              <img src={desktopDeveloperImg} className="h-96 border border-custom-green md:absolute md:-top-52 lg:-left-28 lg:-top-72 lg:h-[550px]" alt="Developer image" />
              <img src={circle} className="absolute left-72 top-2/3 -translate-x-1/2 md:left-0 md:top-64 lg:-left-28 lg:top-16" alt="Developer image" />
            </div>
          </div>
          <hr className="mt-12 dark:bg-white md:mt-20" />
        </div>
        <img src={rings} className="absolute top-20 h-16 w-48 md:-left-16 md:h-24 md:w-72" alt="Ring image" />
      </section>
      {/* Skills Section*/}
      <section className="relative overflow-hidden dark:bg-custom-dark dark:text-white">
        <div className="container py-12 md:py-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-14 lg:grid-cols-3">
            {learn_technologies.map((tech) => (
              <>
                <div className="flex flex-col items-center md:items-start" key={tech.id}>
                  <h2 className="heading-l uppercase">{tech.title}</h2>
                  <p className="mt-3 dark:text-custom-gray">{tech.experience}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <img src={rings} className="absolute -right-20 top-3/4 h-16 w-48 md:top-40 md:h-24 md:w-72" alt="Ring image" />
      </section>
      <Projects />
      {/* Contact Section*/}
      <section className="relative dark:bg-custom-dark dark:text-white">
        <div className="container pt-12 md:pt-28">
          <div className="flex flex-col items-start gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <h3 className="heading-xl capitalize">contact</h3>
              <p className="mt-5 max-w-md dark:text-custom-gray md:mt-9">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
            <div className="w-full md:w-1/2">
              <form className="flex flex-col items-center md:items-end">
                <input type="text" className="w-full border-b border-custom-gray bg-transparent p-4 focus:border-b-custom-green focus:outline-none md:w-9/12" placeholder="Name" required />
                <input type="email" className="mt-8 w-full border-b border-custom-gray bg-transparent p-4 focus:border-b-custom-green focus:outline-none md:w-9/12" placeholder="Email" required />
                <textarea className="mt-8 w-full border-b border-custom-gray bg-transparent p-4 focus:border-b-custom-green focus:outline-none md:w-9/12" placeholder="Message" rows="5" required></textarea>
                <div className="flex justify-end">
                  <button type="submit" className="mt-10 block w-fit border-b-2 border-custom-green pb-2 text-center uppercase hover:cursor-pointer hover:text-custom-green md:mx-0">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr className="mt-12 dark:bg-white md:mt-20" />
        </div>
        <img src={rings} className="absolute bottom-4 h-16 w-48 md:-left-16 md:h-24 md:w-72" alt="Ring image" />
      </section>
      {/* Footer Section*/}

      <footer className="dark:bg-custom-dark dark:text-white">
        <div className="container py-10">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold capitalize ">Abbas Sher</h1>
            </div>
            <div className="md:w-1/2">
              <ul className="flex items-center justify-end gap-x-10">
                <li>
                  <a href="https://github.com/Abbassher55" target="_blank" className="hover:text-custom-green">
                    <BsGithub className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abbas-sher/" target="_blank" className="hover:text-custom-green">
                    <BsLinkedin className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" className="hover:text-custom-green">
                    <BsTwitter className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="https://www.frontendmentor.io/profile/Abbassher55" target="_blank" className="hover:text-custom-green">
                    <SiFrontendmentor className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
