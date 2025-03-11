"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="box-border px-28 pt-20 pb-10 m-0">
      <div className="box-border grid gap-10 p-0 m-0 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        <div className="box-border p-0 m-0">
          <h3 className="box-border p-0 m-0 mb-8 text-lg font-semibold text-white">
            Solutions
          </h3>
          <ul className="p-0 m-0 list-none">
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Application Services
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Security Servers
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Security FireWalls
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Cloud Services
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Integrations
            </li>
          </ul>
        </div>
        <div className="box-border p-0 m-0">
          <h3 className="box-border p-0 m-0 mb-8 text-lg font-semibold">
            Partners
          </h3>
          <ul className="p-0 m-0 list-none">
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Amazon
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Figma
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Twitter
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              CloudRail-IIOT
            </li>
          </ul>
        </div>
        <div className="box-border p-0 m-0">
          <h3 className="box-border p-0 m-0 mb-8 text-lg font-semibold">
            Resources
          </h3>
          <ul className="p-0 m-0 list-none">
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Academy
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Blog
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Themes
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Hosting
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Developers
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Support
            </li>
          </ul>
        </div>
        <div className="box-border p-0 m-0">
          <h3 className="box-border p-0 m-0 mb-8 text-lg font-semibold">
            Company
          </h3>
          <ul className="p-0 m-0 list-none">
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              About Us
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Careers
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              FAQs
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Teams
            </li>
            <li className="box-border p-0 m-0 mb-4 text-base cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
      <div className="box-border p-0 m-0">
        <div className="box-border p-0 mx-0 mt-10 mb-6 h-px bg-zinc-300" />
        <div className="box-border flex justify-between items-center p-0 m-0">
          <p className="box-border p-0 m-0 text-sm text-neutral-200">
            © 2024 All Rights Reserved
          </p>
          <div className="box-border flex gap-4 p-0 m-0">
            <a href="#facebook" aria-label="Facebook">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer"
              >
                <circle cx="12" cy="12" r="12" fill="white"></circle>
                <path
                  d="M16.7273 4H14.3471C13.295 4 12.286 4.42143 11.5421 5.17157C10.7981 5.92172 10.3802 6.93913 10.3802 8V10.4H8V13.6H10.3802V20H13.5537V13.6H15.9339L16.7273 10.4H13.5537V8C13.5537 7.78783 13.6373 7.58434 13.7861 7.43431C13.9349 7.28429 14.1367 7.2 14.3471 7.2H16.7273V4Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer"
              >
                <circle cx="12" cy="12" r="12" fill="white"></circle>
                <path
                  d="M19 5L10 14"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19 5L13.4 21L10.2 13.8L3 10.6L19 5Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer"
              >
                <circle cx="12" cy="12" r="12" fill="white"></circle>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.26748 5C6.4629 5 5 6.4629 5 8.26748V15.8024C5 17.607 6.4629 19.0699 8.26748 19.0699H15.8024C17.607 19.0699 19.0699 17.607 19.0699 15.8024V8.26748C19.0699 6.4629 17.607 5 15.8024 5H8.26748ZM4 8.26748C4 5.91062 5.91062 4 8.26748 4H15.8024C18.1593 4 20.0699 5.91062 20.0699 8.26748V15.8024C20.0699 18.1593 18.1593 20.0699 15.8024 20.0699H8.26748C5.91062 20.0699 4 18.1593 4 15.8024V8.26748ZM12.4364 9.51543C11.9134 9.43786 11.3792 9.52721 10.9098 9.77075C10.4404 10.0143 10.0598 10.3996 9.82209 10.872C9.58436 11.3443 9.50161 11.8795 9.58562 12.4016C9.66962 12.9237 9.91611 13.406 10.29 13.7799C10.6639 14.1538 11.1462 14.4003 11.6683 14.4843C12.1903 14.5683 12.7256 14.4855 13.1979 14.2478C13.6703 14.0101 14.0556 13.6294 14.2991 13.1601C14.5427 12.6907 14.632 12.1565 14.5545 11.6335C14.4753 11.0999 14.2267 10.606 13.8453 10.2246C13.4639 9.84316 12.97 9.59454 12.4364 9.51543ZM10.4492 8.88312C11.1053 8.54271 11.852 8.41783 12.5831 8.52624C13.3289 8.63683 14.0193 8.98435 14.5524 9.51746C15.0855 10.0506 15.4331 10.741 15.5436 11.4868C15.6521 12.2179 15.5272 12.9646 15.1868 13.6207C14.8463 14.2767 14.3077 14.8087 13.6475 15.141C12.9873 15.4733 12.2391 15.589 11.5094 15.4716C10.7797 15.3541 10.1055 15.0096 9.58291 14.487C9.06027 13.9643 8.71574 13.2902 8.59832 12.5605C8.48089 11.8308 8.59656 11.0826 8.92886 10.4224C9.26116 9.76216 9.79317 9.22354 10.4492 8.88312ZM16.1792 7.39074C15.903 7.39074 15.6792 7.6146 15.6792 7.89074C15.6792 8.16688 15.903 8.39074 16.1792 8.39074H16.1878C16.464 8.39074 16.6878 8.16688 16.6878 7.89074C16.6878 7.6146 16.464 7.39074 16.1878 7.39074H16.1792Z"
                  fill="black"
                ></path>
              </svg>
            </a>
            <a href="#figma" aria-label="Figma">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer"
              >
                <circle cx="12" cy="12" r="12" fill="white"></circle>
                <path
                  d="M7 6.5C7 5.83696 7.26339 5.20107 7.73223 4.73223C8.20107 4.26339 8.83696 4 9.5 4H12V9H9.5C8.83696 9 8.20107 8.73661 7.73223 8.26777C7.26339 7.79893 7 7.16304 7 6.5Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 4H14.5C14.8283 4 15.1534 4.06466 15.4567 4.1903C15.76 4.31594 16.0356 4.50009 16.2678 4.73223C16.4999 4.96438 16.6841 5.23998 16.8097 5.54329C16.9353 5.84661 17 6.1717 17 6.5C17 6.8283 16.9353 7.15339 16.8097 7.45671C16.6841 7.76002 16.4999 8.03562 16.2678 8.26777C16.0356 8.49991 15.76 8.68406 15.4567 8.8097C15.1534 8.93534 14.8283 9 14.5 9H12V4Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 11.5C12 11.1717 12.0647 10.8466 12.1903 10.5433C12.3159 10.24 12.5001 9.96438 12.7322 9.73223C12.9644 9.50009 13.24 9.31594 13.5433 9.1903C13.8466 9.06466 14.1717 9 14.5 9C14.8283 9 15.1534 9.06466 15.4567 9.1903C15.76 9.31594 16.0356 9.50009 16.2678 9.73223C16.4999 9.96438 16.6841 10.24 16.8097 10.5433C16.9353 10.8466 17 11.1717 17 11.5C17 11.8283 16.9353 12.1534 16.8097 12.4567C16.6841 12.76 16.4999 13.0356 16.2678 13.2678C16.0356 13.4999 15.76 13.6841 15.4567 13.8097C15.1534 13.9353 14.8283 14 14.5 14C14.1717 14 13.8466 13.9353 13.5433 13.8097C13.24 13.6841 12.9644 13.4999 12.7322 13.2678C12.5001 13.0356 12.3159 12.76 12.1903 12.4567C12.0647 12.1534 12 11.8283 12 11.5V11.5Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7 16.5C7 15.837 7.26339 15.2011 7.73223 14.7322C8.20107 14.2634 8.83696 14 9.5 14H12V16.5C12 17.163 11.7366 17.7989 11.2678 18.2678C10.7989 18.7366 10.163 19 9.5 19C8.83696 19 8.20107 18.7366 7.73223 18.2678C7.26339 17.7989 7 17.163 7 16.5Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7 11.5C7 10.837 7.26339 10.2011 7.73223 9.73223C8.20107 9.26339 8.83696 9 9.5 9H12V14H9.5C8.83696 14 8.20107 13.7366 7.73223 13.2678C7.26339 12.7989 7 12.163 7 11.5Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
