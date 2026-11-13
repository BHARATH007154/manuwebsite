
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  baseHref: "/",
  criticalCssPlans: [[1,"/styles-RQVWFNRN.css",588,["a","img","button","input","textarea","select"],[],[[5,":root","{--navy-950:#06131f;--navy-900:#0b1c2d;--navy-800:#102c44;--navy-700:#173d5e;--orange-500:#f28c28;--orange-400:#ff9f43;--sand-100:#f4f7fb;--white:#ffffff;--text-soft:#cbd7e3;--line:rgba(255, 255, 255, .1);--shadow-soft:0 20px 45px rgba(3, 10, 17, .28)}",[0]],[5,"*","{box-sizing:border-box}",[0]],[5,"html","{scroll-behavior:smooth}",[0]],[37,"body","{margin:0;min-height:100vh;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;background:linear-gradient(180deg,#071823,#0c1f2d);color:var(--white)}",[0],["segoe ui","tahoma","geneva","verdana","sans-serif"]],[5,1,"{color:inherit;text-decoration:none}",[3]],[5,2,"{max-width:100%;display:block}",[3]],[5,[3,4,5,6],"{font:inherit}",[3,3,3,3]]]]],
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/company-profile"
  },
  {
    "renderMode": 2,
    "route": "/request-quote"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "relativeRedirect": true,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    "index.csr.html": {size: 1202, hash: "127b7b97f628118a", text: () => import("./assets-chunks/index_csr_html.mjs").then(m => m.default)},
    "index.server.html": {size: 945, hash: "7c21a5a8c839e698", text: () => import("./assets-chunks/index_server_html.mjs").then(m => m.default)},
    "company-profile/index.html": {size: 24337, hash: "ca1e318b32fb58d3", text: () => import("./assets-chunks/company-profile_index_html.mjs").then(m => m.default)},
    "about/index.html": {size: 25420, hash: "4c0c02cd5e467b56", text: () => import("./assets-chunks/about_index_html.mjs").then(m => m.default)},
    "index.html": {size: 36412, hash: "3a93bb296f36ce4f", text: () => import("./assets-chunks/index_html.mjs").then(m => m.default)},
    "request-quote/index.html": {size: 20717, hash: "eb75ccfe3aba565d", text: () => import("./assets-chunks/request-quote_index_html.mjs").then(m => m.default)}
  },
};
