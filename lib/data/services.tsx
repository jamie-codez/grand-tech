import {BarChart, Cloud, Code, Database, GitGraph, Globe, InfinityIcon, Laptop, LineChart, Network, Palette, RadioTower, Server, ServerIcon, Shield} from "lucide-react";
import {DiAws, DiMongodb, DiNodejs, DiSwift} from "react-icons/di";
import {SiBackendless, SiFastapi, SiKotlin, SiPostgresql, SiQuarkus, SiSpringboot, SiSwagger} from "react-icons/si";
import {BiLogoDjango, BiLogoFlutter} from "react-icons/bi";
import {AiFillMobile, AiOutlineAndroid, AiOutlineApple, AiOutlineDocker, AiOutlineDotNet, AiOutlineJava, AiOutlinePython} from "react-icons/ai";
import {GrGraphQl, GrReactjs} from "react-icons/gr";
import {ReactNode} from "react";

export const technologies = [
    {
        name: "React",
        icon: <GrReactjs className="h-10 w-10"/>
    },
    {
        name: "Node.js",
        icon: <DiNodejs className="h-10 w-10"/>
    },
    {
        name: "Next.js",
        icon: <Network className="h-10 w-10"/>
    },
    {
        name: "Mobile",
        icon: <AiFillMobile className="h-10 w-10"/>
    },
    {
        name: "Cross Platform",
        icon: <BiLogoFlutter className="h-10 w-10"/>
    },
    {
        name: "Android",
        icon: <AiOutlineAndroid className="h-10 w-10"/>
    },
    {
        name: "iOS",
        icon: <AiOutlineApple className="h-10 w-10"/>
    },
    {
        name: "Swift",
        icon: <DiSwift className="h-10 w-10"/>
    },
    {
        name: "Kotlin",
        icon: <SiKotlin className="h-10 w-10"/>
    },
    {
        name: "Java",
        icon: <AiOutlineJava className="h-10 w-10"/>
    },
    {
        name: "Python",
        icon: <AiOutlinePython className="h-10 w-10"/>
    },
    {
        name: "Django",
        icon: <BiLogoDjango className="h-10 w-10"/>
    },
    {
        name: "Fast API",
        icon: <SiFastapi className="h-10 w-10"/>
    },
    {
        name: "MongoDB",
        icon: <DiMongodb className="h-10 w-10"/>
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql className="h-10 w-10"/>
    },
    {
        name: "AWS",
        icon: <DiAws className="h-10 w-10"/>
    },
    {
        name: "Docker",
        icon: <AiOutlineDocker className="h-10 w-10"/>
    },
    {
        name: "IoT",
        icon: <RadioTower className="h-10 w-10"/>
    },
    {
        name: "RESTful APIs",
        icon: <SiSwagger className="h-10 w-10"/>
    },
    {
        name: "Graphql APIs",
        icon: <GrGraphQl className="h-10 w-10"/>
    },
    {
        name: "Git",
        icon: <GitGraph className="h-10 w-10"/>
    },
    {
        name: "CI/CD",
        icon: <InfinityIcon className="h-10 w-10"/>
    },
    {
        name: "DotNET",
        icon: <AiOutlineDotNet className="h-10 w-10"/>
    },
    {
        name: "Springboot",
        icon: <SiSpringboot className="h-10 w-10"/>
    },
    {
        name: "Vertx",
        icon: <SiBackendless className="h-10 w-10"/>
    },
    {
        name: "Quarkus",
        icon: <SiQuarkus className="h-10 w-10"/>
    }
]

export const services = [
    {
        icon: <Globe className="h-10 w-10"/>,
        title: "Web Development",
        description:
            "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
        features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps", "Content Management Systems"],
        link: "/services/web-development",
    },
    {
        icon: <AiFillMobile className="h-10 w-10"/>,
        title: "Mobile Development",
        description:
            "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
        features: ["iOS Development", "Android Development", "Cross-Platform Solutions", "Mobile App Testing"],
        link: "/services/mobile-development",
    },
    {
        icon: <Code className="h-10 w-10"/>,
        title: "Custom Software",
        description:
            "Tailored software solutions designed to address your specific business challenges and streamline operations.",
        features: ["Enterprise Applications", "SaaS Products", "API Development", "Legacy System Modernization"],
        link: "/services/custom-software",
    },
    {
        icon: <Palette className="h-10 w-10"/>,
        title: "UI/UX Design",
        description: "User-centered design that enhances usability, accessibility, and overall user satisfaction.",
        features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
        link: "/services/ui-ux-design",
    },
    {
        icon: <Cloud className="h-10 w-10"/>,
        title: "Cloud Solutions",
        description: "Scalable and secure cloud infrastructure that supports your business needs and growth.",
        features: ["Cloud Migration", "DevOps", "Serverless Architecture", "Cloud Security"],
        link: "/services/cloud-solutions",
    },
    {
        icon: <LineChart className="h-10 w-10"/>,
        title: "IT Consulting",
        description: "Strategic technology guidance to help you make informed decisions and achieve your business goals.",
        features: ["Technology Assessment", "Digital Transformation", "IT Strategy", "Project Management", "Product Management"],
        link: "/services/consulting",
    },
    {
        icon: <ServerIcon className="h-10 w-10"/>,
        title: "IT Services",
        description: "Comprehensive IT support and management to keep your technology running smoothly and securely.",
        features: ["Managed IT Services", "Helpdesk support", "Network Management", "Project Management", "Product Management"],
        link: "/services/consulting",
    }
]

export const processStructure = [
    {
        step: "01",
        title: "Discovery",
        description: "We start by understanding your business, goals, and requirements.",
    },
    {
        step: "02",
        title: "Planning",
        description: "We create a detailed roadmap and technical specifications for your project.",
    },
    {
        step: "03",
        title: "Development",
        description: "Our team builds your solution using agile methodologies and best practices.",
    },
    {
        step: "04",
        title: "Delivery",
        description: "We deploy your solution and provide ongoing support and maintenance.",
    },
]

// Define the service data structure
export interface ServiceOption {
    title: string
    description: string
}

export interface ServiceFAQ {
    question: string
    answer: string
}

export interface ServiceProcess {
    step: string
    title: string
    description: string
}

export interface ServiceDetail {
    slug: string
    title: string
    icon: ReactNode
    description: string
    link:string,
    longDescription: string
    options: ServiceOption[]
    benefits: string[]
    process: ServiceProcess[]
    faqs: ServiceFAQ[]
    image: string
}


// Service data
export const servicesDetails: ServiceDetail[] = [
    {
        slug: "web-development",
        title: "Web Development",
        icon: <Globe className="h-10 w-10"/>,
        link: "/services/web-development",
        description:
            "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
        longDescription:
            "Our web development services focus on creating responsive, high-performance websites and web applications that deliver exceptional user experiences. We combine cutting-edge technologies with best practices in design and development to build solutions that help businesses establish a strong online presence and achieve their digital goals.",
        options: [
            {
                title: "Responsive Design",
                description:
                    "We create websites that look and function perfectly on all devices, from desktops to smartphones, ensuring your users have a consistent experience regardless of how they access your site.",
            },
            {
                title: "E-commerce Solutions",
                description:
                    "Custom online stores with secure payment processing, inventory management, and user-friendly interfaces that drive conversions and sales.",
            },
            {
                title: "Progressive Web Apps",
                description:
                    "Web applications that offer app-like experiences with offline capabilities, push notifications, and fast loading times, combining the best of web and mobile apps.",
            },
            {
                title: "Content Management Systems",
                description:
                    "Custom or platform-based CMS solutions that make it easy for you to update and manage your website content without technical knowledge.",
            },
        ],
        benefits: [
            "Establish a professional online presence that builds trust with potential customers",
            "Reach a wider audience across different devices and platforms",
            "Improve user engagement with fast-loading, responsive websites",
            "Increase conversion rates with optimized user experiences",
            "Gain valuable insights through analytics integration",
            "Scale your online presence as your business grows",
        ],
        process: [
            {
                step: "01",
                title: "Discovery",
                description:
                    "We begin by understanding your business goals, target audience, and requirements to create a strategic plan for your web project.",
            },
            {
                step: "02",
                title: "Planning & Design",
                description:
                    "Our team creates wireframes and design mockups that align with your brand identity and user experience goals.",
            },
            {
                step: "03",
                title: "Development",
                description:
                    "We build your website or application using modern frameworks and technologies, with a focus on performance and scalability.",
            },
            {
                step: "04",
                title: "Testing",
                description:
                    "Rigorous testing across devices and browsers ensures your website functions flawlessly for all users.",
            },
            {
                step: "05",
                title: "Deployment",
                description: "We launch your website with proper SEO configuration and performance optimization.",
            },
            {
                step: "06",
                title: "Maintenance & Support",
                description: "Ongoing support and updates keep your website secure, up-to-date, and performing optimally.",
            },
        ],
        faqs: [
            {
                question: "How long does it take to build a website?",
                answer:
                    "The timeline varies depending on the complexity of the project. A simple informational website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
            },
            {
                question: "Will my website be mobile-friendly?",
                answer:
                    "Absolutely. All our websites are built with responsive design principles, ensuring they look and function great on all devices, from desktops to smartphones.",
            },
            {
                question: "Can I update the website content myself?",
                answer:
                    "Yes, we can implement a content management system (CMS) that allows you to easily update content without technical knowledge. We also provide training to ensure you're comfortable managing your site.",
            },
            {
                question: "Do you provide hosting services?",
                answer:
                    "Yes, we offer hosting solutions tailored to your website's needs. We can also help you set up hosting with a third-party provider if you prefer.",
            },
            {
                question: "How do you approach SEO for new websites?",
                answer:
                    "SEO is integrated into our development process. We build websites with clean code, proper semantic structure, and optimized performance—all factors that contribute to better search engine rankings. We can also provide additional SEO services to further enhance your visibility.",
            },
            {
                question: "What technologies do you use for web development?",
                answer:
                    "We use modern technologies like React, Next.js, TypeScript, and Node.js for frontend and backend development. Our technology choices are always based on the specific requirements of your project and what will deliver the best results.",
            },
        ],
        image: "/pictures/web.png?height=600&width=800&text=Web+Development",
    },
    {
        slug: "mobile-development",
        title: "Mobile Development",
        icon: <AiFillMobile className="h-10 w-10"/>,
        link: "/services/mobile-development",
        description:
            "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
        longDescription:
            "Our mobile development services focus on creating intuitive, high-performance applications that engage users and drive business growth. Whether you need a native app for iOS or Android, or a cross-platform solution, our team delivers mobile experiences that stand out in today's competitive marketplace.",
        options: [
            {
                title: "iOS Development",
                description:
                    "Native applications for iPhone and iPad devices, built with Swift and following Apple's design guidelines to deliver seamless user experiences.",
            },
            {
                title: "Android Development",
                description:
                    "Custom applications for Android devices, developed with Kotlin or Java and optimized for the diverse Android ecosystem.",
            },
            {
                title: "Cross-Platform Solutions",
                description:
                    "Efficient development using frameworks like React Native or Flutter to create apps that work on both iOS and Android from a single codebase.",
            },
            {
                title: "Mobile App Testing",
                description:
                    "Comprehensive testing across devices, screen sizes, and operating system versions to ensure consistent performance and user experience.",
            },
        ],
        benefits: [
            "Reach users on their preferred devices with native mobile experiences",
            "Increase customer engagement through push notifications and personalized interactions",
            "Enable offline functionality for users to access your services anywhere",
            "Leverage device features like camera, GPS, and biometric authentication",
            "Improve brand loyalty with a premium, branded mobile experience",
            "Gather valuable user data and insights to inform business decisions",
        ],
        process: [
            {
                step: "01",
                title: "Strategy",
                description:
                    "We define your app's goals, target audience, and key features to create a roadmap for development.",
            },
            {
                step: "02",
                title: "UX/UI Design",
                description:
                    "Our designers create intuitive, engaging interfaces that follow platform-specific guidelines while maintaining your brand identity.",
            },
            {
                step: "03",
                title: "Development",
                description:
                    "We build your application using the appropriate technologies, with a focus on performance and user experience.",
            },
            {
                step: "04",
                title: "Quality Assurance",
                description:
                    "Rigorous testing across devices and scenarios ensures your app functions flawlessly for all users.",
            },
            {
                step: "05",
                title: "Deployment",
                description: "We handle the submission process to app stores, ensuring compliance with all requirements.",
            },
            {
                step: "06",
                title: "Maintenance & Updates",
                description:
                    "Ongoing support, performance monitoring, and regular updates keep your app current and competitive.",
            },
        ],
        faqs: [
            {
                question: "Should I build a native app or a cross-platform app?",
                answer:
                    "This depends on your specific requirements. Native apps offer the best performance and access to platform-specific features, while cross-platform solutions are more cost-effective and faster to develop. We'll help you make the right choice based on your goals, budget, and timeline.",
            },
            {
                question: "How long does it take to develop a mobile app?",
                answer:
                    "Development timelines vary based on complexity. A simple app might take 3-4 months, while a complex application could take 6-12 months. We'll provide a detailed timeline during our initial consultation.",
            },
            {
                question: "How much does it cost to develop a mobile app?",
                answer:
                    "App development costs vary widely based on features, complexity, and platforms. We provide transparent pricing based on your specific requirements and can work with you to prioritize features to meet your budget.",
            },
            {
                question: "Will my app work on both iOS and Android?",
                answer:
                    "We can develop for both platforms, either as native apps or using cross-platform technologies. The approach we recommend will depend on your specific needs and goals.",
            },
            {
                question: "How do you handle app store submissions?",
                answer:
                    "We manage the entire submission process for both the Apple App Store and Google Play Store, ensuring your app meets all guidelines and requirements for approval.",
            },
            {
                question: "What happens after my app is launched?",
                answer:
                    "We offer ongoing maintenance and support services to keep your app running smoothly. This includes bug fixes, performance optimization, and updates to support new devices and operating system versions.",
            },
        ],
        image: "/pictures/mobile.png?height=600&width=800&text=Mobile+Development",
    },
    {
        slug: "custom-software",
        title: "Custom Software",
        icon: <Code className="h-10 w-10"/>,
        link: "/services/custom-software",
        description:
            "Tailored software solutions designed to address your specific business challenges and streamline operations.",
        longDescription:
            "Our custom software development services deliver tailored solutions that address your unique business challenges. We create scalable, secure, and user-friendly applications that automate processes, improve efficiency, and provide valuable insights to drive your business forward.",
        options: [
            {
                title: "Enterprise Applications",
                description:
                    "Comprehensive software solutions that integrate with your existing systems to streamline operations and improve productivity across your organization.",
            },
            {
                title: "SaaS Products",
                description:
                    "Cloud-based software products with subscription models, designed for scalability, multi-tenancy, and continuous delivery of value.",
            },
            {
                title: "API Development",
                description:
                    "Robust and secure APIs that enable seamless integration between different systems and services, both internal and external.",
            },
            {
                title: "Legacy System Modernization",
                description:
                    "Updating and transforming outdated systems into modern, scalable applications while preserving valuable business logic and data.",
            },
        ],
        benefits: [
            "Streamline operations with software tailored to your specific workflows",
            "Increase efficiency by automating repetitive tasks and processes",
            "Gain competitive advantage with unique solutions not available to competitors",
            "Improve decision-making with custom reporting and analytics",
            "Enhance security with solutions built to address your specific security requirements",
            "Scale your business with software that grows with your needs",
        ],
        process: [
            {
                step: "01",
                title: "Requirements Analysis",
                description:
                    "We work closely with your team to understand your business processes, challenges, and goals to define detailed requirements.",
            },
            {
                step: "02",
                title: "Solution Architecture",
                description:
                    "Our architects design a technical blueprint that addresses your requirements while ensuring scalability, security, and performance.",
            },
            {
                step: "03",
                title: "Development",
                description:
                    "We build your solution using agile methodologies, with regular demos and feedback sessions to ensure alignment with your expectations.",
            },
            {
                step: "04",
                title: "Quality Assurance",
                description:
                    "Comprehensive testing ensures your software is reliable, secure, and performs as expected under various conditions.",
            },
            {
                step: "05",
                title: "Deployment",
                description:
                    "We implement your solution in your environment, ensuring smooth integration with existing systems and minimal disruption.",
            },
            {
                step: "06",
                title: "Training & Support",
                description:
                    "We provide training for your team and ongoing support to ensure you get the maximum value from your new software.",
            },
        ],
        faqs: [
            {
                question: "How do you ensure the software meets our specific needs?",
                answer:
                    "We follow a collaborative approach, involving your team throughout the development process. Regular demos and feedback sessions ensure the solution aligns with your requirements and expectations.",
            },
            {
                question: "Can the software integrate with our existing systems?",
                answer:
                    "Yes, we design custom software with integration in mind. We can develop APIs and connectors to ensure seamless communication with your existing systems and third-party services.",
            },
            {
                question: "How do you handle changes in requirements during development?",
                answer:
                    "We use agile methodologies that accommodate changes throughout the development process. Our iterative approach allows for adjustments as your needs evolve or as you gain new insights from seeing the software in action.",
            },
            {
                question: "What technologies do you use for custom software development?",
                answer:
                    "We select technologies based on your specific requirements, considering factors like performance, scalability, security, and long-term maintenance. Our team is proficient in a wide range of languages and frameworks, including .NET, Java, Python, Node.js, and more.",
            },
            {
                question: "How do you ensure the security of custom software?",
                answer:
                    "Security is integrated throughout our development process. We follow secure coding practices, conduct regular security reviews, and perform vulnerability testing. We also implement appropriate authentication, authorization, and data protection measures based on your requirements.",
            },
            {
                question: "What kind of support do you provide after the software is deployed?",
                answer:
                    "We offer various support and maintenance options, from basic bug fixes to comprehensive managed services. Our team can provide monitoring, regular updates, feature enhancements, and technical support to ensure your software continues to meet your needs as your business evolves.",
            },
        ],
        image: "/pictures/custom.png?height=600&width=800&text=Custom+Software",
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        icon: <Palette className="h-10 w-10"/>,
        link: "/services/ui-ux-design",
        description: "User-centered design that enhances usability, accessibility, and overall user satisfaction.",
        longDescription:
            "Our UI/UX design services focus on creating intuitive, engaging, and accessible digital experiences that delight users and achieve business objectives. We combine research, creativity, and best practices to design interfaces that are not only visually appealing but also highly functional and user-friendly.",
        options: [
            {
                title: "User Research",
                description:
                    "In-depth analysis of user behaviors, needs, and motivations through interviews, surveys, and usability testing to inform design decisions.",
            },
            {
                title: "Wireframing & Prototyping",
                description:
                    "Creating low and high-fidelity representations of your digital product to visualize structure, layout, and interactions before development.",
            },
            {
                title: "Visual Design",
                description:
                    "Crafting visually appealing interfaces with attention to typography, color, imagery, and other elements that reinforce your brand identity.",
            },
            {
                title: "Usability Testing",
                description:
                    "Evaluating designs with real users to identify issues, gather feedback, and iterate for improved user experience.",
            },
        ],
        benefits: [
            "Increase user satisfaction and engagement with intuitive, user-friendly interfaces",
            "Reduce development costs by identifying and addressing usability issues early",
            "Improve conversion rates with optimized user journeys and clear calls-to-action",
            "Build brand loyalty through consistent, high-quality user experiences",
            "Gain competitive advantage with distinctive, memorable design",
            "Make data-driven design decisions based on user research and testing",
        ],
        process: [
            {
                step: "01",
                title: "Discovery",
                description:
                    "We learn about your business, users, and goals to establish a solid foundation for the design process.",
            },
            {
                step: "02",
                title: "Research",
                description:
                    "We conduct user research to understand behaviors, needs, and pain points that will inform our design decisions.",
            },
            {
                step: "03",
                title: "Information Architecture",
                description:
                    "We organize content and functionality in a way that's intuitive and aligned with user expectations.",
            },
            {
                step: "04",
                title: "Wireframing",
                description: "We create low-fidelity representations of screens to establish layout and structure.",
            },
            {
                step: "05",
                title: "Visual Design",
                description: "We develop the visual language and apply it to create engaging, on-brand interfaces.",
            },
            {
                step: "06",
                title: "Prototyping & Testing",
                description: "We build interactive prototypes and test them with users to validate and refine the design.",
            },
        ],
        faqs: [
            {
                question: "What's the difference between UI and UX design?",
                answer:
                    "UI (User Interface) design focuses on the visual elements of a digital product—how it looks. UX (User Experience) design is concerned with how users interact with the product—how it works. While distinct, these disciplines work together to create effective digital products.",
            },
            {
                question: "Why is user research important in the design process?",
                answer:
                    "User research provides insights into user behaviors, needs, and motivations that inform design decisions. It helps create products that truly meet user needs rather than relying on assumptions, resulting in higher user satisfaction and better business outcomes.",
            },
            {
                question: "How do you ensure designs are accessible to all users?",
                answer:
                    "We follow accessibility guidelines (such as WCAG) throughout the design process, considering factors like color contrast, text size, keyboard navigation, and screen reader compatibility. We also conduct testing with users who have different abilities to identify and address accessibility issues.",
            },
            {
                question: "How do you measure the success of a design?",
                answer:
                    "We establish key performance indicators (KPIs) based on your business goals, such as conversion rates, task completion rates, user satisfaction scores, or engagement metrics. We then track these metrics to evaluate the design's effectiveness and identify areas for improvement.",
            },
            {
                question: "Can you redesign our existing product?",
                answer:
                    "Yes, we offer redesign services for existing products. We begin by analyzing the current design, identifying pain points through user research, and then creating an improved design that addresses issues while maintaining familiarity for existing users.",
            },
            {
                question: "How do you handle feedback and revisions in the design process?",
                answer:
                    "Feedback is an integral part of our design process. We establish clear review cycles and use collaborative tools to gather and implement feedback efficiently. We welcome input from stakeholders while advocating for user needs to ensure the final design achieves both business and user goals.",
            },
        ],
        image: "/pictures/ui-ux.png?height=600&width=800&text=UI/UX+Design",
    },
    {
        slug: "cloud-solutions",
        title: "Cloud Solutions",
        icon: <Cloud className="h-10 w-10"/>,
        link: "/services/cloud-solutions",
        description: "Scalable and secure cloud infrastructure that supports your business needs and growth.",
        longDescription:
            "Our cloud solutions services help businesses leverage the power of cloud computing to improve scalability, reduce costs, and enhance security. We design, implement, and manage cloud infrastructure that aligns with your business objectives, whether you're migrating existing systems or building new cloud-native applications.",
        options: [
            {
                title: "Cloud Migration",
                description:
                    "Strategic planning and execution of moving your applications, data, and infrastructure from on-premises environments to the cloud with minimal disruption.",
            },
            {
                title: "DevOps",
                description:
                    "Implementation of practices, tools, and cultural philosophies that improve your ability to deliver applications and services at high velocity.",
            },
            {
                title: "Serverless Architecture",
                description:
                    "Building applications that don't require server management, allowing you to focus on code while reducing operational costs and complexity.",
            },
            {
                title: "Cloud Security",
                description:
                    "Comprehensive security measures to protect your cloud environment, including identity management, data encryption, network security, and compliance.",
            },
        ],
        benefits: [
            "Reduce infrastructure costs with pay-as-you-go pricing models",
            "Scale resources up or down based on demand without hardware investments",
            "Improve business continuity with robust disaster recovery capabilities",
            "Enhance collaboration with cloud-based tools and services",
            "Accelerate innovation with rapid provisioning of resources",
            "Access enterprise-grade security features without enterprise-level investment",
        ],
        process: [
            {
                step: "01",
                title: "Assessment",
                description:
                    "We evaluate your current infrastructure, applications, and business requirements to develop a cloud strategy.",
            },
            {
                step: "02",
                title: "Planning",
                description:
                    "We create a detailed roadmap for cloud adoption, including architecture design, migration strategy, and security considerations.",
            },
            {
                step: "03",
                title: "Implementation",
                description:
                    "We execute the plan, setting up cloud infrastructure, migrating applications and data, and implementing security measures.",
            },
            {
                step: "04",
                title: "Testing",
                description:
                    "We thoroughly test all systems to ensure performance, security, and reliability in the cloud environment.",
            },
            {
                step: "05",
                title: "Deployment",
                description: "We transition your operations to the cloud with minimal disruption to your business.",
            },
            {
                step: "06",
                title: "Optimization & Management",
                description: "We continuously monitor and optimize your cloud environment for performance, cost, and security.",
            },
        ],
        faqs: [
            {
                question: "Which cloud provider do you recommend?",
                answer:
                    "We work with all major cloud providers, including AWS, Microsoft Azure, and Google Cloud Platform. Our recommendation depends on your specific requirements, existing technology stack, budget, and long-term goals. We can also implement multi-cloud strategies when appropriate.",
            },
            {
                question: "How secure is cloud computing?",
                answer:
                    "Cloud providers invest heavily in security and often provide better security than most organizations can achieve on-premises. However, security in the cloud is a shared responsibility. We implement comprehensive security measures and best practices to ensure your data and applications are protected.",
            },
            {
                question: "How do you handle data privacy and compliance in the cloud?",
                answer:
                    "We design cloud solutions with compliance requirements in mind, implementing appropriate controls, encryption, and access management. We have experience with various regulatory frameworks, including GDPR, HIPAA, and PCI DSS, and can help ensure your cloud environment meets these requirements.",
            },
            {
                question: "What's the process for migrating to the cloud?",
                answer:
                    "Our migration process includes assessment, planning, implementation, testing, and optimization phases. We use proven methodologies and tools to minimize risk and disruption. Depending on your situation, we might recommend strategies like lift-and-shift, re-platforming, or re-architecting applications.",
            },
            {
                question: "How can we control cloud costs?",
                answer:
                    "We implement cost management strategies, including right-sizing resources, using reserved instances, implementing auto-scaling, and setting up monitoring and alerting for cost anomalies. We also provide regular cost optimization recommendations based on your usage patterns.",
            },
            {
                question: "Can we maintain a hybrid cloud environment?",
                answer:
                    "Yes, we can design and implement hybrid cloud solutions that combine on-premises infrastructure with cloud services. This approach can be beneficial for organizations with specific security requirements, legacy systems, or a phased cloud adoption strategy.",
            },
        ],
        image: "/pictures/cloud.png?height=600&width=800&text=Cloud+Solutions",
    },
    {
        slug: "consulting",
        title: "IT Consulting",
        icon: <LineChart className="h-10 w-10"/>,
        link: "/services/consulting",
        description: "Strategic technology guidance to help you make informed decisions and achieve your business goals.",
        longDescription:
            "Our IT consulting services provide expert guidance to help you align technology with your business objectives. We work with you to develop strategies, evaluate options, and implement solutions that drive efficiency, innovation, and competitive advantage.",
        options: [
            {
                title: "Technology Assessment",
                description:
                    "Comprehensive evaluation of your current technology landscape to identify strengths, weaknesses, and opportunities for improvement.",
            },
            {
                title: "Digital Transformation",
                description:
                    "Strategic guidance for leveraging digital technologies to transform business processes, customer experiences, and business models.",
            },
            {
                title: "IT Strategy",
                description:
                    "Development of long-term technology roadmaps aligned with your business goals, considering factors like scalability, security, and innovation.",
            },
            {
                title: "Project Management",
                description:
                    "Expert oversight of technology initiatives to ensure they're delivered on time, within budget, and according to specifications.",
            },
            {
                title: "Product Management",
                description:
                    "Expert guidance the development of software and digital products, from concept to launch, ensuring they meet business objectives and provide value to users.",
            },
        ],
        benefits: [
            "Make informed technology decisions based on expert guidance",
            "Align IT investments with business objectives for maximum ROI",
            "Reduce risk in technology implementation and adoption",
            "Identify opportunities for innovation and competitive advantage",
            "Optimize IT operations for efficiency and cost-effectiveness",
            "Access specialized expertise without the cost of full-time employees",
        ],
        process: [
            {
                step: "01",
                title: "Discovery",
                description:
                    "We learn about your business, goals, challenges, and current technology landscape through interviews and documentation review.",
            },
            {
                step: "02",
                title: "Assessment",
                description:
                    "We evaluate your current systems, processes, and capabilities against industry best practices and your business objectives.",
            },
            {
                step: "03",
                title: "Strategy Development",
                description:
                    "We create a tailored technology strategy and roadmap that addresses your specific needs and aligns with your business goals.",
            },
            {
                step: "04",
                title: "Recommendations",
                description:
                    "We provide detailed recommendations for technology solutions, process improvements, and organizational changes.",
            },
            {
                step: "05",
                title: "Implementation Planning",
                description:
                    "We develop a phased implementation plan with clear timelines, resource requirements, and success metrics.",
            },
            {
                step: "06",
                title: "Ongoing Support",
                description:
                    "We provide guidance and oversight during implementation and offer continued advisory services as your business evolves.",
            },
        ],
        faqs: [
            {
                question: "How can IT consulting benefit my business?",
                answer:
                    "IT consulting provides expert guidance to help you make informed technology decisions, align IT with business goals, reduce risk, optimize operations, and identify opportunities for innovation. It gives you access to specialized expertise without the cost of hiring full-time specialists.",
            },
            {
                question: "What types of businesses do you typically work with?",
                answer:
                    "We work with organizations of all sizes across various industries. Our consultants have experience in sectors including healthcare, finance, retail, manufacturing, education, and non-profit. We tailor our approach to the specific needs and context of each client.",
            },
            {
                question: "How long does a typical consulting engagement last?",
                answer:
                    "The duration varies based on the scope and complexity of your needs. Initial assessments might take 2-4 weeks, while developing and implementing a comprehensive IT strategy could span several months. We can also provide ongoing advisory services through retainer arrangements.",
            },
            {
                question: "How do you measure the success of consulting engagements?",
                answer:
                    "We establish clear objectives and key performance indicators (KPIs) at the beginning of each engagement. These might include metrics like cost reduction, efficiency improvements, successful project delivery, or business outcomes. We regularly review progress against these metrics throughout the engagement.",
            },
            {
                question: "Will you work with our existing IT team?",
                answer:
                    "Yes, we collaborate closely with your internal IT team, complementing their skills and knowledge with our expertise. Our goal is to empower your team and help them succeed, not replace them. We can also help identify skills gaps and provide training or recruitment guidance if needed.",
            },
            {
                question: "How do you stay current with rapidly evolving technology trends?",
                answer:
                    "Our consultants engage in continuous learning through professional development, industry certifications, research, and participation in technology communities. We also maintain relationships with leading technology providers to stay informed about emerging solutions and best practices.",
            },
        ],
        image: "/pictures/consulting.png?height=600&width=800&text=IT+Consulting",
    },
    {
        slug: "it-services",
        title: "IT Services",
        icon: <Server className="h-10 w-10"/>,
        link: "/services/it-services",
        description: "Comprehensive IT support and management to keep your technology running smoothly and securely.",
        longDescription:
            "Our IT services provide end-to-end support for your technology infrastructure, from helpdesk and technical support to network management and cybersecurity. We ensure your systems are reliable, secure, and optimized to support your business operations and growth.",
        options: [
            {
                title: "Managed IT Services",
                description:
                    "Proactive monitoring, maintenance, and support of your entire IT infrastructure, ensuring optimal performance and minimizing downtime.",
            },
            {
                title: "Helpdesk Support",
                description:
                    "Responsive technical assistance for your team, resolving issues quickly to maintain productivity and user satisfaction.",
            },
            {
                title: "Network Management",
                description:
                    "Design, implementation, and management of secure, reliable networks that support your business communications and operations.",
            },
            {
                title: "IT Infrastructure",
                description:
                    "Planning, deployment, and maintenance of servers, storage, and other hardware components that form the foundation of your IT environment.",
            },
        ],
        benefits: [
            "Reduce downtime with proactive monitoring and maintenance",
            "Improve employee productivity with prompt technical support",
            "Enhance security posture with regular updates and best practices",
            "Control IT costs with predictable monthly expenses",
            "Focus on your core business while we manage your technology",
            "Scale your IT resources efficiently as your business grows",
        ],
        process: [
            {
                step: "01",
                title: "Assessment",
                description:
                    "We evaluate your current IT environment, identifying strengths, weaknesses, and areas for improvement.",
            },
            {
                step: "02",
                title: "Planning",
                description:
                    "We develop a tailored IT management plan that addresses your specific needs and aligns with your business objectives.",
            },
            {
                step: "03",
                title: "Implementation",
                description:
                    "We deploy necessary tools, configure systems, and establish processes for ongoing management and support.",
            },
            {
                step: "04",
                title: "Onboarding",
                description:
                    "We ensure a smooth transition to our services, with clear communication and minimal disruption to your operations.",
            },
            {
                step: "05",
                title: "Proactive Management",
                description:
                    "We continuously monitor and maintain your systems to prevent issues before they impact your business.",
            },
            {
                step: "06",
                title: "Regular Review",
                description:
                    "We conduct periodic reviews of your IT environment and our services to identify opportunities for improvement and optimization.",
            },
        ],
        faqs: [
            {
                question: "What types of IT issues do you support?",
                answer:
                    "We provide comprehensive support for a wide range of IT issues, including hardware problems, software troubleshooting, network connectivity, email issues, data backup and recovery, security concerns, and more. Our team has expertise across various technologies and platforms.",
            },
            {
                question: "How quickly do you respond to support requests?",
                answer:
                    "Our response times depend on the severity of the issue. Critical issues affecting multiple users or core business functions receive immediate attention, while less urgent matters are addressed according to our service level agreement (SLA). We typically respond to all requests within 1-4 hours during business hours.",
            },
            {
                question: "Do you provide on-site support or remote support only?",
                answer:
                    "We offer both remote and on-site support. Many issues can be resolved quickly through our secure remote support tools, but we also provide on-site assistance when necessary, particularly for hardware issues, infrastructure changes, or complex problems that benefit from in-person attention.",
            },
            {
                question: "How do you handle after-hours emergencies?",
                answer:
                    "We offer 24/7 emergency support for critical issues through our on-call system. Outside of regular business hours, you can reach our emergency support team through a dedicated hotline. We prioritize issues based on severity and impact on your business operations, with defined response times for different types of emergencies.",
            },
            {
                question: "Can you support remote and hybrid work environments?",
                answer:
                    "Yes, we specialize in supporting modern work environments, including remote and hybrid setups. We implement secure remote access solutions, cloud-based collaboration tools, and mobile device management to ensure your team can work productively and securely from anywhere.",
            },
            {
                question: "How do you ensure the security of our IT environment?",
                answer:
                    "Security is integrated into all aspects of our IT services. We implement multi-layered security measures including endpoint protection, network security, access controls, regular patching, security monitoring, and user awareness training. We also conduct periodic security assessments to identify and address vulnerabilities.",
            },
        ],
        image: "/pictures/tech-consult.png?height=600&width=800&text=IT+Services",
    },
    {
        slug: "digital-marketing",
        title: "Digital Marketing",
        icon: <BarChart className="h-10 w-10"/>,
        link: "/services/digital-marketing",
        description:
            "Strategic digital marketing services to increase your online visibility, engage your audience, and drive conversions.",
        longDescription:
            "Our digital marketing services help businesses establish a strong online presence, reach their target audience, and achieve measurable results. We develop comprehensive strategies across multiple channels to build brand awareness, generate leads, and drive revenue growth.",
        options: [
            {
                title: "Search Engine Optimization (SEO)",
                description:
                    "Improving your website's visibility in search engine results through technical optimization, content strategy, and authoritative backlinks.",
            },
            {
                title: "Pay-Per-Click Advertising (PPC)",
                description:
                    "Creating and managing targeted ad campaigns on platforms like Google Ads and social media to drive qualified traffic and conversions.",
            },
            {
                title: "Social Media Marketing",
                description:
                    "Building and engaging your audience on social platforms through strategic content, community management, and paid campaigns.",
            },
            {
                title: "Content Marketing",
                description:
                    "Developing valuable, relevant content that attracts and retains your target audience while establishing your brand as an industry authority.",
            },
        ],
        benefits: [
            "Increase brand visibility and awareness in digital channels",
            "Target specific audience segments with personalized messaging",
            "Generate qualified leads and improve conversion rates",
            "Measure marketing performance with detailed analytics",
            "Optimize marketing spend based on data-driven insights",
            "Build lasting relationships with customers through engagement",
        ],
        process: [
            {
                step: "01",
                title: "Discovery",
                description:
                    "We learn about your business, goals, target audience, and competitive landscape to inform our strategy.",
            },
            {
                step: "02",
                title: "Strategy Development",
                description:
                    "We create a comprehensive digital marketing plan tailored to your objectives, audience, and budget.",
            },
            {
                step: "03",
                title: "Implementation",
                description:
                    "We execute the strategy across selected channels, creating campaigns, content, and other marketing assets.",
            },
            {
                step: "04",
                title: "Monitoring",
                description: "We continuously track performance using analytics tools to measure progress toward your goals.",
            },
            {
                step: "05",
                title: "Optimization",
                description: "We refine campaigns based on data insights to improve performance and maximize ROI.",
            },
            {
                step: "06",
                title: "Reporting",
                description:
                    "We provide regular reports on key metrics and insights, with recommendations for ongoing improvement.",
            },
        ],
        faqs: [
            {
                question: "How long does it take to see results from digital marketing?",
                answer:
                    "The timeline varies depending on the channels and strategies employed. PPC advertising can generate immediate traffic, while SEO typically takes 3-6 months to show significant results. Social media marketing and content marketing are medium to long-term strategies that build momentum over time. We set realistic expectations and focus on both quick wins and sustainable growth.",
            },
            {
                question: "How do you measure the success of digital marketing campaigns?",
                answer:
                    "We establish key performance indicators (KPIs) aligned with your business goals, such as website traffic, lead generation, conversion rates, engagement metrics, or revenue. We use analytics tools to track these metrics and provide regular reports showing progress and insights.",
            },
            {
                question: "What digital marketing channels do you recommend for my business?",
                answer:
                    "Our recommendations are based on your specific goals, target audience, industry, and budget. We conduct research to determine where your audience is most active and which channels offer the best potential ROI. We often recommend a multi-channel approach for maximum impact.",
            },
            {
                question: "How much should we budget for digital marketing?",
                answer:
                    "Budget requirements vary based on your goals, competitive landscape, and chosen channels. We work with clients at various budget levels and focus on maximizing ROI. We can develop a phased approach that starts with high-priority channels and expands as we demonstrate results.",
            },
            {
                question: "Do you create the content for digital marketing campaigns?",
                answer:
                    "Yes, we offer comprehensive content creation services, including copywriting, graphic design, video production, and more. Our team includes creative professionals who develop engaging content aligned with your brand voice and marketing objectives.",
            },
            {
                question: "How do you stay current with digital marketing trends and algorithm changes?",
                answer:
                    "Our team engages in continuous learning through industry publications, webinars, conferences, and certification programs. We also conduct regular testing and stay connected with platform representatives to understand changes and best practices. This ensures our strategies remain effective in the evolving digital landscape.",
            },
        ],
        image: "/pictures/digital-marketing.png?height=600&width=800&text=Digital+Marketing",
    },
    {
        slug: "cybersecurity",
        title: "Cybersecurity",
        icon: <Shield className="h-10 w-10"/>,
        link: "/services/cybersecurity",
        description:
            "Comprehensive security solutions to protect your business from cyber threats and ensure data privacy.",
        longDescription:
            "Our cybersecurity services help businesses identify vulnerabilities, implement robust security measures, and respond effectively to threats. We provide comprehensive protection for your systems, data, and users, allowing you to focus on your business with confidence in your security posture.",
        options: [
            {
                title: "Security Assessment",
                description:
                    "Thorough evaluation of your current security posture to identify vulnerabilities, compliance gaps, and areas for improvement.",
            },
            {
                title: "Threat Protection",
                description:
                    "Implementation of multi-layered security controls to detect and prevent various cyber threats, including malware, phishing, and ransomware.",
            },
            {
                title: "Security Monitoring",
                description:
                    "Continuous monitoring of your environment for suspicious activities and security incidents, with prompt alerts and response.",
            },
            {
                title: "Incident Response",
                description:
                    "Structured approach to addressing and managing the aftermath of security breaches or attacks to minimize damage and recovery time.",
            },
        ],
        benefits: [
            "Protect sensitive data from unauthorized access and breaches",
            "Maintain business continuity by preventing disruptive security incidents",
            "Build customer trust by demonstrating commitment to data protection",
            "Meet regulatory compliance requirements for data security",
            "Reduce financial risk associated with data breaches and cyber attacks",
            "Gain peace of mind with expert security management and monitoring",
        ],
        process: [
            {
                step: "01",
                title: "Assessment",
                description:
                    "We evaluate your current security posture through vulnerability scanning, penetration testing, and security control review.",
            },
            {
                step: "02",
                title: "Planning",
                description:
                    "We develop a comprehensive security strategy based on identified risks, business requirements, and industry best practices.",
            },
            {
                step: "03",
                title: "Implementation",
                description:
                    "We deploy security solutions and controls according to the strategy, with minimal disruption to your operations.",
            },
            {
                step: "04",
                title: "Training",
                description:
                    "We provide security awareness training for your team to ensure they understand their role in maintaining security.",
            },
            {
                step: "05",
                title: "Monitoring",
                description:
                    "We continuously monitor your environment for security events and potential threats, with prompt notification of incidents.",
            },
            {
                step: "06",
                title: "Review & Improvement",
                description:
                    "We regularly assess and update your security measures to address evolving threats and changing business needs.",
            },
        ],
        faqs: [
            {
                question: "What are the most common cybersecurity threats businesses face today?",
                answer:
                    "Common threats include ransomware, phishing attacks, business email compromise, data breaches, insider threats, and supply chain attacks. The threat landscape is constantly evolving, with attackers developing new techniques to bypass security measures. Our approach addresses both current threats and emerging risks.",
            },
            {
                question: "How can we protect our business from ransomware?",
                answer:
                    "Protection against ransomware requires a multi-layered approach, including regular backups, endpoint protection, email filtering, user training, network segmentation, and patch management. We implement these measures as part of a comprehensive security strategy tailored to your specific environment and risk profile.",
            },
            {
                question: "What role do employees play in cybersecurity?",
                answer:
                    "Employees are both your first line of defense and a potential vulnerability. We provide security awareness training to help your team recognize threats like phishing, understand security policies, and practice good security hygiene. Regular training and simulated phishing exercises help reinforce security-conscious behavior.",
            },
            {
                question: "How do you handle security incidents?",
                answer:
                    "We follow a structured incident response process: identification, containment, eradication, recovery, and lessons learned. Our team works quickly to minimize damage, restore operations, and implement measures to prevent similar incidents in the future. We also assist with any required breach notifications and communications.",
            },
            {
                question: "How can we ensure compliance with data protection regulations?",
                answer:
                    "We help you navigate compliance requirements by implementing appropriate security controls, documentation, and processes. Our team stays current with regulations like GDPR, HIPAA, PCI DSS, and others relevant to your industry. We can conduct compliance assessments and help prepare for audits.",
            },
            {
                question: "What is the difference between vulnerability assessment and penetration testing?",
                answer:
                    "Vulnerability assessment is a systematic review to identify and classify security weaknesses in your systems. Penetration testing goes further by actively exploiting vulnerabilities to demonstrate how an attacker might gain access to your systems or data. Both are valuable components of a comprehensive security program, and we recommend conducting them regularly.",
            },
        ],
        image: "/pictures/cybersecurity.png?height=600&width=800&text=Cybersecurity",
    },
]