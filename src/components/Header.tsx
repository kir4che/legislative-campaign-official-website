const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-[3.4vw] py-6 mx-auto ">
      <a href='/' className="flex items-center space-x-2">
        <img src="assets/logo.png" alt="logo" />
        <span className='text-2xl font-bold text-primary-color'>喵立翰 Miao Li-Han</span>
      </a>
      <nav className="flex-wrap items-center justify-center hidden ml-auto mr-auto space-x-6 lg:flex">
        <a href='#advocate'>候選人主張</a>
        <a href='#event'>最新活動</a>
        <a href='#issue'>政策議題</a>
        <a href='#support'>小額捐款</a>
        <a href='#service'>民眾服務信箱</a>
      </nav>
      <ul className="items-center hidden space-x-4 sm:flex">
        <a href='#'>
          <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/facebook-new.png" alt="facebook" />
        </a>
        <a href='#'>
          <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/instagram-new.png" alt="instagram" />
        </a>
        <a href='#'>
          <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/youtube-play.png" alt="youtube" />
        </a>
      </ul>
    </header>
  )
}

export default Header