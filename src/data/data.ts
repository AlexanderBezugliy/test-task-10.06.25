import product1 from "../assets/product-img1.png";
import product2 from "../assets/product-img2.png";
import product3 from "../assets/product-img3.png";
import persone1 from "../assets/persone1.png";
import persone2 from "../assets/persone2.png";
import persone3 from "../assets/persone3.png";


type Item = {
    logo: string;
    companyName: string,
    text: string;
    avatar: string;
    name: string;
    title: string;
};

export const data: Item[] = [
  {
    logo: product1,
    companyName: "Serene Living Products",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    avatar: persone1,
    name: "Ethan Morgan",
    title: "Founder and CEO, Serene Living Products",
  },
  {
    logo: product2,
    companyName: "Starlight Creations",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    avatar: persone2,
    name: "Olivia Hayes",
    title: "Owner, Starlight Creations",
  },
  {
    logo: product3,
    companyName: "Opulent Living Group",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    avatar: persone3,
    name: "Alexander Reed",
    title: "Co-Founder, Opulent Living Group",
  },
  {
    logo: product2,
    companyName: "Starlight Creations",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    avatar: persone2,
    name: "Olivia Hayes",
    title: "Owner, Starlight Creations",
  },
  {
    logo: product3,
    companyName: "Opulent Living Group",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    avatar: persone3,
    name: "Alexander Reed",
    title: "Co-Founder, Opulent Living Group",
  },
  {
    logo: product1,
    companyName: "Serene Living Products",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    avatar: persone1,
    name: "Ethan Morgan",
    title: "Founder and CEO, Serene Living Products",
  },
];