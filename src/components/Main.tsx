import '../styles.css';
import Skils from './Skils';

const Main = () => {
  return (
    <div className='w-[calc(100vw-72px)] h-[100vh] bg-zinc-800 bg-no-repeat	bg-cover p-8' style={{
      backgroundImage: "url('./../fog.webp')",
      animation: "move-bg 20s linear infinite"
    }}>
      <section className='sm:flex justify-between'>
        <h3 className='font-whisper text-neutral-200 text-3xl'>Pokazatskaya Arina</h3>
        <Skils />
      </section>
      <section className="flex-col uppercase font-moret align-center flex h-full items-center justify-center text-neutral-200 w-full">
        <h1 className='tracking-wider mb-6 leading-tight border-y p-4  border-neutral-200 text-center md:text-8xl text-3xl'>Frontend<br />developer</h1>
        <h2 className='tracking-wider lg:text-5xl texg-lg'>portfolio</h2>
      </section>

    </div>
  )
}

export default Main