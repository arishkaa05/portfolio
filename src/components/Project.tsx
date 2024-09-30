import React from 'react' 

export interface ProjectProps {
  title: string
  link: string
  img: string
  description: string
};

export const Project: React.FC<{ project: ProjectProps, isEven: boolean }> = ({ project, isEven }) => { 
  const Descriprion = () => {
    return (
      <div className=''>
        <h3 className='text-pink font-semibold py-1'>Featured</h3>
        <h2 className='font-moret font-bold text-2xl mb-2'>{project.title}</h2>
        <p className='font-thin text-sm text-gray-400 mb-4'>&mdash;{project.description}</p>
      </div>
    )
  }
  return (
    <a target='_blank' href={project.link} className='w-1/2'>
      {isEven ? (
        <>
          <div className={`'hover:rotate-3 cursor-pointer transition-transform duration-300 h-[300px] bg-no-repeat mb-3`}
            style={{
              backgroundImage: `url(./projects/${project.img})`,
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}></div> 
          <Descriprion />
        </>
      ) : (
        <>
          <Descriprion />
          <div className={`'hover:rotate-3 cursor-pointer transition-transform duration-300 h-[300px] bg-no-repeat mb-3`}
            style={{
              backgroundImage: `url(./projects/${project.img})`,
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}></div>
        </>
      )}
    </a>
  );
}
