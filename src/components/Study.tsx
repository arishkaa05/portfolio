import React from 'react'
import { StudyHeader } from './StudyHeader'
import EducationBlock, { EducationProps } from './EducationBlock'

const education: EducationProps[] = [
  {
    years: '2020 - 2024',
    place: 'Saint Petersburg',
    university: 'Saint Petersburg Electrotechnical University "LETI"',
    speciality: 'Informatics and Computer Science',
    img: 'leti.svg'
  }, 
  {
    years: '2022- 2023',
    place: 'Saint Petersburg',
    university: 'Saint Petersburg Electrotechnical University "LETI"',
    speciality: 'Big Data Mining',
    img: 'leti.svg'
  }, 
  {
    years: '2024',
    place: 'Yandex',
    university: 'Yandex Practicum',
    speciality: 'Middle frontend developer',
    img: 'yandex.png'
  }, 
  {
    years: '2024 - 2026',
    place: 'Almetyevsk',
    university: 'Higher School of Oil',
    speciality: 'Commercial software development technologies',
    img: 'agtu.webp'
  }
]

const Study = () => {
  return (
    <> 
        <div className='w-[calc(100vw-72px)] bg-pink'>
          
          <StudyHeader word={'study'} isReverse={false} />
          <StudyHeader word={'study'} isReverse={true} />
          <StudyHeader word={'study'} isReverse={false} /> 
          <div className='bg-neutral-800'>
            <h2 className='text-4xl px-5 py-3 tracking-wider font-bold  text-neutral-100 uppercase'>study</h2>
          </div>
        {education.map((item) => { 
          return (
            <EducationBlock education={item} />
          );
        })}
        </div> 
    </>
  )
}

export default Study