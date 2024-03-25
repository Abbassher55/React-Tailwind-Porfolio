import { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  {/*Theme Toggle icons*/}
let themeToggleIcon = <BsMoonFill className="text-xl" />


  if (darkMode) {
    themeToggleIcon = <HiOutlineSun className="text-xl" />

;
  }
  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="dark:bg-custom-dark bg-custom-gray">
        <nav className="container">
          <div className="flex md:flex-row flex-col max-sm:space-y-5 items-center py-5 justify-between text-custom-dark dark:text-white">
            <div className="capitalize font-bold text-3xl ">Abbas Sher</div>
            <div className="flex items-center">
              <button onClick={() => setDarkMode(!darkMode)} className="mr-10">
                {themeToggleIcon}
              </button>
              <ul className="flex items-center gap-x-10">
                <li>
                  <a href="">
                    <BsGithub className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsLinkedin className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsTwitter className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <SiFrontendmentor className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </main>
  );
}
