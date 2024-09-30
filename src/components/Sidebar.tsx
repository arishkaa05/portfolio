import Contact, { ContactProps } from "./Contact"

const Sidebar = () => {
  const contacts: ContactProps[] = [
    {
      title: 'telegram',
      link: 'http://t.me/pokazatskaya'
    },
    {
      title: 'email',
      link: 'mailto:avpokazatskaya@gmail.com'
    },
    {
      title: 'github',
      link: 'https://github.com/arishkaa05'
    },
    {
      title: 'instagram',
      link: 'http://www.instagram.com/_arishkaa___'
    }
  ]

  return (
    <div className='bg-neutral-900 sticky left-0 top-0 h-screen justify-between flex flex-col py-8'>
      <div className='flex h-full items-center px-3'>
        <img src='./me.jpeg' alt="me" className='rounded-full max-w-max	 h-[48px] w-[48px]' />
      </div>
      <div className='gap-3 flex flex-col items-center'>
        {contacts.map(contact => {
          return (
            <Contact contact={contact} />
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar 