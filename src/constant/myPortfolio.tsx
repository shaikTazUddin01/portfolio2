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
    adminDashBoardLink: "https://thunder-fitnesscare.netlify.app/admin",
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
      "The Travel Tips & Destination Guides platform is designed to build an engaging community of travel enthusiasts, enabling users to share their personal travel stories, exchange valuable tips, and interact with fellow travellers. The platform provides user authentication and registration, allowing users to personalize their profiles, follow others, and contribute their own travel content. Additionally, it offers premium content access via payment integration for exclusive features. By combining informative travel content with social interactions, this project aims to empower users to make informed travel decisions, discover new destinations, and create memorable travel experiences.",
    gitClient: "https://github.com/shaikTazUddin01/travel-tips-client",
    gitServer: "https://github.com/shaikTazUddin01/travel_tips_server",
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
      "Redux",
      "Tailwind",
      "React Hook Form",
      "Redux Persist",
      "AamerPay Payment Getway",
      "Zod Validation",
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
  {
    _id: "03",
    name: "Car Wash and Booking System",
    thumble:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1729432765/localhost_5173-Washly_vk5sjf.jpg",
    image:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1729433159/Capture_osgaof.png",
    livesiteClient: "https://carwashing-service.netlify.app",
    livesiteServer: "https://new-car-washing.vercel.app",
    details:
      "The Car Wash Booking System frontend is a user-friendly web application designed to simplify the car wash booking process. It features a Home Page with easy navigation, a hero section, and a quick booking call-to-action. Users can sign up or log in securely, browse and filter services, view detailed service information, and book time slots directly through the Service Details pages. The Admin Dashboard allows administrators to manage services, slots, and users. The User Dashboard provides personalized booking history.",
    gitClient: "https://github.com/shaikTazUddin01/car-washing-client",
    gitServer: "https://github.com/shaikTazUddin01/car-washing",
    feature: [
      "User can create a account useing email",
      "User can log in",
      "Show all Services",
      "Show specific service details",
      "User can book any avaliable slot",
      "User can payment for his service",
      "Admin can manage all services",
      "Admin can create service slot",
      "Admin can manage all user and his booking",
      "In User manage his personal information",
      "Here user show his booking slot details",
    ],
    useTechnlogyClient: [
      "React",
      "Typescript",
      "Redux",
      "Tailwind",
      "Deisy Ui",
      "Ant Design",
      "React Hook Form",
      "Redux Persist",
      "AamerPay Payment Getway",
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
  {
    _id: "04",
    name: "Building Management System",
    thumble:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1729434436/cool-sorbet-7b3b40.netlify.app-ThunderHome_twrwk8.jpg",
    image:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1729434748/1_grcrp6.jpg",
    livesiteClient: "https://cool-sorbet-7b3b40.netlify.app",
    livesiteServer: "https://building-management-server-ten.vercel.app",
    details:
      "The Building Management Application streamlines the process of managing Apartment rentals and agreements. Users can easily browse available Apartment and submit agreement requests to rent a Apartment. Once a request is submitted, the admin can review and either approve or deny the request. Upon approval, the user becomes a member of the building.As a member, users can access their personal profile, where they can manage payments for their rented Apartment. The profile includes a dedicated Payment History page, allowing members to view all past transactions. If a membership is revoked by the admin, the user will no longer have access to their member profile or building-related services.",
    gitClient:
      "https://github.com/shaikTazUddin01/building-management-system-client-a12",
    gitServer:
      "https://github.com/shaikTazUddin01/building-management-system-server-a12",
    feature: [
      "User can create a accout",
      "User can log in",
      "User can show all Apartment",
      "Show specific Apartment details",
      "User can book any avaliable Apartment",
      "User can payment for his Apartment",
      "Admin can manage all Apartment",
      "Admin can manage user payment",
      "User can show his payment history",
    ],
    useTechnlogyClient: [
      "React",
      "Tailwind",
      "Deisy Ui",
      "Aos Animation",
      "swiper",
      "Axios",
      "Firebase",
      "Stripe",
    ],
    useTechnlogyServer: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Jsonwebtoken",
      "cors",
      "dotenv",
      "Stripe",
    ],
    adminEmail: "tazahmed12@gmail.com",
    adminPassword: "123456",
  },
];
