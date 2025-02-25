import React from "react";

const Links = [
  {
    path: "./",
    title: "Home",
  },
  {
    path: "./",
    title: "About",
  },
  {
    path: "./",
    title: "Projects",
  },
  {
    path: "./",
    title: "Skills",
  },
  {
    path: "./",
    title: "Blog",
  },
  {
    path: "./",
    title: "Contact",
  },
];

const Menu = () => {
  return (
    <div className="md:w-full fixed md:bottom-0 left-0">
      <ul className="flex justify-center items-center p-4 gap-7">
        {Links.map((link, index) => {
          return (
            <li key={index} className="bg-[#ffffff10] backdrop-blur-md border border-[#ffffff30]">
              <a href={link.path} className="text-xl text-white hover:text-[#00FFFF] uppercase tracking-wide px-4 py-2 rounded-md transition-all">{link.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
