import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { Experience } from "@/types";

export default function Experience() {
  const userData = useAppSelector((state) => state.UserReducer);
  const userExperience = userData.experience;
  return (
    userData && (
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Experience
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
          <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
            {/* Experience card */}
            {userExperience?.map((exp, idx) => (
              <>
                <ExperienceCard key={idx} exp={exp} />
                {idx === userExperience.length - 1 ? null : (
                  <div className="divider-container flex flex-col items-center -mt-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                      <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

const ExperienceCard = ({ exp }: { exp: Experience }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {exp.year}
      </h1>
      <h1 className="font-semibold text-xl">{exp.title}</h1>
      <a href={exp.companyLink} className="text-gray-500">
        {exp.company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{exp.desc}</p>
    </div>
  );
};
