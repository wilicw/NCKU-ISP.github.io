import './App.css';

function App() {

  const NavItem = ({ text, url }) => <button className="font-medium mx-3 inline">{text}</button>;

  return (
    <>
      <video autoPlay muted loop>
        <source src="background.mp4" type="video/mp4" />
      </video>
      <div className="mx-auto pt-2">
        <div className='mx-auto max-w-5xl flex items-center'>
          <img src="/logo.svg" className="h-20 p-5 inline right" />
          <div className="text-2xl font-medium">NCKU ISP</div>
          <div className='mr-0 ml-auto'>
            <NavItem text="About Us" />
            <NavItem text="Teams" />
            <NavItem text="Mission" />
            <NavItem text="Projects" />
            <button className="font-semibold mx-3 p-2 rounded-md inline bg-blue-500 hover:bg-blue-600">Support Us</button>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-5xl flex items-center' style={{ height: 500 }}>
        <div>
          <p className="text-8xl font-extrabold py-5">一飛，沖天。</p>
          <p className="text-2xl font-bold">一個由成大學生組成的火箭開發團隊</p>
        </div>
      </div>
    </>
  );
}

export default App;
