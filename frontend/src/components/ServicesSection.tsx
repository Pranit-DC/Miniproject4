"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Endpoint Security Solutions",
      description:
        "Protect your devices and networks from malware, ransomware, and other cyber threats with our comprehensive endpoint security solutions. Safeguard sensitive data and ensure business continuity with real-time threat detection and response.",
      icon: (
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_80)">
            <path
              d="M50.25 22.3333H47.4584V16.75C47.4584 9.04499 41.205 2.79166 33.5 2.79166C25.795 2.79166 19.5417 9.04499 19.5417 16.75V22.3333H16.75C13.6792 22.3333 11.1667 24.8458 11.1667 27.9167V55.8333C11.1667 58.9042 13.6792 61.4167 16.75 61.4167H50.25C53.3209 61.4167 55.8334 58.9042 55.8334 55.8333V27.9167C55.8334 24.8458 53.3209 22.3333 50.25 22.3333ZM33.5 47.4583C30.4292 47.4583 27.9167 44.9458 27.9167 41.875C27.9167 38.8042 30.4292 36.2917 33.5 36.2917C36.5709 36.2917 39.0834 38.8042 39.0834 41.875C39.0834 44.9458 36.5709 47.4583 33.5 47.4583ZM42.1542 22.3333H24.8459V16.75C24.8459 11.9762 28.7263 8.09582 33.5 8.09582C38.2738 8.09582 42.1542 11.9762 42.1542 16.75V22.3333Z"
              fill="#54F4FC"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_1_80">
              <rect width="67" height="67" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Network Security Solutions",
      description:
        "Secure your network infrastructure from unauthorized access and data breaches with our advanced network security solutions. Defend against evolving cyber threats and maintain network integrity with robust firewalls.",
      icon: (
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.4166 11.1667V9.77082C61.4166 5.91832 58.29 2.79166 54.4375 2.79166C50.585 2.79166 47.4583 5.91832 47.4583 9.77082V11.1667C45.9229 11.1667 44.6666 12.4229 44.6666 13.9583V25.125C44.6666 26.6604 45.9229 27.9167 47.4583 27.9167H61.4166C62.952 27.9167 64.2083 26.6604 64.2083 25.125V13.9583C64.2083 12.4229 62.952 11.1667 61.4166 11.1667ZM59.1833 11.1667H49.6916V9.77082C49.6916 7.14666 51.8133 5.02499 54.4375 5.02499C57.0616 5.02499 59.1833 7.14666 59.1833 9.77082V11.1667ZM52.8183 33.5C52.93 34.4212 53.0416 35.3425 53.0416 36.2917C53.0416 42.0983 50.8083 47.3746 47.1791 51.3387C46.4533 49.0775 44.3875 47.4583 41.875 47.4583H39.0833V39.0833C39.0833 37.5479 37.827 36.2917 36.2916 36.2917H19.5416V30.7083H25.125C26.6604 30.7083 27.9166 29.4521 27.9166 27.9167V22.3333H33.5C36.5708 22.3333 39.0833 19.8208 39.0833 16.75V9.65916C36.4312 8.82166 33.6395 8.37499 30.7083 8.37499C15.2983 8.37499 2.79163 20.8817 2.79163 36.2917C2.79163 51.7017 15.2983 64.2083 30.7083 64.2083C46.1183 64.2083 58.625 51.7017 58.625 36.2917C58.625 35.3425 58.5691 34.4212 58.4854 33.5H52.8183ZM27.9166 58.4296C16.8895 57.0617 8.37496 47.6817 8.37496 36.2917C8.37496 34.5608 8.59829 32.9137 8.96121 31.2946L22.3333 44.6667V47.4583C22.3333 50.5292 24.8458 53.0417 27.9166 53.0417V58.4296Z"
            fill="#54F4FC"
          ></path>
        </svg>
      ),
    },
    {
      title: "Data Encryption Services",
      description:
        "Encrypt sensitive data at rest and in transit to protect confidentiality and integrity. Our data encryption services provide end-to-end encryption solutions to safeguard your most valuable assets from unauthorized access and cyber attacks.",
      icon: (
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2021_27)">
            <path
              d="M68.3973 74.12V60.7445L80.1558 67.433L68.3973 74.12ZM94.5513 56.534C94.0203 54.5825 92.5203 53.0735 90.6138 52.5395L90.5733 52.5305C85.7838 51.9215 80.2443 51.5735 74.6223 51.5735C74.0508 51.5735 73.4808 51.5765 72.9123 51.584L72.9993 51.5825C72.5163 51.5765 71.9478 51.572 71.3763 51.572C65.7543 51.572 60.2118 51.92 54.7712 52.5935L55.4222 52.5275C53.4767 53.072 51.9767 54.5795 51.4562 56.492L51.4472 56.531C50.8472 59.6945 50.5052 63.335 50.5052 67.055C50.5052 67.187 50.5052 67.319 50.5067 67.4495V67.4285C50.5067 67.5395 50.5052 67.6715 50.5052 67.8035C50.5052 71.5235 50.8487 75.1625 51.5042 78.692L51.4472 78.326C51.9782 80.2775 53.4782 81.7865 55.3847 82.3205L55.4252 82.3295C60.2148 82.9385 65.7543 83.2865 71.3763 83.2865C71.9463 83.2865 72.5163 83.2835 73.0863 83.276L72.9993 83.2775C73.4823 83.2835 74.0523 83.288 74.6223 83.288C80.2458 83.288 85.7868 82.94 91.2273 82.2665L90.5763 82.3325C92.5233 81.7895 94.0233 80.2805 94.5453 78.368L94.5543 78.329C95.1528 75.1655 95.4948 71.525 95.4948 67.8065C95.4948 67.6745 95.4948 67.5425 95.4933 67.412V67.4315C95.4933 67.3205 95.4948 67.1885 95.4948 67.0565C95.4948 63.3365 95.1513 59.6975 94.4958 56.168L94.5513 56.534Z"
              fill="#54F4FC"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2021_27">
              <rect width="67" height="67" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Incident Response and Forensics",
      description:
        "Rapidly detect, respond to, and recover from security incidents with our incident response and forensic services. Minimize the impact of breaches and maintain business continuity with our expert team of cybersecurity professionals.",
      icon: (
        <svg
          width="94"
          height="94"
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.93 47.5897C50.8148 47.5897 53.9508 44.4538 53.9508 40.569C53.9508 36.6842 50.8148 33.5482 46.93 33.5482C43.0452 33.5482 39.9092 36.6842 39.9092 40.569C39.9092 44.4538 43.0452 47.5897 46.93 47.5897ZM46.93 49.93C42.6239 49.93 38.5987 51.1001 35.1585 53.1361C33.731 53.9552 32.8885 55.5232 32.8885 57.1614V61.6313H60.9715V57.1614C60.9715 55.5232 60.129 53.9786 58.7015 53.1361C55.2613 51.1001 51.2361 49.93 46.93 49.93ZM68.5305 40.92L72.86 39.118C70.0049 32.3079 64.5521 26.8317 57.742 24L55.94 28.3295C61.6034 30.7165 66.1435 35.2566 68.5305 40.92ZM37.92 28.3295L36.118 24C29.3079 26.8551 23.8551 32.3079 21 39.118L25.3295 40.92C27.7165 35.2566 32.2566 30.7165 37.92 28.3295ZM25.3295 58.94L21 60.742C23.8551 67.5521 29.3079 73.0283 36.118 75.86L37.92 71.5305C32.2566 69.1435 27.7165 64.6034 25.3295 58.94ZM55.94 71.5305L57.742 75.86C64.5521 73.0049 70.0283 67.5521 72.86 60.742L68.5305 58.94C66.1435 64.6034 61.6034 69.1435 55.94 71.5305Z"
            fill="#49D4DB"
          ></path>
        </svg>
      ),
    },
    {
      title: "Security Awareness Training",
      description:
        "Empower your employees with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educate your workforce on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.",
      icon: (
        <svg
          width="94"
          height="94"
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.7083 52.875C60.7083 60.7084 50.9167 66.5834 50.9167 72.4584H43.0833C43.0833 66.5834 33.2917 60.7084 33.2917 52.875C33.2917 45.3159 39.4408 39.1667 47 39.1667C54.5592 39.1667 60.7083 45.3159 60.7083 52.875ZM50.9167 76.375H43.0833V82.25H50.9167V76.375ZM74.4167 50.9167C74.4167 57.4967 72.1058 63.4892 68.2283 68.2284L73.79 73.79C79.0383 67.6409 82.25 59.6509 82.25 50.9167C82.25 40.185 77.4325 30.5892 69.8733 24.1267L64.3117 29.6884C70.4608 34.7017 74.4167 42.3784 74.4167 50.9167ZM62.6667 19.5834L47 3.91669V15.6667C27.5342 15.6667 11.75 31.4509 11.75 50.9167C11.75 59.6509 14.9617 67.6409 20.21 73.79L25.7717 68.2284C21.8942 63.4892 19.5833 57.4967 19.5833 50.9167C19.5833 35.7984 31.8817 23.5 47 23.5V35.25L62.6667 19.5834Z"
            fill="#54F4FC"
            fillOpacity="0.87"
          ></path>
        </svg>
      ),
    },
    {
      title: "Cloud Security Solutions",
      description:
        "Secure your cloud-based applications and data storage with our cloud security solutions. Ensure confidentiality, integrity, and availability in the cloud environment with advanced security measures tailored to your specific needs",
      icon: (
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2021_69)">
            <path
              d="M54.0467 28.0287C52.1204 18.3974 43.6617 11.167 33.5 11.167C25.4321 11.167 18.425 15.7453 14.9354 22.4453C6.5325 23.3387 0 30.4574 0 39.0837C0 48.3241 7.50958 55.8337 16.75 55.8337H53.0417C60.7467 55.8337 67 49.5803 67 41.8753C67 34.5053 61.2771 28.5312 54.0467 28.0287Z"
              fill="#49D4DB"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2021_69">
              <rect width="67" height="67" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section
      className="box-border p-28 m-0 text-center"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="box-border p-0 m-0 mb-12 text-4xl font-semibold text-white"
      >
        Services we offer
      </h2>
      <div className="box-border grid gap-20 p-0 m-0 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
