// Define types for the navigation items
interface NavItem {
  text: string;
  path: string;
}

// Define types for the featured properties
interface FeaturedItem {
  cover: string;
  name: string;
  total: string;
}

// Define types for the property listings
interface PropertyItem {
  id: number;
  cover: string;
  name: string;
  location: string;
  category: string;
  price: string;
  type: string;
}

// Define types for the awards
interface AwardItem {
  icon: JSX.Element;
  num: string;
  name: string;
}

// Define types for the location items
interface LocationItem {
  id: number;
  name: string;
  Villas: string;
  Apartments: string;
  Offices: string;
  cover: string;
}

// Define types for team members
interface TeamMember {
  list: string;
  cover: string;
  address: string;
  name: string;
  icon: JSX.Element[];
}

// Define types for pricing plans
interface PricePlan {
  best?: string;
  plan: string;
  price: string;
  ptext: string;
  list: Array<{ icon: JSX.Element; text?: string; change?: string }>;
}

// Define types for footer sections
interface FooterSection {
  title: string;
  text: Array<{ list: string }>;
}

// Define the arrays with the appropriate types
export const nav: NavItem[] = [
  { text: "home", path: "/" },
  { text: "about", path: "/about" },
  { text: "services", path: "/services" },
  { text: "blog", path: "/blog" },
  { text: "pricing", path: "/pricing" },
  { text: "contact", path: "/contact" },
];

export const featured: FeaturedItem[] = [
  { cover: "../images/hero/h1.png", name: "Family House", total: "122 Property" },
  { cover: "../images/hero/h2.png", name: "House & Villa", total: "155 Property" },
  { cover: "../images/hero/h3.png", name: "Apartment", total: "300 Property" },
  { cover: "../images/hero/h4.png", name: "Office & Studio", total: "80 Property" },
  { cover: "../images/hero/h6.png", name: "Villa & Condo", total: "80 Property" },
];

export const list: PropertyItem[] = [
  {
    id: 1,
    cover: "../images/list/p-1.png",
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: "../images/list/p-2.png",
    name: "Fairmount Properties",
    location: "5698 Zirak Road, New York",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: "../images/list/p-7.png",
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: "../images/list/p-4.png",
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: "../images/list/p-5.png",
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: "../images/list/p-6.png",
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
];

export const awards: AwardItem[] = [
  { icon: <i className='fa-solid fa-trophy'></i>, num: "32 M", name: "Blue Burmin Award" },
  { icon: <i className='fa-solid fa-briefcase'></i>, num: "43 M", name: "Mimo X11 Award" },
  { icon: <i className='fa-solid fa-lightbulb'></i>, num: "51 M", name: "Australian UGC Award" },
  { icon: <i className='fa-solid fa-heart'></i>, num: "42 M", name: "IITCA Green Award" },
];

export const location: LocationItem[] = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-1.png",
  },
  {
    id: 2,
    name: "Jersey, United States",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-2.png",
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-3.png",
  },
  {
    id: 4,
    name: "New York, United States",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-4.png",
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-5.png",
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-6.png",
  },
];

export const team: TeamMember[] = [
  {
    list: "50",
    cover: "../images/customer/team-1.jpg",
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [
      <i className='fa-brands fa-facebook-f'></i>,
      <i className='fa-brands fa-linkedin'></i>,
      <i className='fa-brands fa-twitter'></i>,
      <i className='fa-brands fa-instagram'></i>,
    ],
  },
  {
    list: "70",
    cover: "../images/customer/team-2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [
      <i className='fa-brands fa-facebook-f'></i>,
      <i className='fa-brands fa-linkedin'></i>,
      <i className='fa-brands fa-twitter'></i>,
      <i className='fa-brands fa-instagram'></i>,
    ],
  },
  {
    list: "80",
    cover: "../images/customer/team-3.jpg",
    address: "Denver, USA",
    name: "Anna K. Young",
    icon: [
      <i className='fa-brands fa-facebook-f'></i>,
      <i className='fa-brands fa-linkedin'></i>,
      <i className='fa-brands fa-twitter'></i>,
      <i className='fa-brands fa-instagram'></i>,
    ],
  },
  {
    list: "51",
    cover: "../images/customer/team-4.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i className='fa-brands fa-facebook-f'></i>,
      <i className='fa-brands fa-linkedin'></i>,
      <i className='fa-brands fa-twitter'></i>,
      <i className='fa-brands fa-instagram'></i>,
    ],
  },
  {
    list: "42",
    cover: "../images/customer/team-5.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i className='fa-brands fa-facebook-f'></i>,
      <i className='fa-brands fa-linkedin'></i>,
      <i className='fa-brands fa-twitter'></i>,
      <i className='fa-brands fa-instagram'></i>,
    ],
  },
  {
    list: "38",
    cover: "../images/customer/team-5.jpg",
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [
      <i className='fa-brands fa-facebook-f'></i>,
      <i className='fa-brands fa-linkedin'></i>,
      <i className='fa-brands fa-twitter'></i>,
      <i className='fa-brands fa-instagram'></i>,
    ],
  },
];

export const price: PricePlan[] = [
  {
    best: "Best Value",
    plan: "Basic Plan",
    price: "$19.99",
    ptext: "Ideal for beginners.",
    list: [
      { icon: <i className='fa-solid fa-check'></i>, text: "5 Listings" },
      { icon: <i className='fa-solid fa-check'></i>, text: "10 Support" },
      { icon: <i className='fa-solid fa-check'></i>, text: "Email Alerts" },
    ],
  },
  {
    plan: "Standard Plan",
    price: "$29.99",
    ptext: "Great for growing teams.",
    list: [
      { icon: <i className='fa-solid fa-check'></i>, text: "15 Listings" },
      { icon: <i className='fa-solid fa-check'></i>, text: "20 Support" },
      { icon: <i className='fa-solid fa-check'></i>, text: "Email Alerts" },
    ],
  },
  {
    plan: "Premium Plan",
    price: "$39.99",
    ptext: "Best for large teams.",
    list: [
      { icon: <i className='fa-solid fa-check'></i>, text: "Unlimited Listings" },
      { icon: <i className='fa-solid fa-check'></i>, text: "30 Support" },
      { icon: <i className='fa-solid fa-check'></i>, text: "Email Alerts" },
    ],
  },
];

export const footer: FooterSection[] = [
  {
    title: "About Us",
    text: [
      { list: "Lorem ipsum dolor sit amet." },
      { list: "Consectetur adipisicing elit." },
      { list: "Repudiandae tenetur quas." },
    ],
  },
  {
    title: "Quick Links",
    text: [
      { list: "Contact" },
      { list: "Terms of Use" },
      { list: "Privacy Policy" },
    ],
  },
  {
    title: "Support",
    text: [
      { list: "Help Center" },
      { list: "Customer Support" },
      { list: "Live Chat" },
    ],
  },
  {
    title: "Follow Us",
    text: [
      { list: "Facebook" },
      { list: "Twitter" },
      { list: "Instagram" },
    ],
  },
];
