import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "Pocetna",
    path: "/pocetna",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Grupni",
    path: "",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Razvojna gimnastika za devojčice",
        path: "/grupni/razvojna",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Individualni",
    path: "",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Korektivna gimnastika",
        path: "/individualni/korektivna",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Akrobatska gimnastika",
        path: "/individualni/akrobatska",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Individualni program rastezanja",
        path: "/individualni/rastezanje",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Personalni treninzi za devojke i žene",
        path: "/individualni/funkcionalni",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Treneri",
    path: "/treneri",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Kontakt",
    path: "/kontakt",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];