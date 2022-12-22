import { Outlet, Link } from "react-router-dom";

function App() {
  const NavItem = ({ text, url }) => <Link to={url} className="font-medium mx-3 inline">{text}</Link>;
  const NavItemData = [
    {
      text: 'About Us',
      url: '/about'
    },
    {
      text: 'Teams',
      url: '/Teams'
    },
    {
      text: 'Mission',
      url: '/mission'
    },
    {
      text: 'Projects',
      url: '/Projects'
    },
  ];

  return (
    <>
      <div className="mx-auto pt-2">
        <div className='mx-auto max-w-5xl flex items-center'>
          <Link to="/" className="text-2xl font-medium">
            <img src="/logo.svg" className="h-20 p-4 inline right" />
            NCKU ISP
          </Link>
          <div className='mr-0 ml-auto hidden lg:block xl:block 2xl:block'>
            {NavItemData.map(item => <NavItem text={item.text} url={item.url} />)}
            <a
              className="font-semibold mx-3 p-2 rounded-md inline bg-blue-500 hover:bg-blue-600"
              href="https://donate2.ncku.edu.tw/index.php?c=donate&m=step1&usename=%E5%A4%AA%E7%A9%BA%E6%8E%A8%E9%80%B2%E7%A0%94%E7%A9%B6%E7%A4%BE&usetype=ut9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Us
            </a>
          </div>
          <div className='mr-0 ml-auto block lg:hidden xl:hidden 2xl:hidden'>
            <button className="font-semibold mx-3 p-2 rounded-md inline">
              <i className="gg-menu-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className='p-5'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
