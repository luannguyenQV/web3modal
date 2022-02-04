import { isMobile } from "../../helpers";

const NoInjectedProvider = () => {
  const mobile = isMobile();

  let provider = {name: "noindexedprovider", returnTrue: true, on: function(){}, off: function() {}};

  const url = mobile ? "https://metamask.app.link/dapp/${window.location.host}" : "https://metamask.io/download"
  let win = window.open(url, "_blank") || window;
  win.focus();

  return provider;
};

export default NoInjectedProvider;
