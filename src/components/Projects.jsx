import React, { useState } from "react";
import { projects } from "../data/data";

function Projects() {
  const [activeTab, setActiveTab] = useState("beginner");
  const [pageIndex, setPageIndex] = useState({ beginner: 0, intermediate: 0, advanced: 0 });
  const itemsPerPage = 4;

  // Update the active tab and reset pagination to the first page for each tab
  const handleTabChange = (level) => {
    setActiveTab(level);
    setPageIndex((prev) => ({ ...prev, [level]: 0 }));
  };

  // Filter projects based on the active tab
  const filteredProjects = projects.filter((project) => project.level === activeTab);

  // Calculate start and end index based on the current page
  const startIdx = pageIndex[activeTab] * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIdx, endIdx);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Handlers for pagination
  const handleNextPage = () => {
    setPageIndex((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab] + 1,
    }));
  };

  const handlePrevPage = () => {
    setPageIndex((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab] - 1,
    }));
  };

  const goToPage = (pageNumber) => {
    setPageIndex((prev) => ({
      ...prev,
      [activeTab]: pageNumber,
    }));
  };

  return (
    <section className="dark:bg-custom-dark dark:text-white">
      <div className="container py-12 md:py-28">
        <div className="flex items-end justify-between">
          <h3 className="heading-xl capitalize">projects</h3>
          <a href="#contact_form" className="w-fit border-b-2 border-custom-green hover:cursor-pointer hover:text-custom-green md:mx-0">
            Contact me
          </a>
        </div>

        {/* Tabs for difficulty levels */}
        <div className="mb-10 mt-5 flex space-x-6">
          {["beginner", "junior", "intermediate", "advanced", "guru"].map((level) => (
            <button key={level} onClick={() => handleTabChange(level)} className={`${activeTab === level ? "border-b-2 border-custom-green text-custom-green" : "text-white"} capitalize hover:cursor-pointer`}>
              {level}
            </button>
          ))}
        </div>

        {/* Projects Cards or No Projects Message */}
        <div className="mt-10">
          {paginatedProjects.length > 0 ? (
            <div className="grid gap-20 md:grid-cols-2">
              {paginatedProjects.map((project) => (
                <div className="single-project flex flex-col" key={project.id}>
                  <div className="project-image group relative overflow-hidden border border-custom-gray dark:border-white">
                    <img src={project.desktopImage} className="hidden h-80 w-full object-cover transition-all duration-500 group-hover:scale-125 md:block" alt="Project image" />
                    <img src={project.mobImage} className="block h-52 w-full object-cover transition-all duration-500 group-hover:scale-125 md:hidden" alt="Project image" />
                    <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center space-y-10 bg-black opacity-0 transition-all duration-500 group-hover:cursor-pointer group-hover:opacity-75">
                      <a href={project.liveSite} target="_blank" className="border-b-2 border-custom-green pb-2 uppercase text-white hover:cursor-pointer hover:text-custom-green">
                        view project
                      </a>
                      <a href={project.github} target="_blank" className="border-b-2 border-custom-green pb-2 uppercase text-white hover:cursor-pointer hover:text-custom-green">
                        view Code
                      </a>
                    </div>
                  </div>
                  <div className="project-name heading-md mt-5 uppercase">{project.title}</div>
                  <div className="project-technologies mt-3 flex flex-wrap uppercase">
                    {project.technologies.map((technology) => (
                      <div className="me-3" key={technology}>
                        {technology}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">No projects available in this level</p>
          )}
        </div>

        {/* Pagination Controls */}
        {filteredProjects.length > itemsPerPage && (
          <div className="mt-8 flex items-center justify-center space-x-4">
            <button onClick={handlePrevPage} disabled={pageIndex[activeTab] === 0} className="rounded-md border border-custom-green px-4 py-2 text-custom-green disabled:cursor-not-allowed disabled:opacity-50">
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button key={index} onClick={() => goToPage(index)} className={`rounded-md px-3 py-1 ${pageIndex[activeTab] === index ? "bg-custom-green text-white" : "border border-custom-green text-custom-green"}`}>
                {index + 1}
              </button>
            ))}

            <button onClick={handleNextPage} disabled={endIdx >= filteredProjects.length} className="rounded-md border border-custom-green px-4 py-2 text-custom-green disabled:cursor-not-allowed disabled:opacity-50">
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
