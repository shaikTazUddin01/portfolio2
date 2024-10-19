import { TPortfolio } from "@/type/portfolio";

export const myPortfolios: TPortfolio[] = [
  {
    _id: "01",
    name: "Thunder Fitness Care",
    image:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1729344469/fT_vkorv7.jpg",
    thumble:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1729341015/fitnessCare_qmz2hg.jpg",
    livesiteClient: "https://thunder-fitnesscare.netlify.app",
    adminDashBoard: "https://thunder-fitnesscare.netlify.app/admin",
    livesiteServer: "https://fitness-equipment-server-silk.vercel.app",
    gitClient:
      "https://github.com/shaikTazUddin01/fitness-equipment-and-accessories-client",
    gitServer:
      "https://github.com/shaikTazUddin01/fitness-equipment-and-accessories-server",
    details:
      "It is  a comprehensive e-commerce website for fitness equipment using React, Redux, Mongoose, and Express. This platform will offer a seamless shopping experience with features like product listings, detailed product pages, and a user-friendly cart system. Additionally, it will include robust product management capabilities for administrators and bonus features such as debounced search and page refresh warnings to enhance performance and user experience. Optional integration with Stripe will provide secure payment processing. This project aims to create a modern, efficient, and user-centric online store for fitness enthusiasts.",
    feature: [
      "User Can View Product and Product Details",
      "User Add Product any product into cart",
      "User can Increase or Decrease product item into the cart",
      "Order product in cash on delivery",
      "User Removed product from cart",
      "Filter Product base category",
      "Search product base on product name",
      "Sort product asc or dsc order base on product price",
    ],
    useTechnlogyClient: [
      "Typescript",
      "react",
      "Redux",
      "Tailwind Css",
      "Antd",
      "Swips Js",
      "React photo album",
      "React Hook Form",
      "Sonner",
    ],
    useTechnlogyServer: [
      "Node.js",
      "Express.js",
      "Typescript",
      "Mongoose",
      "Jsonwebtoken",
      "cookie-perser",
      "bcrypt",
      "cors",
      "dotenv",
    ],
    adminEmail: "taz@gmail.com",
    adminPassword: "1234567",
  },
  {
    _id: "02",
    name: "Travel Tips & Destination Guides",
    thumble:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1729351219/travel_nd4drt.png",
    image:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1728630114/uwichwx0kz9bq7io1h1k.jpg",
    livesiteClient: " https://travel-tips-seven.vercel.app",
    livesiteServer: " https://travel-tips-server.vercel.app",
    details:
      "It is  a comprehensive e-commerce website for fitness equipment using React, Redux, Mongoose, and Express. This platform will offer a seamless shopping experience with features like product listings, detailed product pages, and a user-friendly cart system. Additionally, it will include robust product management capabilities for administrators and bonus features such as debounced search and page refresh warnings to enhance performance and user experience.In this project only payment cash on delivary. This project aims to create a modern, efficient, and user-centric online store for fitness enthusiasts.",
    gitClient: "https://github.com/shaikTazUddin01/travel-tips-client",
    gitServer:
      "https://github.com/shaikTazUddin01/travel_tips_server",
    feature: [
      "User can create a account useing email",
      "User can log in",
      "User can view post and give like and comment",
      "User can varify his account",
      "User can edit his information",
      "Only varify user can access the premium post",
      "user can follow and unfollow another user",
      "user can forgot his password",
      "Admin can control the all post and user",
      "Admin can show all payment history",
      "user can change his password",
    ],
    useTechnlogyClient: [
      "Next.js",
      "Typescript",
      "react",
      "Redux",
      "Tailwind",
      "React Hook Form",
      "Redux Persist",
      "AamerPay Payment Getway",
      "Zod Validation"
    ],
    useTechnlogyServer: [
      "Node.js",
      "Express.js",
      "Typescript",
      "Mongoose",
      "Jsonwebtoken",
      "cookie-perser",
      "Zod Validation",
      "cors",
      "dotenv",
    ],
   
  },
];
