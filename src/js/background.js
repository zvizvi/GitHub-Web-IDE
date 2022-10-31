chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // if url changed
  const platform = new URL(tab.url).host.split('.')[0];
  const supportedPlatform = platform === 'github' || platform === 'gitlab';

  if (changeInfo.status === 'complete' && (supportedPlatform)) {
    debounce(chrome.tabs.sendMessage(tabId, { message: 'URL_CHANGED' }), 500);
  };
}
);


function debounce(func, wait) {
  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait);
  }
}