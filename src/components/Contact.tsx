import React from 'react'

export interface ContactProps { title: string; link: string };


const Contact: React.FC<{ contact: ContactProps }> = ({ contact }) => {

  return (
    <a key={contact.title} target="_blank" href={contact.link}>
      <img src={'./../logo/' + contact.title + '.png'} alt={contact.title} className='rounded-full max-w-max h-[16px] w-[16px]' />
    </a>
  )
}

export default Contact