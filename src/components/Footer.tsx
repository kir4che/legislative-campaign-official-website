const Footer: React.FC = () => {
  return (
    <div className="grid py-16 pl-4 lg:grid-cols-2 sm:pl-9 lg:pl-0 bg-bg-color-2 lg:place-items-center">
      <div className='mb-6 lg:mb-0'>
        <div className="flex items-center space-x-2">
          <span className='text-white font-black px-2.5 py-0.5 rounded-full bg-gradient-to-r from-gradient-color-1 to-gradient-color-2 text-xl'>3</span>
          <span className='text-2xl font-bold text-primary-color'>喵立翰 Miao Li-Han</span>
        </div>
        <ul className="flex items-center my-4 space-x-2">
          <a href='#' className='rounded-full bg-white p-1.5'>
            <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/facebook-new.png" alt="facebook-new" />
          </a>
          <a href='#' className='rounded-full bg-white p-1.5'>
            <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/instagram-new.png" alt="facebook-new" />
          </a>
          <a href='#' className='rounded-full bg-white p-1.5'>
            <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/youtube-play.png" alt="facebook-new" />
          </a>
        </ul>
        <p className="text-sm">© 2023 喵立翰 Miao Li-Han 版權所有</p>
      </div>
      <div>
        <h4 className='mb-4 font-bold'>競選總部</h4>
        <ul className='text-base'>
          <li>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</li>
          <li>電話：(02) 888-5678</li>
          <li>電子郵件地址：meowoffice@linmeow.tw</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer