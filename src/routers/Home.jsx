import './Home.css';

function Home() {
  return (
    <>
      <video autoPlay muted loop>
        <source src="background.mp4" type="video/mp4" />
      </video>
      <div className='mx-auto max-w-5xl flex items-center' style={{ height: 500 }}>
        <div>
          <p className="text-8xl font-extrabold py-5">一飛，<br className='block md:hidden sm:hidden'/>沖天。</p>
          <p className="text-2xl font-bold">一個由成大學生組成的火箭開發團隊</p>
        </div>
      </div>
    </>
  );
}

export default Home;

