import { TheNavItem, TheNavBar } from "../components/navbar";

/*
  Cuando pongamos un proyecto en la pagina acordarse de que tenemos que descomentar los proyectos del navBar.
  En lo posible de entrada agregar un proyecto de cada framework (Flutter, React, Swift).
*/

const theNavItems: TheNavItem[] = [
  {
    label: "Home",
    href: "/",
  }
];

export const theNavBarProps: TheNavBar = {
  photoURL: "https://www.all-project.tech/_astro/apple-touch-icon.ee12e906_ugP7k.webp",
  title: "ALL PROJECT - ICO",
  navItems: theNavItems,
};