import { H2, Paragraf, Section } from "@/component";
import { dataProject } from "@/data/dataHome";
import { ResponsiveProps } from "@/utils/type-pagecomponent";
import React from "react";

const ProjectSection: React.FC<ResponsiveProps> = ({ isMobile }) => {
  return (
    <Section className={` mt-28`}>
      <Section className={` space-y-10`}>
        {dataProject.map((list, idx) => (
          <Section key={idx} className={` space-y-2`}>
            <div className={` bg-gray-400 w-full h-56`} />
            <Section className={` space-y-2`}>
              <H2 className={` ${isMobile ? "" : "text-xl"} font-semibold`}>
                {list.name_project}
              </H2>
              <Paragraf className={` ${isMobile ? "" : "text-[14px]"} pb-3`}>
                {list.sort_desc}
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
        ))}
      </Section>
    </Section>
  );
};

export default ProjectSection;
