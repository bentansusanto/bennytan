import React from 'react'
import Image from 'next/image'
import { H2, Paragraf, Section } from '@/component'
import { ResponsiveProps } from '@/utils/type-pagecomponent'
import { dataMenu, dataSideBar } from '@/data/dataSideBar'
import Link from 'next/link'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import Profile from '@/assets/img/profile.webp'

type SocialProps = {
    icon: any;
    link: string;
}

const social_media: SocialProps[] = [
    {
        icon: <BsInstagram/>,
        link: "https://instagram.com"
    },
    {
        icon: <BsGithub/>,
        link: "https://instagram.com/bentansusanto"
    },
    {
        icon: <BsLinkedin/>,
        link: "https://linkedin.com"
    }
]

const SidNav:React.FC<ResponsiveProps> = ({isMobile}) => {
  return (
    <div className="block ml-36">
        <div className="sticky w-full h-auto top-20">
            <Section className={` space-y-3`}>
                <H2 className={`${isMobile? "" : " text-5xl"} font-bold`}>
                    {dataSideBar.title}
                </H2>      
                <Paragraf className={`${isMobile? "" : " text-xl"} font-medium`}>
                    {dataSideBar.subtitle}
                </Paragraf>      
                <Paragraf className={`${isMobile? "" : " w-[70%] text-[16px]"} text-gray-400`}>
                    {dataSideBar.description}
                </Paragraf>
                <div className={` flex space-x-4 pt-5`}>
                    {
                        social_media.map((list, idx) => (
                            <Link key={idx} href={list.link} className={` hover:text-white text-gray-400 duration-300 transition-all text-xl`}>
                                {list.icon}
                            </Link>
                        ))
                    }
                </div>      
            </Section>
            <ul className={` space-y-5 my-14`}>
                {
                    dataMenu.map((list, idx) => (
                        <li key={idx} className='flex items-center space-x-5'>
                            <div className='bg-gray-400 w-12 h-[2px]'/>
                            <Link className='text-gray-400' href={list.link}>{list.page}</Link>
                        </li>
                    ))
                }
            </ul>
            <Section className={``}>
                <Image src={Profile} alt="profile" className={` w-[50%] -ml-9`}/>
            </Section>
        </div>
    </div>
  )
}

export default SidNav