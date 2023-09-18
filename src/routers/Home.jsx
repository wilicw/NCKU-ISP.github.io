import "./Home.css";
import logo_CPL from "../logos/CPL.gif";
import logo_NCKU from "../logos/ncku.jpg";
import logo_NCKUIAA from "../logos/nckuiaa.png";
import logo_epotech from "../logos/epotech.jpg";
import logo_cmsteel from "../logos/cmsteel.png";
import logo_ohmplus from "../logos/ohmplus.jpg";
import logo_HackMD from "../logos/HackMD.svg";
import logo_nckues from "../logos/nckues.png";
import logo_epolab from "../logos/epolab.jpg";
import logo_tanko from "../logos/tanko.jpg";
import logo_hw from "../logos/hw.svg";
import logo_aeas from "../logos/aeas.png";

function Logo({ url, label, logo_image }) {
  return <a
    className="p-0 md:w-1/5 w-48 block m-auto"
    href={url}
    target="_blank"
  >
    <img src={logo_image} title={label} />
  </a>;
}

function Home() {
  return (
    <>
      <div>
        <video autoPlay muted loop>
          <source src="background.mp4" type="video/mp4" />
        </video>
        <div
          className="mx-auto max-w-5xl flex items-center"
          style={{ height: "70vh" }}
        >
          <div>
            <p className="text-7xl font-black py-5">
              <i
                className="gg-quote inline-block h-12"
                style={{ transform: "scale(2)" }}
              >
              </i>
              GO ABOVE
              <br />
              AND BEYOND
              <i
                className="gg-quote inline-block"
                style={{ transform: "scale(2)" }}
              >
              </i>
            </p>
            <p className="text-2xl font-bold">由成大學生組成的火箭開發團隊</p>
          </div>
        </div>
      </div>
      <div
        className="bg-white mx-auto max-w-5xl rounded-xl p-10 my-10"
        style={{ color: "#383838" }}
      >
        <p className="text-2xl pb-3 font-bold">指導單位</p>
        <hr className="border-sky-400 w-10 border-b-2 rounded-sm" />
        <div className="flex items-center pt-5 pb-10 gap-5 flex-wrap">
          <Logo url="https://sites.google.com/gs.ncku.edu.tw/yungscpl" logo_image={logo_CPL} label="國立成功大學燃燒與推進實驗室" />
          <Logo url="https://web.ncku.edu.tw/" logo_image={logo_NCKU} label="國立成功大學" />
          <Logo url="https://iaa.ncku.edu.tw/" logo_image={logo_NCKUIAA} label="國立成功大學航空太空工程學系" />
        </div>
        <p className="text-2xl pb-3 font-bold">合作夥伴</p>
        <hr className="border-sky-400 w-10 border-b-2 rounded-sm" />
        <div className="flex items-center pt-5 gap-5 flex-wrap">
          <Logo url="http://www.epotechcorp.com/" logo_image={logo_epotech} label="莘茂複合材料股份有限公司" />
          <Logo url="https://hackmd.io/" logo_image={logo_HackMD} label="HackMD" />
          <Logo url="https://www.cmsteel.com.tw/" logo_image={logo_cmsteel} label="澄茂企業股份有限公司" />
          <Logo url="http://fund.es.ncku.edu.tw/esfd/" logo_image={logo_nckues} label="國立成功大學工程科學文教基金會" />
          <Logo url="https://www.aeas.space/" logo_image={logo_aeas} label="AEAS 逆熵航太學會" />
          <Logo url="https://www.epolab.com/" logo_image={logo_epolab} label="大格化學工業股份有限公司" />
          <Logo url="https://www.tanko.com.tw/" logo_image={logo_tanko} label="天鋼事業股份有限公司" />
          <Logo url="https://www.ohmplus.com/" logo_image={logo_ohmplus} label="歐姆佳科技股份有限公司" />
          <Logo url="mailto:alma.hwvision@gmail.com" logo_image={logo_hw} label="柏拓有限公司" />
        </div>
        <br />
        <p className="text-2xl pb-3 font-bold">個人贊助</p>
        <hr className="border-sky-400 w-10 border-b-2 rounded-sm" />
        <div className="flex items-center pt-5 gap-5 flex-wrap justify-center">
          <p>蔡淑櫻</p>
          <p>楊智量</p>
          <p>江俊慧</p>
          <p>吳承翰</p>
          <p>黃仁志</p>
          <p>蘇尹廷</p>
        </div>
        <div className="flex items-center pt-5 gap-5 flex-wrap justify-center">
          <p>徐麗珍</p>
          <p>朱盈禔</p>
          <p>鄭舜之</p>
          <p>饒振奇</p>
          <p>吳敏求</p>
          <p>黃偉祥</p>
        </div>
        <p className="text-xs font-bold text-gray-400 text-right">*此清單依據合作時間排序</p>
      </div>
    </>
  );
}

export default Home;
