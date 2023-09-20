import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Service",
    link: "/service",
  },
  {
    name: "Get in Touch",
    link: "/contact",
  },
  {
    name: "Register Brand",
    link: "/brand/login",
  },
];
