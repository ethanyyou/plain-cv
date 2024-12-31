import { Experiences } from "./types";

export const experienceInfo: Experiences = {
  experienceList: [
    {
      hidden: false,
      company: "Bacera Co. Pty Ltd",
      address: "Alhambra, California",
      titles: [
        {
          hidden: false,
          position: "Software Engineer",
          duration: "June 2023 - Now",
          taskList: [
            "Architected and implemented new Multi-Tenant RESTful APIs using .NET Core, successfully migrating from legacy PHP Laravel system to PostgreSQL database, achieving a 500% improvement in average response time",
            "Established automated CI/CD workflow with Jenkins, enabling seamless code integration and deployment while reducing deployment time by 80%.",
            "Utilized Duende IdentityServer to integrate OAuth for secure authentication and JWT for stateless authorization.",
            "Implemented Hangfire for background task processing, achieving 60% reduction in server load",
            "Architected robust cloud infrastructure using AWS S3 for media storage and AWS CloudWatch for logging, integrated with Slack for real-time error notifications, resulting in 95% faster incident response time and reducing system downtime by 40% through proactive monitoring.",
            "Proposed and implemented API Gateway microservices using Go, centralizing WebSocket channel management and integrating ETCD for service discovery across HTTP and gRPC endpoints.",
            "Led the migration from current monolithic application to Kubernetes microservices, implementing gRPC for inter-service communication and separating core functionalities into scalable services.",
          ],
        },
        {
          hidden: false,
          position: "Software Engineer Intern",
          duration: "January 2023 - June 2023",
          taskList: [
            "Developed real-time trade monitoring system with .NET Core, leveraging AWS SQS and Kafka for distributed message processing, achieving 100K messages/second throughput and sub-50ms trading feedback latency.",
            "Implemented and maintained third party payment integrations, preventing duplicate transactions through Redis-based distributed locking, achieving 99.99% processing accuracy.",
            "Participated in developing a CRM frontend application using Vue 3 with TypeScript.",
            "Utilized vue-i18n for internationalization, which enabled successful market expansion into Vietnam and Japan.",
            "Engineered reusable layout container components utilizing Vue.js slot interfaces and ElementUI",
            // "Strengthened the reliability by implementing comprehensive unit testing for core components using vue-test-utils",
            "Implemented responsive layouts with rem/flexbox and Sass, enabling white-label customization for third-party sales.",
          ],
        },
      ],
    },
    {
      hidden: false,
      company: "Meituan",
      address: "Beijing, China",
      titles: [
        {
          hidden: false,
          position: "Software Development Engineer Intern",
          duration: "June. 2022 - Sept. 2022",
          taskList: [
            "Improved the speed of image encoding of x265 in C++. Utilizing SSE/AVX and NEON instruction set to accelerate the computation in image processing and provide JavaScript APIs to generate data packing size, which speeded up the image encoding time by 60%",
            "Integrated the improved x265 into our libheif library, wrote Shell scripts on Linux to get optimal encoding parameters for converting .jpeg images to .heif version on Meituan App. This optimization reduces encoding time by 36% and compression ratio by 22% compared to the current .webp format version",
            "Applied optimized image format into Meituan App using React Native",
          ],
        },
      ],
    },
    {
      hidden: false,
      company: "University of Science and Technology Beijing",
      address: "Beijing, China",
      titles: [
        {
          hidden: false,
          position: "Research Assistant",
          duration: "Sep. 2019 - Jun. 2021",
          taskList: [
            "Modeling for Degradation of Biomedical Polymer: Designed the phase image feature recognition algorithm to recognize the phase image features, and characteristic “island” structures. Implemented the chain scission model by Monte Carlo (MC) method. Designed the Boundary Extension Algorithm (NNBE) to identify features with hole (block) and crack (strip) shapes and utilized these features to establish strength models for different phases.  Published two publications for this research",
          ],
        },
      ],
    },
    {
      hidden: false,
      company: "Institute of Automation, Chinese Academy of Sciences",
      address: "Beijing, China",
      titles: [
        {
          hidden: false,
          position: "Research Assistant",
          duration: "Jan. 2019 - Apr. 2019",
          taskList: [
            "A Flower-Image Search System Based on DL: Implemented the overall design of multi-layer convolutional neural networks and fully connected neural networks using TensorFlow. Optimized the convolutional layers by back-propagation algorithm and applied forward-propagation and back-propagation functions to the fully connected layer. The overall accuracy of the recognition was 95.66%. The project was granted a patent (AU2019100352A4)",
          ],
        },
      ],
    },
  ],
};
