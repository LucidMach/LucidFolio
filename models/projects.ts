interface Projects {
  title: string;
  date: string;
  roles: string[];
  type: string;
  links: {
    icon: string;
    link: string;
  }[];
  desc: string;
  pic: string;
  stack: string[];
}

const fireStorageURL = (folder: "projects" | "stack", file: string): string =>
  `https://firebasestorage.googleapis.com/v0/b/lucidfolio-c4f29.appspot.com/o/${folder}%2F${file}.png?alt=media`;

const projects: Projects[] = [
  {
    title: "VOIT",
    date: "June,2021",
    roles: ["UI Designer", "FullStack Developer"],
    type: "UI",
    links: [
      { icon: "github", link: "https://github.com/LucidMach/VOIT" },
      { icon: "open", link: "https://voit.herokuapp.com/mic" },
    ],
    desc: "WebUI template for Voice Controlled IoT Applications",
    pic: fireStorageURL("projects", "VOIT"),
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
    pic: fireStorageURL("projects", "colorfilter"),
    stack: ["numpy", "react", "node"],
  },
  {
    title: "ColorSwatch",
    date: "May,2021",
    roles: ["UI Designer", "FrontEnd Developer"],
    type: "tools",
    links: [
      { icon: "github", link: "https://github.com/LucidMach/Color-Swatch" },
      { icon: "open", link: "https://colorswatch.netlify.app/" },
    ],
    desc: "A Systematic Color Combination Generator",
    pic: fireStorageURL("projects", "colorswatch"),
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
    // pic: "/assets/unsplashpro.png",
    pic: fireStorageURL("projects", "unsplashpro"),
    stack: ["react"],
  },
  {
    title: "ViewPort-Sizes",
    date: "Nov,2021",
    roles: ["UI Designer", "FrontEnd Developer"],
    type: "tools",
    links: [
      { icon: "github", link: "https://github.com/LucidMach/ViewPort-Sizes" },
      { icon: "open", link: "https://viewport-sizes.netlify.app/" },
    ],
    desc: "A tool that enables designers to get wireframe sizes of initial device for better RWD",
    // pic: "/assets/viewport-sizes.png",
    pic: fireStorageURL("projects", "viewport-sizes"),
    stack: ["react", "typescript"],
  },
  {
    title: "L",
    date: "Jan,2021",
    roles: ["Graphic Designer"],
    type: "art",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/L.png",
      },
      {
        icon: "opensea",
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/74581509028102701182483494008541574736928693971239183494526073912182538502244",
      },
    ],
    desc: "Lew Lawiet from DeathNote",
    // pic: "/assets/L.png",
    pic: fireStorageURL("projects", "L"),
    stack: ["figma"],
  },
  {
    title: "Itachi Konoha",
    date: "March,2021",
    roles: ["Graphic Designer"],
    type: "art",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/itachi.png",
      },
      {
        icon: "opensea",
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/74581509028102701182483494008541574736928693971239183494526073911083026874468",
      },
    ],
    desc: "Finnaly a Wallpaper showing Itachi's Love for Konoha ",
    // pic: "/assets/itachi.png",
    pic: fireStorageURL("projects", "itachi"),
    stack: ["figma"],
  },
  {
    title: "Zenitsu",
    date: "July,2021",
    roles: ["Graphic Designer"],
    type: "art",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/zenitsu.png",
      },
      {
        icon: "opensea",
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/74581509028102701182483494008541574736928693971239183494526073914381561757796",
      },
    ],
    desc: "Zenitsu without his Fear",
    // pic: "/assets/zenitsu.png",
    pic: fireStorageURL("projects", "zenitsu"),
    stack: ["figma"],
  },
  {
    title: "LightCycle",
    date: "Dec,2020",
    roles: ["Graphic Designer"],
    type: "art",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/lightcycle-blue.png",
      },
      {
        icon: "opensea",
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/74581509028102701182483494008541574736928693971239183494526073915481073385572",
      },
    ],
    desc: "LightCycle AKA The Tron Bike ",
    // pic: "/assets/lightcycle-blue.png",
    pic: fireStorageURL("projects", "lightcycle-blue"),
    stack: ["figma"],
  },
  {
    title: "Kenny X Levi",
    date: "Jan,2021",
    roles: ["Graphic Designer"],
    type: "art",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/kennyxlevi.png",
      },
      {
        icon: "opensea",
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/74581509028102701182483494008541574736928693971239183494526073913282050130020",
      },
    ],
    desc: "If Kenny and Levi fought on the Same Side",
    // pic: "/assets/kennyxlevi.png",
    pic: fireStorageURL("projects", "kennyxlevi"),
    stack: ["figma"],
  },
  {
    title: "Falcon-5",
    date: "Nov, 2021",
    desc: "Paul Walker Themed Low Capacity SpaceX Falcon-9",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/rocket.png",
      },
    ],
    // pic: "/assets/rocket.png",
    pic: fireStorageURL("projects", "rocket"),
    roles: ["Concept Artist", "3D Modeler"],
    stack: ["blender"],
    type: "renders",
  },
  {
    title: "Just DeskTop",
    date: "Nov, 2021",
    desc: "Desktop MockUp for LoGo/UI Designs",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/desktop.png",
      },
    ],
    // pic: "/assets/desktop.png",
    pic: fireStorageURL("projects", "desktop"),
    roles: ["3D Modeler"],
    stack: ["blender"],
    type: "renders",
  },
  {
    title: "Cheese",
    date: "Oct, 2021",
    desc: "Realistic SubSurface Rendering",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/cheese.png",
      },
    ],
    // pic: "/assets/cheese.png",
    pic: fireStorageURL("projects", "cheese"),
    roles: ["3D Modeler"],
    stack: ["blender"],
    type: "renders",
  },
  // {
  //   title: "LucidMach",
  //   date: "Sept,2021",
  //   roles: ["Logo Designer"],
  //   type: "logo",
  //   links: [
  //     {
  //       icon: "download",
  //       link: "https://github.com/LucidMach/portfolio/tree/master/public/LoGo.png",
  //     },
  //   ],
  //   desc: "The Logo on this Website",
  //   pic: "/LoGo.png",
  //   stack: ["figma"],
  // },
  {
    title: "Fayura",
    date: "Nov,2020",
    roles: ["Logo Designer"],
    type: "logo",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/fayura.png",
      },
    ],
    desc: "An Invite-Only Team of Highy TechSavvy Individuals",
    // pic: "/assets/fayura.png",
    pic: fireStorageURL("projects", "fayura"),
    stack: ["figma"],
  },
  {
    title: "LibVion",
    date: "Aug,2021",
    roles: ["Logo Designer"],
    type: "logo",
    links: [
      {
        icon: "download",
        link: "https://github.com/LucidMach/portfolio/tree/master/public/assets/libvion.png",
      },
    ],
    desc: "A Book Sharing based Dating App",
    // pic: "/assets/libvion.png",
    pic: fireStorageURL("projects", "libvion"),
    stack: ["figma"],
  },
  {
    title: "HeadPhone Holder",
    date: "Aug,2021",
    roles: ["Designer", "3D Modeller"],
    type: "things",
    links: [
      {
        icon: "thingiverse",
        link: "https://www.thingiverse.com/thing:4932042",
      },
    ],
    desc: "A Headphon Holder that clips on to a cupboard/closet",
    // pic: "/assets/headphoneholder.png",
    pic: fireStorageURL("projects", "headphoneholder"),
    stack: ["fusion360"],
  },
  {
    title: "Essential Tool Holder",
    date: "Aug,2021",
    roles: ["Designer", "3D Modeller"],
    type: "things",
    links: [
      {
        icon: "thingiverse",
        link: "https://www.thingiverse.com/thing:4935274",
      },
    ],
    desc: "An Ultra Minimalistic Tool Holder for Ender 3 Series 3D Printers",
    // pic: "/assets/toolholder.png",
    pic: fireStorageURL("projects", "toolholder"),
    stack: ["fusion360"],
  },
  {
    title: "De-WebCam",
    date: "Aug,2021",
    roles: ["Designer", "3D Modeller"],
    type: "things",
    links: [
      {
        icon: "thingiverse",
        link: "https://www.thingiverse.com/thing:4944231",
      },
    ],
    desc: "An Ultra Minimalistic Physical Cover to Block Web Cam Access for PRIVACY REASONS",
    // pic: "/assets/dewebcam.png",
    pic: fireStorageURL("projects", "dewebcam"),
    stack: ["fusion360"],
  },
];

export default projects;
