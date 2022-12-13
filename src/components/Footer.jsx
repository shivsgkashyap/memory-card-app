import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#303030] text-zinc-100 flex justify-center items-center w-full p-2">
      <p>Copyright © 2022 Shiv Kashyap</p>
      <a
        href="https://github.com/shivsgkashyap"
        target="_blank"
        className="ml-2 text-xl text-zinc-100 hover:text-zinc-300"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
