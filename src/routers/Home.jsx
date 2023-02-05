import './Home.css';

function Home() {
  return (
    <>
      <div>
        <video autoPlay muted loop>
          <source src="background.mp4" type="video/mp4" />
        </video>
        <div className='mx-auto max-w-5xl flex items-center' style={{ height: "75vh" }}>
          <div>
            <p className="text-8xl font-black py-5">一飛，<br className='block md:hidden sm:hidden' />沖天。</p>
            <p className="text-2xl font-bold">由成大學生組成的火箭開發團隊</p>
          </div>
        </div>
      </div>
      <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl p-10 my-10' style={{ color: "#383838" }}>
        <p className='text-2xl font-bold'>合作夥伴</p>
        <div className='flex items-center'>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className='bg-zinc-100 shadow-lg mx-auto max-w-5xl rounded-xl p-10 text-center' style={{ color: "#383838" }}>
        <p className='text-xl font-bold text-center pb-5'>聯絡我們</p>
        <p className='py-1'>國立成功大學 太空推進研究社</p>
        <p className='py-1 font-medium'>Institute of Space Propulsion, NCKU</p>
        <div className='flex items-center mx-auto justify-center gap-10 pt-5 pb-10'>
          <a href="https://www.facebook.com/ispncku" target="_blank"><i className="gg-facebook"></i></a>
          <a href="https://www.instagram.com/ispncku/" target="_blank"><i className="gg-instagram"></i></a>
          <a href="https://github.com/NCKU-ISP" target="_blank"><i className="gg-code-slash"></i></a>
          <a href="mailto:aerogroup2020@gmail.com" target="_blank"><i className="gg-mail"></i></a>
        </div>
        <p className='py-1'>701401 臺南市東區大學路一號</p>
        <p className='py-1'>國立成功大學 光復校區 學生活動中心4樓</p>
      </div>
    </>
  );
}

export default Home;

