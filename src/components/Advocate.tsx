const Advocate: React.FC = () => {
  return (
    <article id="advocate" className='py-16 px-[4vw] lg:py-26 lg:px-[8.5vw] bg-bg-color-2'>
      <section className='flex flex-col bg-white lg:flex-row rounded-4xl'>
        <div className='px-6 py-10 lg:px-10 lg:py-12 lg:w-1/2'>
          <p className='w-40 py-2 mx-auto mb-2 text-base font-bold text-center text-white uppercase rounded-xl bg-text-color'>ADVOCATE</p>
          <h1 className='text-5.5xl lg:text-6xl text-center gradient-text'>候選人主張</h1>
          <h4 className='lg:text-2.5xl my-8 lg:my-6 font-bold'>我堅信 ! 藉由推動更完善的<span className='text-primary-color'>貓咪福利</span>和相關政策，更是間接地投資於<span className='text-primary-color'>台灣的未來</span>。</h4>
          <p className='lg:text-lg'>畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。</p>
        </div>
        <img src="assets/images/advocate.png" alt="advocate" className='object-cover h-[514px] lg:h-auto lg:w-1/2 rounded-b-4xl lg:rounded-e-4xl' />
      </section>
    </article>
  )
}

export default Advocate