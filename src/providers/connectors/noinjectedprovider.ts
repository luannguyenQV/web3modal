const NoInjectedProvider = async () => {
    let provider = {name: "noindexedprovider", returnTrue: true, on: function(){}, off: function() {}};

  let win = window.open("https://metamask.io/download", "_blank") || window;
  win.focus();

  return provider;
};

export default NoInjectedProvider;
