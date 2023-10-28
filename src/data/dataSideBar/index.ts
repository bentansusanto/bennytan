import { MenuProps, SideProps } from "@/utils/type-pagecomponent";

export const dataSideBar: SideProps = {
    title: "Benny Tan Susanto",
    subtitle: "Software Engineering",
    description: "I enjoy learning and creating digital products, and I have experience in web.",
    image: "profile.webp"
}

export const dataMenu: MenuProps[] =[
    {
        page: "About",
        link: "#about"
    },
    {
        page: "Experience",
        link: "#experience"
    },
    {
        page: "Project",
        link: "#project"
    },
]