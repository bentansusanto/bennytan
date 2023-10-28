import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface ResponsiveProps {
    isMobile: any;
}

export type MenuProps = {
    page: string;
    link: string;
}

export type SideProps = {
    subtitle: string;
    title: string;
    description: string;
    image: string;
}

export type AboutProps = {
    description: string;
}

export type ExperienceProps = {
    title: string;
    company: string;
    link: string;
    position: string;
    date: string;
    desc: string;
    techstack: string[];
}

export type ProjectProps = {
    name_project: string;
    slug: string,
    techstack: string[];
    sort_desc: string;
    desc: string[];
    link_project: string;
    link_detail: string;
    thumbnail: string;
    image: string[];
}
