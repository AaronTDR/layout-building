import {
  faLaptop,
  faMobileScreen,
  faGamepad,
  faHeadphones,
  faCamera,
  faKiwiBird,
  faPrint,
  faGuitar,
  faBicycle,
  faMusic,
  faBabyCarriage,
  faDog,
  faPalette,
  faHouse,
  faPaintRoller,
  faBuilding,
  faGem,
  faDumbbell,
  faShuttleSpace,
  faBasketShopping,
  faCouch,
  faHelmetSafety,
  faShirt,
  faFutbol,
  faHelicopter,
  faBriefcaseMedical,
} from "@fortawesome/free-solid-svg-icons";

export const getDomains = () => [
  {
    name: "technology",
    categories: [
      {
        id: "MLM1051",
        name: "Cell Phones",
        icon: faMobileScreen,
      },

      {
        id: "MLM1648",
        name: "Computers",
        icon: faLaptop,
      },
      {
        id: "MLM1144",
        name: "Video Game Consoles",
        icon: faGamepad,
      },
      {
        id: "MLM1000",
        name: "Electronics & Headphones",
        icon: faHeadphones,
      },
      {
        id: "MLM1039",
        name: "Camera & Accessories",
        icon: faCamera,
      },
    ],
  },
  {
    name: "supermarket",
    categories: [
      {
        id: "MLM1403",
        name: "Food and Beverages",
        icon: faBasketShopping,
      },
      {
        id: "MLM1246",
        name: "Beauty and Personal Care",
        icon: faKiwiBird,
      },
      {
        id: "MLM187772",
        name: "Health and Medical Equipment",
        icon: faBriefcaseMedical,
      },
      {
        id: "MLM1499",
        name: "Industries & Offices",
        icon: faPrint,
      },
      {
        id: "MLM1182",
        name: "Musical Instruments",
        icon: faGuitar,
      },
      {
        id: "MLM1132",
        name: "Toys and Games",
        icon: faBicycle,
      },
      {
        id: "MLM1168",
        name: "Music, Movies and Series",
        icon: faMusic,
      },
      {
        id: "MLM1384",
        name: "Baby",
        icon: faBabyCarriage,
      },
      {
        id: "MLM1071",
        name: "Pets",
        icon: faDog,
      },
    ],
  },
  {
    name: "home-and-furniture",
    categories: [
      {
        id: "MLM1368",
        name: "Arts & Crafts",
        icon: faPalette,
      },
      {
        id: "MLM1575",
        name: "Home and Kitchen",
        icon: faHouse,
      },
      {
        id: "MLM1574",
        name: "Home, Furniture & Garden",
        icon: faCouch,
      },
    ],
  },
  {
    name: "construction",
    categories: [
      {
        id: "MLM1500",
        name: "Construction",
        icon: faHelmetSafety,
      },
      {
        id: "MLM186863",
        name: "Tools & Home Improvement",
        icon: faPaintRoller,
      },
      {
        id: "MLM1499",
        name: "Industries & Offices",
        icon: faBuilding,
      },
    ],
  },
  {
    name: "clothing",
    categories: [
      {
        id: "MLM3937",
        name: "Jewelry & watches",
        icon: faGem,
      },
      {
        id: "MLM1430",
        name: "Clothing, Bags and Footwear",
        icon: faShirt,
      },
    ],
  },
  {
    name: "sports",
    icon: faFutbol,
    categories: [
      {
        id: "MLM1276",
        name: "Sports and Fitness",
        icon: faDumbbell,
      },
    ],
  },
  {
    name: "vehicles",
    categories: [
      {
        id: "MLM1747",
        name: "Vehicle Accessories",
        icon: faHelicopter,
      },
      {
        id: "MLM1743",
        name: "Cars, Motorcycles and Others",
        icon: faShuttleSpace,
      },
    ],
  },
];
