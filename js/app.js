const md = new markdownit();
const content_url = "https://hackmd.io/ZFK4GqIhShOGS3gisMvPfg/download";
// const content_url = "/data/content.md";
const md_rule = {
  tab: /[\r\n]---[\r\n]/,
  section: /[\r\n]----[\r\n]/,
  identifier1: /#\s\S+\s/,
  identifier2: /##\s\S+\s/,
  identifier3: /###\s\S+\s/,
  title_filter1: /#\s\S+/,
  title_filter2: /##\s.+/,
  list: /-\s[^\[\]]\S.+/g,
  link: /-\s\[\S.+\]\(\S.+\)/g,
  link_text: /\[\S.+\]/g,
  link_url: /\(\S.+\)/g,
};

const app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    loading: true,
    content: "",
    nav_link: [],
    menu_drawer: null,
    title: {
      zh: "成大太空推進研究社",
      en: "NCKU Institute of Space Propulsion",
      en_short: "NCKU ISP",
    },
    logo: "ISP_logo.svg",
    groups: {},
    main_content: []
  },
  async created() {
    const res = await fetch(content_url);
    this.content = await res.text();
    this.init();
    this.loading = false;
  },
  updated() {
    this.go(decodeURI(window.location.hash).slice(1));
  },
  methods: {
    init() {
      const self = this;
      /* tabs and nav bar */
      const tabs = this.content.split(md_rule.tab).slice(1);
      tabs.forEach((tab_content) => {
        const title = tab_content.match(md_rule.identifier1)[0].slice(2, -1);
        let sub_content = tab_content.split(md_rule.section);
        let sub_nav_link = [];

        sub_content.forEach((sub, i) => {
          let sub_title = sub.match(md_rule.title_filter2);
          if (sub_title != null) {
            let text = sub_title[0].slice(3);
            let prefix = self.link_generator(title, text, sub);
            let link = `${prefix}${text}`
            link = link.replace(/ /g, "_").replace(/\//g, "_");
            sub_nav_link.push({ text: text, link: link });

            let html = md.render(sub);
            self.main_content.push({
              id: link,
              html: html
            })

          } else {
            self.main_content.push({
              id: `_${Math.floor(Math.random() * 100)}`,
              html: md.render(sub)
            })

            const addresses = [...sub.matchAll(md_rule.list)].flat()
            const links = [...sub.matchAll(md_rule.link)].flat()

            addresses.forEach(i => {
            })

            links.forEach(ll => {
              const text = ll.match(md_rule.link_text).pop().slice(1, -1);
              const url = ll.match(md_rule.link_url).pop().slice(1, -1);
            })

          }
        });

        self.nav_link.push({
          text: title,
          link: title,
          children: sub_nav_link,
        });
      });
    },
    go(target) {
      if (target.length > 0) {
        this.$vuetify.goTo(`#${target}`, {
          duration: 1000,
          offset: 0,
          easing: 'easeInOutCubic',
        })
        window.location.hash = target;
      }
    },
    link_generator(text, sub_text, content) {
      switch (text) {
        case "團隊介紹":
          return "main_";
        case "各組介紹":
          return "group_";
        case "活動":
          return "activity_";
        case "專案計畫":
          return "project_";
        case "歷屆作品":
          return "achievement_";
        default:
        return "_";
      }
    },
  },
});
