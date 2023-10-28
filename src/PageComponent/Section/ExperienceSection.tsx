import { H2, Paragraf, Section } from '@/component'
import { dataExperience } from '@/data/dataHome'
import { ResponsiveProps } from '@/utils/type-pagecomponent'
import Link from 'next/link'
import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'

const ExperienceSection:React.FC<ResponsiveProps> = ({isMobile}) => {
  return (
    <div className='mt-20'>
        <Section className={` space-y-10`}>
            {
                dataExperience.map((list, idx) => (
                    <Section key={idx}>
                        <Section className={` ${isMobile? "" : " flex flex-row gap-10"}`}>
                            <Paragraf className={` text-gray-400 w-64 text-sm mt-1`}>{list.date}</Paragraf>
                            <Section className={` space-y-2`}>
                                {/* Title */}
                                <Section className={`flex space-x-1`}>
                                    <H2 className={` text-[18px]`}>
                                        {list.title}
                                    </H2>
                                    <span>.</span>
                                    <Link href={list.link}>
                                        <div className='flex space-x-1 items-center'>
                                            <H2 className={` text-[18px]`}>
                                                {list.company}
                                            </H2>
                                            <FiArrowUpRight className={` text-lg`}/>
                                        </div>
                                    </Link>
                                </Section>
                                {/* Position */}
                                <Paragraf className={` text-[16px] text-gray-400`}>
                                    {list.position}
                                </Paragraf>
                                <Paragraf className={` text-[14px] text-gray-400`}>
                                    {list.desc}
                                </Paragraf>
                                <Section className={` flex flex-wrap gap-3`}>
                                    {
                                        list.techstack.map((list: any) => (
                                            <Paragraf key={idx} className={` bg-[#37F2DC20] text-[14px] py-2.5 px-6 rounded-full text-[#37F2DC] `}>
                                                {list}
                                            </Paragraf>
                                        ))
                                    }
                                </Section>
                            </Section>
                        </Section>
                    </Section>
                ))
            }
        </Section>   
    </div>
  )
}

export default ExperienceSection