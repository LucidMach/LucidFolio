const projects = [
  {
    title: "VOIT",
    date: "June,2021",
    roles: ["UI Designer", "FullStack Developer"],
    type: "UI",
    links: [
      { icon: "github", link: "https://github.com/LucidMach/VOIT" },
      { icon: "open", link: "https://voit.herokuapp.com/mic" },
    ],
    desc: "WebUI for Voice Controlled IoT Applications",
    pic: "/assets/VOIT.png",
    stack: ["node"],
  },
  {
    title: "ColorFilter",
    date: "Aug,2021",
    roles: ["UI Designer", "FullStack Developer"],
    type: "UI",
    links: [
      { icon: "github", link: "https://github.com/lucidmach/colorfilter" },
      { icon: "open", link: "https://color-filter.netlify.app" },
    ],
    desc: "An Image Color Channel Manipulation App",
    pic: "/assets/colorfilter.png",
    stack: ["numpy", "react", "node"],
  },
  {
    title: "ColorSwatch",
    date: "May,2021",
    roles: ["UI Designer", "FrontEnd Developer"],
    type: "UI",
    links: [
      { icon: "github", link: "https://github.com/LucidMach/Color-Swatch" },
      { icon: "open", link: "https://colorswatch.netlify.app/" },
    ],
    desc: "A Systematic Color Combination Generator",
    pic: "/assets/colorswatch.png",
    stack: ["react"],
  },
  {
    title: "UnSplash-Pro",
    date: "June,2021",
    roles: ["UI Designer", "FrontEnd Developer"],
    type: "UI",
    links: [
      { icon: "github", link: "https://github.com/LucidMach/UnSplash-Pro" },
      { icon: "open", link: "https://unsplashpro.netlify.app/" },
    ],
    desc: "An Easier to Embed/Download/Copy-Paste Images UI for UnSpash's API",
    pic: "/assets/unsplashpro.png",
    stack: ["react"],
  },
  {
    title: "Cloudy",
    date: "May,2021",
    roles: ["UI Designer", "FrontEnd Developer"],
    type: "UI",
    links: [
      { icon: "github", link: "https://github.com/LucidMach/Cloudy" },
      { icon: "open", link: "https://cloudy-ow.netlify.app/" },
    ],
    desc: "A Minimal Weather App built on top of Open Weather API ",
    pic: "/assets/cloudy.png",
    stack: ["react"],
  },
  {
    title: "L",
    date: "Jan,2021",
    roles: ["Graphic Designer"],
    type: "wallpapers",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/L.png",
      },
    ],
    desc: "Lew Lawiet from DeathNote",
    pic: "/assets/L.png",
    stack: ["figma"],
  },
  {
    title: "Itachi Konoha",
    date: "March,2021",
    roles: ["Graphic Designer"],
    type: "wallpapers",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/itachi.png",
      },
    ],
    desc: "Finnaly a Wallpaper showing Itachi's Love for Konoha ",
    pic: "/assets/itachi.png",
    stack: ["figma"],
  },
  {
    title: "Zenitsu",
    date: "July,2021",
    roles: ["Graphic Designer"],
    type: "wallpapers",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/zenitsu.png",
      },
    ],
    desc: "Zenitsu without his Fear ",
    pic: "/assets/zenitsu.png",
    stack: ["figma"],
  },
  {
    title: "LightCycle",
    date: "Dec,2020",
    roles: ["Graphic Designer"],
    type: "wallpapers",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/lightcycle-blue.png",
      },
    ],
    desc: "LightCycle AKA The Tron Bike ",
    pic: "/assets/lightcycle-blue.png",
    stack: ["figma"],
  },
  {
    title: "Kenny X Levi",
    date: "Jan,2021",
    roles: ["Graphic Designer"],
    type: "wallpapers",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/kennyxlevi.png",
      },
    ],
    desc: "If Kenny and Levi fought on the Same Side",
    pic: "/assets/kennyxlevi.png",
    stack: ["figma"],
  },
  {
    title: "LucidMach",
    date: "Sept,2021",
    roles: ["Logo Designer"],
    type: "logos",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/LoGo.png",
      },
    ],
    desc: "The Logo on this Website",
    pic: "/LoGo.png",
    stack: ["figma"],
  },
  {
    title: "Fayura",
    date: "Nov,2020",
    roles: ["Logo Designer"],
    type: "logos",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/fayura.png",
      },
    ],
    desc: "An Invite-Only Team of Highy TechSavvy Individuals",
    pic: "/assets/fayura.png",
    stack: ["figma"],
  },
  {
    title: "LibVion",
    date: "Aug,2021",
    roles: ["Logo Designer"],
    type: "logos",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/libvion.png",
      },
    ],
    desc: "A Book Sharing based Dating App",
    pic: "/assets/libvion.png",
    stack: ["figma"],
  },
  {
    title: "HeadPhone Holder",
    date: "Aug,2021",
    roles: ["Designer", "3D Modeller"],
    type: "3D",
    links: [
      {
        icon: "thingiverse",
        link: "https://www.thingiverse.com/thing:4932042",
      },
    ],
    desc: "A Headphon Holder that clips on to a cupboard/closet",
    pic: "/assets/headphoneholder.png",
    stack: ["fusion360"],
  },
  {
    title: "Essential Tool Holder",
    date: "Aug,2021",
    roles: ["Designer", "3D Modeller"],
    type: "3D",
    links: [
      {
        icon: "thingiverse",
        link: "https://www.thingiverse.com/thing:4935274",
      },
    ],
    desc: "An Ultra Minimalistic Tool Holder for Ender 3 Series 3D Printers",
    pic: "/assets/toolholder.png",
    stack: ["fusion360"],
  },
  {
    title: "De-WebCam",
    date: "Aug,2021",
    roles: ["Designer", "3D Modeller"],
    type: "3D",
    links: [
      {
        icon: "thingiverse",
        link: "https://www.thingiverse.com/thing:4944231",
      },
    ],
    desc: "An Ultra Minimalistic Physical Cover to Block Web Cam Access for PRIVACY REASONS",
    pic: "/assets/dewebcam.png",
    stack: ["fusion360"],
  },
];

export default projects;
