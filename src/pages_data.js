import splash_logo from './routers/projects/Splash/splash_logo.png';

const teams = [
  {
    name: {
      zh: '推進',
      en: 'Propulsion'
    },
    description: ''
  },
  {
    name: {
      zh: '航電',
      en: 'Avionics'
    },
    description: ''
  },
  {
    name: {
      zh: '結構',
      en: 'Structure'
    },
    description: ''
  },
];

const projects_list = [
  {
    cover: splash_logo,
    url: '/projects/splash',
    name: 'SPLASH 水火箭計劃',
    description: '團隊的雛型成型於新生的「航太公司」分組，我們最初即選擇以水火箭作為研究項目是基於安全性、成本、製作難度等考量，後期我們也決議以水火箭作為「2021 臺灣黑客松 Taiwan Space Hackathon」的參賽項目。',
    teams: null
  },
  {
    cover: null,
    url: '/projects/uno',
    name: 'UNO 固態發動機',
    description: '',
    teams: teams[0]
  },
  {
    cover: null,
    url: '/projects/thrust_testing',
    name: '水平推力測試臺',
    description: '',
    teams: teams[2]
  },
  {
    cover: null,
    url: '/projects/isp555',
    name: 'Avionics ISP555',
    description: '',
    teams: teams[1]
  },
  {
    cover: null,
    url: '/projects/isp8266',
    name: 'Avionics ISP8266',
    description: '',
    teams: teams[1]
  },
  {
    cover: null,
    url: '/projects/isp32',
    name: 'Avionics ISP32',
    description: '',
    teams: teams[1]
  },
];

export { teams, projects_list };