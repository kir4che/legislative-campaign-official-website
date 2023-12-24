const Banner: React.FC = () => {
  return (
    <div className='pt-6'>
      <h1 className='text-5.5xl tracking-wider text-center lg:space-x-6 lg:text-8xl gradient-text'>
        <span>台灣的明天</span>
        <br className='lg:hidden' />
        <span>喵先鋪路</span>
      </h1>
      <div className='flex flex-col items-center justify-center mt-4 mb-7 md:items-baseline md:flex-row md:space-x-4'>
        <h3 className='w-48 lg:w-64 py-2 text-xl lg:text-2.5xl font-bold text-center text-white uppercase rounded-xl bg-text-color'>2024 立委參選人</h3>
        <div className="flex items-center justify-center px-4 py-3 space-x-4 shadow rounded-2xl">
          <span className='px-3 lg:px-3.5 py-1 lg:py-2.5 text-2xl lg:text-3xl font-black text-white rounded-full bg-gradient-to-r from-gradient-color-1 to-gradient-color-2'>3</span>
          <span className='text-2.5xl font-bold lg:text-4xl text-primary-color'>喵立翰 Miao LiHan</span>
        </div>
      </div>
      <img src="assets/images/banner.png" alt="advocate" className='w-[497.5px] md:w-[556px] lg:w-[552px] mx-auto' />
      <div className='space-x-6 text-white bg-primary-color px-3.5 whitespace-nowrap'>
        <span className='text-6xl leading-none font-MantouSans'>為喵星人，護台灣！</span>
        <span className='text-6xl leading-none font-MantouSans'>從喵的眼中，看見台灣</span>
        <span className='text-6xl leading-none font-MantouSans'>喵的未來，人的希望</span>
      </div>
    </div>
  )
}

export default Banner