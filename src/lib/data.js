import {
    IconBrandGithub,
    IconBrandX,
    IconSend,
    IconHome,
    IconBriefcase,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Github } from "lucide-react";

export const links = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Experience",
        href: "#experience",
    },
    {
        name: "Contact",
        href: "#contact",
    },
]

export const links2 = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#home",
    },

    {
        title: "Projects",
        icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#projects",
    },
    {
        title: "Experience",
        icon: (
            <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#experience",
    },
    {
        title: "Contact",
        icon: (
            <IconSend className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#contact",
    },
    {
        title: "Twitter",
        icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://x.com/warrior_aashuu",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.github.com/codeaashu",
    },
];

export const experience = [
    {
        title: "Bachelor in Computer Application",
        dates: "2022-2025 ",
        location: "Aryabhatta Knowledge University",
        description:
            "Pursuing BCA in Computer Application. Represented my college in Smart India Hackathon Finals 2025. Won 2024 Innovation award. Served as AICTE and Ideometer Amabassador for 2024-2025.",
        image:
            "/AKU.png",
    }, {
        title: "Open Source Contributor",
        dates: "2025",
        location: "Google Summer of Code",
        description:
            "Participated in Google Summer of Code 2025. Contributed to The Honeynet Organization. Worked on various projects related to web development and cloud computing.",
        image:
            "GSOC.png",

    }, {
        title: "Product Engineer",
        dates: "Aug 2024 - Current",
        location: "LPS Brands, Dubai",
        description:
            "Working as a Product Engineer at LPS Brands, Dubai. Working on various projects Owned end-to-end product building from wireframes to deployment.",
        image:
            "LPS.png",
    },
]