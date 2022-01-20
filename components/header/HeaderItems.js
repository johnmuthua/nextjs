import {
  FcSteam,
  FcBullish,
  FcSerialTasks,
  FcHome,
  FcFaq,
  FcReading,
  FcCustomerSupport,
  FcNook,
} from "react-icons/fc";
export const Items = [
  {
    id: 1,
    name: "Trending",
    icon: <FcSteam />,
    url: "/",
  },
  {
    id: 2,
    name: "Popular",
    icon: <FcBullish />,
    url: "/home",
  },
  {
    id: 3,
    name: "Controvesial",
    icon: <FcSerialTasks />,
    url: "/home",
  },
  {
    id: 4,
    name: "Home",
    icon: <FcHome />,
    url: "/",
  },
  {
    id: 5,
    name: "Questions",
    icon: <FcFaq />,
    url: "/home",
  },
  {
    id: 6,
    name: "Blog",
    icon: <FcReading />,
    url: "/home",
  },
];

export const ItemsCenter = [
  {
    id: 1,
    name: "Ask a Question",
    icon: <FcCustomerSupport />,
  },
  {
    id: 2,
    name: "Write a Blog",
    icon: <FcNook />,
  },
];
