import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2 } from "../assets/images";
import  lastShoe from '../../public/img/AIR+MAX+DN8.avif'
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];

export  const nikeShoes = [
    {
      id: 1,
      name: "Air Max 270",
      price: "$150",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac2329a-8f91-43a3-b4c9-d8c9b9f15b5f/air-max-270-mens-shoes-KkLcGR.png"
    },
    {
      id: 2,
      name: "Air Jordan 1",
      price: "$170",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-jordan-1-retro-high-og-mens-shoes-69TtXL.png"
    },
    {
      id: 3,
      name: "Air Force 1",
      price: "$90",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89f-22be49c3b25c/air-force-1-07-mens-shoes-jBrhbr.png"
    },
    {
      id: 4,
      name: "React Infinity",
      price: "$160",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-2-mens-running-shoe-Jkd5dN.png"
    },
    {
      id: 5,
      name: "Dunk Low",
      price: "$100",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-400a-4f1a-93d3-8f8a6a4c63ce/dunk-low-mens-shoes-5WXHQ8.png"
    },
    {
      id: 6,
      name: "Blazer Mid",
      price: "$100",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18d79c2c-3c69-4d42-bf71-b8ad2c8e37d3/blazer-mid-77-vintage-mens-shoes-nw30B2.png"
    }
  ];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: bigShoe1,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: bigShoe2,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: bigShoe3,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: lastShoe    ,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];