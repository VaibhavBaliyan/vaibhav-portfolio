import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/VaibhavBaliyan" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/vaibhav-baliyan-cr7/",
  },
  { icon: <FaTwitter />, path: "https://x.com/9StarHevens" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
