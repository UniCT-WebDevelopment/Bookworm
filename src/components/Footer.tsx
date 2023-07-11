import { IconContext } from "react-icons";
import { BiLogoGithub } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gradient-to-r from-salmon to-mauve text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Jobs</a> 
        <a className="link link-hover">Press kit</a>
      </div> 
      <div>
        <div className="grid grid-flow-col gap-4">
          <IconContext.Provider value={{ size: "2.5rem" }}>
          <a>
            <BiLogoGithub />
          </a>
          <a>
            <BiLogoTelegram />
          </a>
          </IconContext.Provider>
        </div>
      </div> 
      <div>
        <p>
          © 2023 Bookworm, Inc. All rights reserved.
        </p>
      </div>
  </footer>
  );
};

export default Footer;