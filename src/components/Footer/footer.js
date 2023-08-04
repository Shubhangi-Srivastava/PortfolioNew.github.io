import { Link } from "react-scroll";

/*--------------------
* Footer Section
----------------------*/
function Footer() {
  return (
    <footer className="footer bg-slate-900 border-t border-white border-opacity-10 py-4">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex pb-3 md:pb-0">
            <div className="flex justify-center md:justify-start w-full">
              <a
                href="https://www.facebook.com/shubhangi.srivastava.965/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a
                href="https://www.facebook.com/shubhangi.srivastava.965/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
              >
                <i className="fab fa-twitter"></i>
              </a> */}
              <a
                href="https://www.instagram.com/shubhangi_srivastava/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                to="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/srivastava-shubhangi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                to="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/Shubhangi-Srivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                to="#"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 text-center md:text-right">
            <p className="m-0 text-white text-opacity-75">
              © 2023 Shubhangi Srivastava
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
