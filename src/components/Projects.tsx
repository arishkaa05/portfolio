import React from 'react'
import TextMover from './TextMover'
import { Project, ProjectProps } from './Project'

const Projects = () => {
  const projects: ProjectProps[] = [
    // {
    //   title: 'Moves App',
    //   link: 'https://master--movies-app-vue3.netlify.app/',
    //   img: 'moves-app.png',
    //   description: 'IMDB Top 250'
    // },
    {
      title: 'Apple iPhone Website',
      link: 'https://mellow-daifuku-88ad86.netlify.app/',
      img: 'apple.png',
      description: "Inspired by the Apple's iPhone 15 Pro page"
    },
    {
      title: 'Messenger',
      link: 'https://astonishing-gumdrop-be61c3.netlify.app/',
      img: 'messenger.png',
      description: 'Web aplication "messenger"'
    }
  ]
  return (
    <div className='bg-neutral-200 overflow-hidden h-[100vh]] flex'>
      {window.innerWidth >= 768 && (<div className='border-r border-gray-500'>
        <TextMover word="PROJECTS" direction="vertical" />
      </div>
      )}
      <section className='p-10 md:flex px-10 items-center gap-4 w-full'>
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <Project project={project} isEven={isEven} />
          );
        })}
      </section>
    </div >
  )
}

export default Projects