import { Paragraf } from '@/component'
import { dataAbout } from '@/data/dataHome'
import { ResponsiveProps } from '@/utils/type-pagecomponent'
import React from 'react'

const AboutSection:React.FC<ResponsiveProps> = ({isMobile}) => {
  return (
    <div>
        <Paragraf className={` text-gray-300 ${isMobile? "" : " text-[18px]"}`}>
            {dataAbout.description}
        </Paragraf>
    </div>
  )
}

export default AboutSection