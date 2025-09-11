import gameName from "@/constant/gameName";

export default function useSupplierLogo(logoName?: string | null) {
  let logo = "";
  let bgInput = "";
  let banner = "";
  let bgItem = "";
  let navigatorBg = "";
  let bgBtn = "";
  let bgTitle = "";
  let pagnigatorBg = "";
  let colorTitleBtn = "";
  let colorTitle = "";

  switch (logoName) {
    case gameName.PG:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/cdaa048de3fc4639865ba5bb2e16716d.png";
      bgItem = "#ff1c4f";
      bgInput = "#ff1c4f";
      navigatorBg = "#333333";
      bgTitle = "#333333";
      bgBtn = "#ff1c4f";
      pagnigatorBg = "#ff1c4f";
      break;
    case gameName.Jili:
      bgTitle =
        "linear-gradient(to bottom, #fff468 0, #f3b720 33%, #eaa000 66%)";
      banner = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/0187cb0a16794c37bede82782918c158.jpg";
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/8274db893ce4403a95d743c56296f7bb.png";
      bgItem = "rgb(243, 183, 32)";
      navigatorBg = "rgb(243, 183, 32)";
      bgInput =
        "linear-gradient(to bottom, #fff468 0, #f3b720 33%, #eaa000 66%)";
      bgBtn = "linear-gradient(to bottom, #fff468 0, #f3b720 33%, #eaa000 66%)";
      pagnigatorBg = "rgb(243, 183, 32)";
      colorTitle = "#f3b720";

      break;

    case gameName.TP:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/ee8780118c154c40b2431cee74112420.png";
      bgInput =
        "linear-gradient(to bottom, #11dac9 10%, #389dff 55%, #0550bb 100%)";
      banner = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/75a52b26f5064eacb547196a3e0c7464.jpg";
      bgItem = "#0550bb";
      navigatorBg = "#0550bb";
      bgTitle = "#0550bb";
      bgBtn =
        "linear-gradient(to bottom, #11dac9 10%, #389dff 55%, #0550bb 100%)";
      pagnigatorBg = "";
      break;

    case gameName.TPCARD:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/46be868d0e364c7faaa618e9dadc23fa.png";
      bgInput =
        "linear-gradient(to bottom, #11dac9 10%, #389dff 55%, #0550bb 100%)";
      banner = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/75a52b26f5064eacb547196a3e0c7464.jpg";
      bgItem = "#0550bb";
      navigatorBg = "#0550bb";
      bgTitle = "#0550bb";
      bgBtn =
        "linear-gradient(to bottom, #11dac9 10%, #389dff 55%, #0550bb 100%)";
      pagnigatorBg = "";
      break;

    case gameName.PP:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/7483d913f7e6481c81b3ab83ea9be678.png";
      bgInput = "#ff800d";
      banner = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/ba3b21578bf448ca96da995afa5bb33b.png";
      bgItem = "#ff800d";
      navigatorBg = "#ff800d";
      bgTitle = "#ff800d";
      bgBtn = "#333";
      pagnigatorBg = "#ff800d";
      colorTitleBtn = "#ff800d";
      break;

    case gameName.CQ9:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/94daf6160e7847b7918bab8fa01246d1.png";
      bgInput = "#fddb00";
      banner = "";
      bgItem = "#fddb00";
      navigatorBg = "#f2941a";
      bgTitle = "#f2941a";
      bgBtn = "#f2941a";
      pagnigatorBg = "#fddb00";
      break;

    case gameName.MG:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/54d94cf35d264c9e8f8f2f5337e44bd2.png";
      bgInput = "#32b5e9";
      banner = "";
      bgItem = "#32b5e9";
      navigatorBg = "#32b5e9";
      bgTitle = "#32b5e9";
      bgBtn = "linear-gradient(45deg, #21e519, #32b5e9)";
      pagnigatorBg = "#32b5e9";
      break;

    case gameName.JDB:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/bfe70be8a32f4bbab041dedd7dd8ab4c.png";
      bgInput = "#ffc600";
      banner = "";
      bgItem = "#ffc600";
      navigatorBg = "#60bb00";
      bgTitle = "#60bb00";
      bgBtn = "#60bb00";
      pagnigatorBg = "#ffc600";
      break;

    case gameName.SPRIBE:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/9cd7625d853c45f3b8c5f73d80356fc7.png";
      bgInput = "#dbdeee";
      banner = "";
      bgItem = "#2e2691";
      navigatorBg = "#dbdeee";
      bgTitle = "#dbdeee";
      bgBtn = "#453ade";
      pagnigatorBg = "#2e2691";
      break;

    case gameName.FC:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/a142667ae6e5427fa3b8511bd93bb2cb.png";
      bgInput = "#000";
      banner = "";
      bgItem = "#ffaa00";
      navigatorBg = "#000";
      bgTitle = "#000";
      bgBtn = "#fa0";
      pagnigatorBg = "#ffaa00";
      break;

    case gameName.VA:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/2863d4f0329d4021b905f056cf261293.png";
      bgInput = "#33b5e9";
      banner = "";
      bgItem = "#33b5e9";
      navigatorBg = "#33b5e9";
      bgTitle = "#33b5e9";
      bgBtn = "#33b5e9";
      pagnigatorBg = "#33b5e9";
      break;

    case gameName.BNG:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/5521b703484f413fb3a1fa1a0cc9775f.png";
      bgInput = "#3ce897";
      banner = "";
      bgItem = "#3ce897";
      navigatorBg = "#3ce897";
      bgTitle = "#3ce897";
      bgBtn = "#3ce897";
      pagnigatorBg = "#3ce897";
      break;

    case gameName.KA:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/8275032c69894592aa674899b3076623.png";
      bgInput = "linear-gradient(#f2622d, #bc0007)";
      banner = "";
      bgItem = "linear-gradient(#f2622d, #bc0007)";
      navigatorBg = "#bc0007";
      bgTitle = "#bc0007";
      bgBtn = "#fff";
      pagnigatorBg = "#bc0007";
      colorTitleBtn = "#c30c0c";
      break;

    case gameName.PS:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-portal-lobby/ps.png";
      bgInput = "#333";
      banner = "";
      bgItem = "";
      navigatorBg = "";
      bgTitle = "";
      bgBtn;
      pagnigatorBg = "";
      break;

    case gameName.R88:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/f920378bd94a4800a0beb319bd23be70.png";
      bgInput = "linear-gradient(to right, #9846ff, #e92dff)";
      banner = "";
      bgItem = "linear-gradient(to bottom, #9846ff, #e92dff)";
      navigatorBg = "";
      bgTitle = "linear-gradient(to right, #9846ff, #e92dff)";
      bgBtn = "#fd0";
      pagnigatorBg = "#9846ff";
      colorTitleBtn = "#000";
      colorTitle = "#9846ff";
      break;

    case gameName.PT:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-portal-lobby/pt.png";
      bgInput = "#312f6e";
      banner = "";
      bgItem = "#312f6e";
      navigatorBg = "#312f6e";
      bgTitle = "#eee";
      bgBtn = "#312f6e";
      pagnigatorBg = "#312f6e";
      colorTitle = "#312f6e";
      break;

    case gameName.FTG:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/787fc7e6d7644ec7a38108a44cc76c31.png";
      bgInput = "#64127e";
      banner = "";
      bgItem = "#64127e";
      navigatorBg = "#64127e";
      bgTitle = "#64127e";
      bgBtn = "#9828bc";
      pagnigatorBg = "#64127e";
      break;

    case gameName.FTGCARD:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/2c7b165199ef4e3798f0dd7ba9bb0242.png";
      bgInput = "#64127e";
      banner = "";
      bgItem = "#64127e";
      navigatorBg = "#64127e";
      bgTitle = "#64127e";
      bgBtn = "#9828bc";
      pagnigatorBg = "#64127e";
      break;

    case gameName.NE:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-portal-lobby/ne.png";
      bgInput = "#68b022";
      banner = "";
      bgItem = "";
      navigatorBg = "";
      bgTitle = "";
      bgBtn;
      pagnigatorBg = "";
      break;

    case gameName.HB:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-portal-lobby/hb.png";
      bgInput = "#fe2949";
      banner = "";
      bgItem = "#fe2949";
      navigatorBg = "#fe2949";
      bgTitle = "#fe2949";
      bgBtn = "linear-gradient(to right, #ef3c54, #f89729)";
      pagnigatorBg = "#fe2949";
      break;

    case gameName.GEM:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-portal-lobby/gem.png";
      bgInput = "#ffce77";
      banner = "";
      bgItem = "";
      navigatorBg = "";
      bgTitle = "";
      bgBtn;
      pagnigatorBg = "";
      break;

    case gameName.T1:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/e58ec4b1d30448d5a7bebfed9a2e24f5.png";
      bgInput = "#37d7f9";
      banner = "";
      bgItem = "#37d7f9";
      navigatorBg = "#37d7f9";
      bgTitle = "#37d7f9";
      bgBtn = "#e1eefe";
      pagnigatorBg = "#37d7f9";
      colorTitleBtn = "#1b2435";
      break;

    case gameName.AFB:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/da99cb254c6646e3902bf907b30455d2.png";
      bgInput = "#ecb522";
      banner = "";
      bgItem = "#ecb522";
      navigatorBg = "#ecb522";
      bgTitle = "#ecb522";
      bgBtn = "#ffe08f";
      pagnigatorBg = "#ecb522";
      break;

    case gameName.NS:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/15e0bb6b5ef04fa4a406233d6e0b5031.png";
      bgInput = "#ecb522";
      banner = "";
      bgItem = "#ecb522";
      navigatorBg = "#ecb522";
      bgTitle = "#ecb522";
      bgBtn = "#ffe686";
      pagnigatorBg = "#ecb522";
      break;

    case gameName.NEXT:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/15e0bb6b5ef04fa4a406233d6e0b5031.png";
      bgInput = "#ecb522";
      banner = "";
      bgItem = "#ecb522";
      navigatorBg = "#ecb522";
      bgTitle = "#ecb522";
      bgBtn = "#ffe686";
      pagnigatorBg = "#ecb522";
      break;

    case gameName.MW:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-portal-lobby/mw.png";
      bgInput = "linear-gradient(#c870f6, #8d54f6)";
      banner = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/03fb9851214e414da221bc7d67108493.png";
      bgItem = "linear-gradient(#c870f6, #8d54f6)";
      navigatorBg = "#8d54f6";
      bgTitle = "#8d54f6";
      bgBtn = "linear-gradient(#c870f6, #8d54f6)";
      pagnigatorBg = "#8d54f6";
      break;

    case gameName.YB:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/590d52b5f90e4e03a45fadfca53a5a66.png";
      bgInput = "#fc0";
      banner = "";
      bgItem = "#fc0";
      navigatorBg = "#fc0";
      bgTitle = "#fc0";
      bgBtn = "#fc0";
      pagnigatorBg = "#fc0";
      break;

    case gameName.ASKME:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/508a783003be4765bc2469b5c01a50c7.png";
      bgInput = "#14c751";
      banner = "";
      bgItem = "#ffe401";
      navigatorBg = "#d9d9d9";
      bgTitle = "#d9d9d9";
      bgBtn = "#14c751";
      pagnigatorBg = "#14c751";
      break;

    case gameName.RTG:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/5a1221a6c5a24ec49ab9d58fb9f2c2b1.png";
      bgInput = "#ad0200";
      banner = "";
      bgItem = "#ad0200";
      navigatorBg = "#ad0200";
      bgTitle = "#ad0200";
      bgBtn = "#ad0200";
      pagnigatorBg = "#ad0200";
      break;

    case gameName.RTGCARD:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/5a1221a6c5a24ec49ab9d58fb9f2c2b1.png";
      bgInput = "#ad0200";
      banner = "";
      bgItem = "#ad0200";
      navigatorBg = "#ad0200";
      bgTitle = "#ad0200";
      bgBtn = "#ad0200";
      pagnigatorBg = "#ad0200";
      break;

    case gameName.EVOPLAY:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-portal-lobby/evoplay.png";
      bgInput = "#4396f2";
      banner = "";
      bgItem = "";
      navigatorBg = "";
      bgTitle = "";
      bgBtn;
      pagnigatorBg = "";
      break;

    case gameName.LIVE22:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-portal-lobby/live22.png";
      bgInput =
        "linear-gradient(to bottom, #779cf8 10%, #8db8f9 55%, #b1dcfa 100%)";
      banner = "";
      bgItem = "";
      navigatorBg = "";
      bgTitle = "";
      bgBtn;
      pagnigatorBg = "";
      break;

    case gameName.V8:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/2a99c7ba321144b388e0fcbb4bc8c07b.png";
      bgInput = "#ffd050";
      banner = "";
      bgItem = "#ffd050";
      navigatorBg = "#000";
      bgTitle = "#000";
      bgBtn = "#fff770";
      pagnigatorBg = "#000";
      break;

    case gameName.KM:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/0f0a46514f9248f69f0e43625116746c.png";
      bgInput = "#fda803";
      banner = "";
      bgItem = "linear-gradient(#edd171, #eeaf45)";
      navigatorBg = "#fda803";
      bgTitle = "#fda803";
      bgBtn = "#fda803";
      pagnigatorBg = "#fda803";
      break;

    case gameName.GP:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/7d17b4b6d7b642b7b5000bd121433a16.png";
      bgInput = "linear-gradient(to bottom, #00a0fe 0%, #00b1ff 100%)";
      banner = "#ededed";
      bgItem = "linear-gradient(to bottom, #00a0fe 0%, #00b1ff 100%)";
      navigatorBg = "";
      bgTitle = "linear-gradient(to bottom, #00a0fe 0%, #00b1ff 100%)";
      bgBtn = "linear-gradient(to bottom, #00a0fe 0%, #00b1ff 100%)";
      pagnigatorBg = "#3593fc";
      colorTitle = "#00b1ff";
      break;

      case gameName.BG:
        logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/biggaming.png";
        bgInput = "linear-gradient(to bottom, #008ff1, #0033c1)";
        banner = "#ededed";
        bgItem = "linear-gradient(to right, #0033c1, #008ff1)";
        navigatorBg = "";
        bgTitle = "linear-gradient(to right, #0033c1, #008ff1)";
        bgBtn = "linear-gradient(to bottom, #00a0fe 0%, #00b1ff 100%)";
        pagnigatorBg = "#3593fc";
        colorTitle = "#00b1ff";
        break;

    case gameName.YGR:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/07e5fe60e541441093aebd808aa8b722.png";
      bgInput = "#ea211d";
      banner = "";
      bgItem = "#a80000";
      navigatorBg = "#a80000";
      bgTitle = "#a80000";
      bgBtn = "#ed1d1d";
      pagnigatorBg = "#ed1d1d";
      break;

    case gameName.Recommend:
      logo = "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/3e0f02d5c65c4a678184345bdd57392c.png";
      bgInput = "#000";
      banner = "";
      bgItem = "#b21117";
      navigatorBg = "#a80000";
      bgTitle = "#a80000";
      bgBtn = "#ccc";
      pagnigatorBg = "#bf0d0b";
      colorTitle = "#a80000";
      break;

    default:
      logo = "";
      bgInput = "rgb(0 0 0)";
  }

  return {
    banner,
    logo,
    bgInput,
    bgItem,
    bgTitle,
    navigatorBg,
    bgBtn,
    pagnigatorBg,
    colorTitleBtn,
    colorTitle,
  };
}
