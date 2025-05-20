/* global chrome */

const platform = location.host.split('.')[0];
const ideWebsitesList = [
  {
    title: 'GitHub Dev',
    name: 'gitHubDev',
    baseurl: 'https://github.dev/',
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
  },
  {
    title: 'VSCode Dev',
    name: 'vsCodeDev',
    baseurl: 'https://vscode.dev/github/',
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>'
  },
  {
    title: 'CodeSandbox',
    name: 'codeSandbox',
    baseurl: `https://codesandbox.io/s/${platform}/`,
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z"></path></svg>'
  },
  {
    title: 'GitHub1s',
    name: 'gitHub1s',
    baseurl: 'https://github1s.com/',
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 400 400"><g><path stroke="none" fill="currentColor" d="M35.587 25.574 C 26.887 34.274,22.366 85.319,28.408 106.640 C 29.808 111.581,30.362 115.990,29.639 116.436 C 22.375 120.926,6.586 153.361,2.311 172.577 C -1.702 190.614,-0.380 242.019,4.623 262.483 C 23.337 339.024,75.772 372.234,183.814 375.971 C 333.315 381.142,400.042 329.514,399.989 208.709 C 399.973 171.788,393.448 148.895,375.953 124.378 L 369.021 114.663 371.179 105.378 C 378.038 75.873,372.074 26.678,361.310 23.977 C 349.211 20.940,315.376 33.668,289.736 50.901 L 277.128 59.375 269.292 57.047 C 230.073 45.401,175.046 45.086,133.396 56.269 L 122.262 59.259 109.633 50.951 C 77.787 29.999,43.062 18.098,35.587 25.574 M199.219 174.024 C 215.547 173.970,243.672 173.640,261.719 173.291 C 297.764 172.594,302.347 173.496,314.439 183.671 C 360.164 222.146,353.423 307.996,302.675 333.490 C 257.998 355.934,129.596 354.142,90.730 330.533 C 37.291 298.070,45.173 192.813,102.426 174.343 C 108.963 172.234,114.738 172.025,139.844 172.986 C 156.172 173.611,182.891 174.078,199.219 174.024 M115.787 201.123 C 100.709 208.550,93.908 238.122,102.705 258.007 C 117.257 290.906,150.790 276.028,150.686 236.719 C 150.615 210.124,133.322 192.485,115.787 201.123 M265.858 201.088 C 262.979 202.507,258.887 206.290,256.767 209.495 C 233.925 244.011,263.236 295.935,289.886 268.166 C 314.409 242.614,294.482 186.985,265.858 201.088 M176.563 301.563 C 164.758 313.367,192.597 331.661,210.156 323.639 C 224.183 317.230,229.788 307.913,223.438 301.563 C 219.132 297.257,215.495 297.640,208.594 303.125 C 205.350 305.703,201.482 307.813,200.000 307.813 C 198.518 307.813,194.650 305.703,191.406 303.125 C 184.505 297.640,180.868 297.257,176.563 301.563"/></g></svg>'
  },
  {
    title: 'GitLab1s',
    name: 'gitLab1s',
    baseurl: 'https://gitlab1s.com/',
    platforms: ['gitlab'],
    icon: '<svg width="16" height="16" viewBox="0 0 400 400"><g><path stroke="none" fill="currentColor" d="M35.587 25.574 C 26.887 34.274,22.366 85.319,28.408 106.640 C 29.808 111.581,30.362 115.990,29.639 116.436 C 22.375 120.926,6.586 153.361,2.311 172.577 C -1.702 190.614,-0.380 242.019,4.623 262.483 C 23.337 339.024,75.772 372.234,183.814 375.971 C 333.315 381.142,400.042 329.514,399.989 208.709 C 399.973 171.788,393.448 148.895,375.953 124.378 L 369.021 114.663 371.179 105.378 C 378.038 75.873,372.074 26.678,361.310 23.977 C 349.211 20.940,315.376 33.668,289.736 50.901 L 277.128 59.375 269.292 57.047 C 230.073 45.401,175.046 45.086,133.396 56.269 L 122.262 59.259 109.633 50.951 C 77.787 29.999,43.062 18.098,35.587 25.574 M199.219 174.024 C 215.547 173.970,243.672 173.640,261.719 173.291 C 297.764 172.594,302.347 173.496,314.439 183.671 C 360.164 222.146,353.423 307.996,302.675 333.490 C 257.998 355.934,129.596 354.142,90.730 330.533 C 37.291 298.070,45.173 192.813,102.426 174.343 C 108.963 172.234,114.738 172.025,139.844 172.986 C 156.172 173.611,182.891 174.078,199.219 174.024 M115.787 201.123 C 100.709 208.550,93.908 238.122,102.705 258.007 C 117.257 290.906,150.790 276.028,150.686 236.719 C 150.615 210.124,133.322 192.485,115.787 201.123 M265.858 201.088 C 262.979 202.507,258.887 206.290,256.767 209.495 C 233.925 244.011,263.236 295.935,289.886 268.166 C 314.409 242.614,294.482 186.985,265.858 201.088 M176.563 301.563 C 164.758 313.367,192.597 331.661,210.156 323.639 C 224.183 317.230,229.788 307.913,223.438 301.563 C 219.132 297.257,215.495 297.640,208.594 303.125 C 205.350 305.703,201.482 307.813,200.000 307.813 C 198.518 307.813,194.650 305.703,191.406 303.125 C 184.505 297.640,180.868 297.257,176.563 301.563"/></g></svg>'
  },
  {
    title: 'Repl.it',
    name: 'replit',
    baseurl: `https://repl.it/${platform}/`,
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z"></path></svg>'
  },
  {
    title: 'StackBlitz',
    name: 'stackBlitz',
    baseurl: 'https://githubblitz.com/',
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z"/></svg>'
  },
  {
    title: 'Gitpod',
    name: 'gitpod',
    baseurl: `https://gitpod.io/#https://${platform}.com/`,
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M14.033 1.195a2.387 2.387 0 0 1-.87 3.235l-6.98 4.04a.602.602 0 0 0-.3.522v6.342a.6.6 0 0 0 .3.521l5.524 3.199a.585.585 0 0 0 .586 0l5.527-3.199a.603.603 0 0 0 .299-.52V11.39l-4.969 2.838a2.326 2.326 0 0 1-3.19-.9 2.388 2.388 0 0 1 .89-3.23l7.108-4.062C20.123 4.8 22.8 6.384 22.8 8.901v6.914a4.524 4.524 0 0 1-2.245 3.919l-6.345 3.672a4.407 4.407 0 0 1-4.422 0l-6.344-3.672A4.524 4.524 0 0 1 1.2 15.816V8.51a4.524 4.524 0 0 1 2.245-3.918l7.393-4.28a2.326 2.326 0 0 1 3.195.883z"/></svg>'
  },
  {
    title: 'Glitch',
    name: 'glitch',
    baseurl: 'https://glitch.com/edit/#!/import/github/',
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M9.146 2.393c-.618 0-1.794 1.61-1.794 1.61s-.453 0-1.803.07c-1.35.07-2.553.67-4.159 1.934C-.216 7.27.011 8.537.011 8.537s1.498.507 1.498.781c0 .275-1.311.6-1.311.6.845 1.081 3.467 2.09 4.13 2.09h.524c-1.086.214-2.136.804-3.462 1.847-1.606 1.264-1.379 2.53-1.379 2.53s1.498.507 1.498.781c0 .275-1.311.6-1.311.6.845 1.081 3.467 2.09 4.13 2.09.635 0 1.079.018 1.882-.132.06.134.686 1.461 1.965 1.736 1.347.29 2.092.062 2.092.062s.067-.595-.24-1.189c1.17.115 2.495.145 3.792-.052 3.603-.547 5.382-1.413 5.963-1.528.582-.115 3.904 1.476 4.106 1.104.203-.373-.73-1.188-.295-2.288.434-1.1-.534-1.827.003-2.705.537-.879.43-2.219.292-2.29-.295-.15-3.423 1.407-4.106 1.28-1.686-.311-1.377-.513-3.647-1.027-.907-.206-.781-.084-.982-.236-.134-.102-.265-.116-.455-.306 3.015-.543 4.552-1.275 5.084-1.38.582-.116 3.904 1.476 4.106 1.103.202-.372-.73-1.187-.295-2.288.434-1.1-.534-1.826.003-2.705.537-.878.43-2.218.292-2.289-.295-.151-3.423 1.407-4.106 1.28-1.686-.312-1.377-.513-3.647-1.027-.907-.206-.781-.084-.982-.236-.2-.152-.39-.106-.782-.74-.392-.635-4.916-1.61-5.225-1.61zM8.09 5.158l.04.002.111.006.397.02a286.477 286.477 0 0 1 1.59.088c.348.02.64.038.865.054.861.06 2.172.26 3.177.464 1.556.315 2.82.778 4.81 1.673l.677.305c.131.059.195.228.143.377-.052.15-.201.222-.333.163a663.41 663.41 0 0 0-.675-.305c-1.962-.881-3.198-1.335-4.711-1.64-.988-.2-2.28-.397-3.12-.457a76.718 76.718 0 0 0-.859-.054l-.384-.022c-.383-.021-.793-.044-1.203-.065l-.126-.006a6.79 6.79 0 0 1 .339 1.187c.02.11.035.216.045.32.034.336-.028.816-.162 1.42-.044.2-.096.409-.153.624a21.303 21.303 0 0 1-.29.995l-.02.064-.008.023c-.05.15-.198.226-.33.17-.133-.057-.2-.225-.15-.375l.007-.02a11.841 11.841 0 0 0 .089-.283c.072-.236.144-.487.212-.741.055-.208.104-.408.146-.599.12-.54.175-.966.15-1.213a3.436 3.436 0 0 0-.038-.269 5.829 5.829 0 0 0-.21-.796 8.1 8.1 0 0 0-.264-.685c-.091-.199.041-.435.238-.425zm-1.653.17c.066.002.13.033.179.091a4.758 4.758 0 0 1 .417.627c.224.404.374.816.415 1.221.023.231.008.49-.038.771-.044.27-.115.555-.206.845a8.216 8.216 0 0 1-.25.688c-.063.144-.216.203-.343.132-.127-.07-.18-.245-.117-.389l.018-.044a7.595 7.595 0 0 0 .21-.582c.082-.263.146-.518.185-.755a2.42 2.42 0 0 0 .032-.6c-.03-.306-.153-.64-.34-.978a4.176 4.176 0 0 0-.356-.538.319.319 0 0 1 .01-.41.239.239 0 0 1 .184-.08zm-3.042.97c.62 0 1.122.57 1.122 1.272 0 .704-.503 1.273-1.122 1.273-.555 0-1.016-.457-1.106-1.058.077.452.428.793.849.793.477 0 .864-.44.864-.981 0-.542-.387-.981-.864-.981-.474 0-.86.432-.865.968V7.57c0-.703.502-1.273 1.122-1.273zM2.88 7.622a.234.265 0 0 1 .233.266.234.265 0 0 1-.233.265.234.265 0 0 1-.234-.265.234.265 0 0 1 .234-.266zm3.329 4.253l.006.013-.115.005.109-.018zm1.88 1.13l.04.003.111.005.397.02a286.463 286.463 0 0 1 1.59.088c.348.02.64.039.865.055.861.06 2.172.26 3.177.463 1.556.315 2.82.778 4.81 1.673l.677.305c.131.06.195.228.143.377-.052.15-.201.222-.333.163a663.41 663.41 0 0 0-.675-.305c-1.962-.881-3.198-1.334-4.711-1.64-.988-.2-2.28-.397-3.12-.456a76.718 76.718 0 0 0-1.243-.077l-1.203-.065-.126-.006a6.79 6.79 0 0 1 .339 1.187c.02.11.035.217.045.32.034.336-.028.817-.162 1.42-.044.2-.096.41-.153.625a21.303 21.303 0 0 1-.31 1.058l-.008.023c-.05.15-.198.226-.33.17-.133-.057-.2-.224-.15-.375l.007-.02a11.841 11.841 0 0 0 .089-.283c.072-.236.144-.487.212-.74.055-.208.104-.409.146-.6.12-.539.175-.966.15-1.213a3.436 3.436 0 0 0-.038-.268 5.829 5.829 0 0 0-.21-.796 8.1 8.1 0 0 0-.264-.686c-.091-.198.041-.434.238-.424zm-1.653.17c.066.002.13.033.179.091a4.758 4.758 0 0 1 .417.627c.224.405.374.816.415 1.222.023.23.008.489-.038.77-.044.27-.115.555-.206.845a8.215 8.215 0 0 1-.25.688c-.063.144-.216.204-.343.133-.127-.071-.18-.246-.117-.39a6.083 6.083 0 0 0 .07-.173 7.59 7.59 0 0 0 .158-.453c.082-.262.146-.518.185-.755a2.42 2.42 0 0 0 .032-.6c-.03-.305-.153-.64-.34-.978a4.176 4.176 0 0 0-.356-.537.319.319 0 0 1 .01-.411.239.239 0 0 1 .184-.079zm-3.042.97c.62 0 1.122.57 1.122 1.273s-.503 1.273-1.122 1.273c-.555 0-1.016-.458-1.106-1.058.077.451.428.792.849.792.477 0 .864-.439.864-.98 0-.543-.387-.982-.864-.982-.474 0-.86.433-.865.969v-.014c0-.703.502-1.273 1.122-1.273zm-.514 1.326a.234.265 0 0 1 .233.265.234.265 0 0 1-.233.265.234.265 0 0 1-.234-.265.234.265 0 0 1 .234-.265z"></path></svg>'
  },
  {
    title: 'Google IDX',
    name: 'idx',
    baseurl: `https://idx.google.com/import?url=https://${platform}.com/`,
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 192 192" fill="none"><rect x="28" y="156" width="88" height="24" rx="12" fill="currentColor"></rect><rect x="104" y="120" width="36" height="24" rx="12" fill="currentColor"></rect><rect x="56" y="120" width="36" height="24" rx="12" fill="currentColor"></rect><rect x="84" y="84" width="52" height="24" rx="12" fill="currentColor"></rect><rect x="148" y="84" width="24" height="24" rx="12" fill="currentColor"></rect><rect x="56" y="48" width="88" height="24" rx="12" fill="currentColor"></rect><rect x="64" y="12" width="52" height="24" rx="12" fill="currentColor"></rect><rect x="28" y="12" width="24" height="24" rx="12" fill="currentColor"></rect></svg>'
  },
  {
    title: 'Sourcegraph',
    name: 'sourcegraph',
    baseurl: `https://sourcegraph.com/${platform}.com/`,
    platforms: ['github', 'gitlab'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M17.897 3.84a2.38 2.38 0 1 1 3.09 3.623l-3.525 3.006-2.59-.919-.967-.342-1.625-.576 1.312-1.12.78-.665 3.525-3.007zm-8.27 13.313.78-.665 1.312-1.12-1.624-.575-.967-.344-2.59-.918-3.525 3.007a2.38 2.38 0 1 0 3.09 3.622l3.525-3.007zM8.724 7.37l2.592.92 2.09-1.784-.84-4.556a2.38 2.38 0 1 0-4.683.865l.841 4.555zm6.554 9.262-2.592-.92-2.091 1.784.842 4.557a2.38 2.38 0 0 0 4.682-.866l-.841-4.555zm8.186-.564a2.38 2.38 0 0 0-1.449-3.04l-4.365-1.55-.967-.342-1.625-.576-.966-.343-2.59-.92-.967-.342-1.624-.576-.967-.343-4.366-1.55a2.38 2.38 0 1 0-1.591 4.488l4.366 1.55.966.342 1.625.576.965.343 2.591.92.967.342 1.624.577.966.342 4.367 1.55a2.38 2.38 0 0 0 3.04-1.447"/></svg>'
  },
  {
    title: 'JsDelivr',
    name: 'jsDelivr',
    baseurl: 'https://cdn.jsdelivr.net/gh/',
    platforms: ['github'],
    urlSuffix: '/',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11.851 0L.811 4.02l1.56 14.7L11.85 24l9.6-5.28 1.74-14.76zm.062 4.622a6.668 6.75 0 0 1 2.666.572 12.507 12.507 0 0 0-2.59 1.95c-.045-.02-.092-.031-.138-.045a1.181 1.181 0 0 0-.346-.056c-.071 0-.141.01-.21.021a8.91 8.91 0 0 1-.615-2.318 6.668 6.75 0 0 1 1.171-.122 6.668 6.75 0 0 1 .062-.002zm-1.99.312a9.763 9.763 0 0 0 .69 2.504 1.213 1.213 0 0 0-.328.825 1.202 1.202 0 0 0 .18.63c-.937 1.294-1.656 2.803-1.905 4.31-.01.056-.013.11-.02.166-.282.09-.515.284-.656.54-.987-.333-1.885-.968-2.615-2.022a6.668 6.75 0 0 1-.026-.515 6.668 6.75 0 0 1 4.68-6.438zm5.507.709a6.668 6.75 0 0 1 2.53 2.9c-.377.953-1.049 1.892-1.893 2.727a1.242 1.242 0 0 0-.644-.184 1.243 1.243 0 0 0-.768.27c-.462-.354-.91-.737-1.318-1.168-.333-.35-.637-.73-.921-1.123.19-.215.31-.494.31-.802 0-.212-.061-.41-.159-.586 1.058-1.008 2.112-1.67 2.863-2.034zm-3.925 1.982a.624.624 0 0 1 .346.114.624.624 0 0 1 .292.524.624.624 0 0 1-.292.524.626.626 0 0 1-.346.113.634.634 0 0 1-.638-.637c0-.355.283-.638.638-.638zm-.441 1.771a1.205 1.205 0 0 0 .675.062c.036.05.075.097.112.148a11.438 11.438 0 0 0 .921 1.119 12.103 12.103 0 0 0 1.446 1.277c-.032.11-.054.224-.054.342a1.236 1.236 0 0 0 .066.38 9.91 9.91 0 0 1-2.118 1.042c-.087.029-.173.052-.261.078a7.735 7.735 0 0 1-1.87.332 1.15 1.15 0 0 0-.66-.773c.004-.024.005-.049.01-.073.219-1.333.873-2.73 1.733-3.934zm7.272.19a6.668 6.75 0 0 1 .245 1.786 6.668 6.75 0 0 1-.259 1.856 9.993 9.993 0 0 1-1.666-.63 1.243 1.243 0 0 0-.065-.713 9.434 9.434 0 0 0 1.745-2.3zm-2.913 2.101c.367 0 .657.291.657.658s-.291.657-.657.657c-.367 0-.658-.29-.658-.657s.29-.658.658-.658zm.837 1.59a10.79 10.79 0 0 0 1.802.688 6.668 6.75 0 0 1-6.149 4.157 6.668 6.75 0 0 1-.062-.004 6.668 6.75 0 0 1-.042 0c-.087-.042-.168-.08-.266-.129-.312-.154-.667-.352-.846-.5a3.796 3.796 0 0 1-1.294-2.03c.21-.111.38-.284.487-.495a8.428 8.428 0 0 0 1.96-.306 9.11 9.11 0 0 0 .513-.154 11.083 11.083 0 0 0 2.341-1.13c.205.143.452.23.719.23a1.248 1.248 0 0 0 .837-.328zm-10.707.116a5.761 5.761 0 0 0 2.212 1.298 1.146 1.146 0 0 0 .857.87 4.602 4.602 0 0 0 1.24 2.222 6.668 6.75 0 0 1-4.31-4.39zm3.327.464c.331 0 .595.263.595.596s-.264.595-.595.595a.59.59 0 0 1-.596-.595.591.591 0 0 1 .596-.596z"/></svg>'
  },
  {
    title: 'Active Forks',
    name: 'activeForks',
    baseurl: 'https://techgaun.github.io/active-forks/#',
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 480 512"><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>'
  },
  {
    title: 'Useful Forks',
    name: 'usefulForks',
    baseurl: 'https://useful-forks.github.io/?repo=',
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" transform="rotate(90)" style="scale:1.2"><g><path d="M6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6C6.55228 6 7 5.55228 7 5C7 4.44772 6.55228 4 6 4ZM9 5C9 6.30622 8.16519 7.41746 7 7.82929V9C7 10.1046 7.89543 11 9 11C10.1947 11 11.2671 11.5238 12 12.3542C12.7329 11.5238 13.8053 11 15 11C16.1046 11 17 10.1046 17 9V7.82929C15.8348 7.41746 15 6.30622 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5C21 6.30622 20.1652 7.41746 19 7.82929V9C19 11.2091 17.2091 13 15 13C13.8954 13 13 13.8954 13 15V16.1707C14.1652 16.5825 15 17.6938 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 17.6938 9.83481 16.5825 11 16.1707V15C11 13.8954 10.1046 13 9 13C6.79086 13 5 11.2091 5 9V7.82929C3.83481 7.41746 3 6.30622 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5ZM12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18ZM18 6C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5C17 5.55228 17.4477 6 18 6Z" fill="currentColor"/></g></svg>'
  },
  {
    title: 'Gitpop2',
    name: 'gitpop2',
    baseurl: 'https://gitpop2.vercel.app/',
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 1024 1536"><path fill="currentColor" d="M288 1344q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm0-1152q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm640 128q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm96 0q0 52-26 96.5T928 486q-2 287-226 414q-67 38-203 81q-128 40-169.5 71T288 1152v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56t-136-56t-56-136q0-52 26-96.5t70-69.5V358q-44-25-70-69.5T0 192q0-80 56-136T192 0t136 56t56 136q0 52-26 96.5T288 358v497q54-26 154-57q55-17 87.5-29.5t70.5-31t59-39.5t40.5-51t28-69.5T736 486q-44-25-70-69.5T640 320q0-80 56-136t136-56t136 56t56 136z"></path></svg>'
  },
  {
    title: 'DevPod',
    name: 'devPod',
    baseurl: `https://devpod.sh/open#https://${platform}.com/`,
    platforms: ['github', 'gitlab'],
    icon: '<svg width="16" height="16" viewBox="0 0 200 200"><g style="scale:1.0376"><polygon fill="currentColor" points="67.4,147.6 144.4,3.1 117,3.1 52.9,123.4 39.5,99.2 66.2,51.1 39.5,51.1 12.8,99.2 39.5,147.3 40.2,147.3 40,147.6"></polygon><polygon fill="currentColor" points="157.3,51.7 156.7,51.7 156.8,51.4 129.4,51.4 52.4,195.9 79.8,195.9 143.9,75.6 157.3,99.8 130.6,147.9 157.3,147.9 184,99.8"></polygon></g></svg>'
  },
  {
    title: 'Clone in VSCode',
    name: 'cloneInVSCode',
    baseurl: `vscode://vscode.git/clone?url=https://${platform}.com/`,
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>',
    class: 'd-none d-md-block'
  },
  {
    title: 'Clone in VSCode Insiders',
    name: 'cloneInVSCodeInsiders',
    baseurl: `vscode-insiders://vscode.git/clone?url=https://${platform}.com/`,
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>',
    class: 'd-none d-md-block'
  },
  {
    title: 'Clone in Cursor',
    name: 'cloneInCursor',
    baseurl: `cursor://vscode.git/clone?url=https://${platform}.com/`,
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 24 24"><path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill="url(#lobe-icons-cursorundefined-fill-0)"/><path d="M22.35 18V6L11.925 0v12l10.425 6z" fill="url(#lobe-icons-cursorundefined-fill-1)"/><path d="M11.925 0L1.5 6v12l10.425-6V0z" fill="url(#lobe-icons-cursorundefined-fill-2)"/><path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555"/><path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#000"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-0" x1="11.925" x2="11.925" y1="12" y2="24"><stop offset=".16" stop-color="#000" stop-opacity=".39"/><stop offset=".658" stop-color="#000" stop-opacity=".8"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-1" x1="22.35" x2="11.925" y1="6.037" y2="12.15"><stop offset=".182" stop-color="#000" stop-opacity=".31"/><stop offset=".715" stop-color="#000" stop-opacity="0"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-2" x1="11.925" x2="1.5" y1="0" y2="18"><stop stop-color="#000" stop-opacity=".6"/><stop offset=".667" stop-color="#000" stop-opacity=".22"/></linearGradient></defs></svg>',
    class: 'd-none d-md-block'
  },
  {
    title: 'Clone in Windsurf',
    name: 'cloneInWindsurf',
    baseurl: `windsurf://vscode.git/clone?url=https://${platform}.com/`,
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 512 297" fill="none"><path fill="currentColor" d="M507.28 0.142623H502.4C476.721 0.10263 455.882 20.899 455.882 46.5745V150.416C455.882 171.153 438.743 187.95 418.344 187.95C406.224 187.95 394.125 181.851 386.945 171.613L280.889 20.1391C272.089 7.56133 257.77 0.0626373 242.271 0.0626373C218.091 0.0626373 196.332 20.6191 196.332 45.9946V150.436C196.332 171.173 179.333 187.97 158.794 187.97C146.634 187.97 134.555 181.871 127.375 171.633L8.69966 2.12228C6.01976 -1.71705 0 0.182617 0 4.8618V95.426C0 100.005 1.39995 104.444 4.01984 108.204L120.815 274.995C127.715 284.853 137.895 292.172 149.634 294.831C179.013 301.51 206.052 278.894 206.052 250.079V145.697C206.052 124.961 222.851 108.164 243.59 108.164H243.65C256.15 108.164 267.87 114.263 275.049 124.501L381.125 275.955C389.945 288.552 403.524 296.031 419.724 296.031C444.443 296.031 465.622 275.455 465.622 250.099V145.677C465.622 124.941 482.421 108.144 503.16 108.144H507.3C509.9 108.144 512 106.044 512 103.445V4.8418C512 2.24226 509.9 0.142623 507.3 0.142623H507.28Z"/></svg>',
    class: 'd-none d-md-block'
  },
  {
    title: 'Clone in Windsurf Next',
    name: 'cloneInWindsurfNext',
    baseurl: `windsurf-next://vscode.git/clone?url=https://${platform}.com/`,
    platforms: ['github'],
    icon: '<svg width="16" height="16" viewBox="0 0 512 297" fill="none"><path fill="currentColor" d="M507.28 0.142623H502.4C476.721 0.10263 455.882 20.899 455.882 46.5745V150.416C455.882 171.153 438.743 187.95 418.344 187.95C406.224 187.95 394.125 181.851 386.945 171.613L280.889 20.1391C272.089 7.56133 257.77 0.0626373 242.271 0.0626373C218.091 0.0626373 196.332 20.6191 196.332 45.9946V150.436C196.332 171.173 179.333 187.97 158.794 187.97C146.634 187.97 134.555 181.871 127.375 171.633L8.69966 2.12228C6.01976 -1.71705 0 0.182617 0 4.8618V95.426C0 100.005 1.39995 104.444 4.01984 108.204L120.815 274.995C127.715 284.853 137.895 292.172 149.634 294.831C179.013 301.51 206.052 278.894 206.052 250.079V145.697C206.052 124.961 222.851 108.164 243.59 108.164H243.65C256.15 108.164 267.87 114.263 275.049 124.501L381.125 275.955C389.945 288.552 403.524 296.031 419.724 296.031C444.443 296.031 465.622 275.455 465.622 250.099V145.677C465.622 124.941 482.421 108.144 503.16 108.144H507.3C509.9 108.144 512 106.044 512 103.445V4.8418C512 2.24226 509.9 0.142623 507.3 0.142623H507.28Z"/></svg>',
    class: 'd-none d-md-block'
  }
];
const defaultOptions = {
  gitHubDev: true,
  vsCodeDev: true,
  codeSandbox: true,
  gitHub1s: true,
  replit: true,
  stackBlitz: true,
  gitLab1s: true,
  gitpod: true,
  glitch: true,
  idx: true,
  sourcegraph: true,
  jsDelivr: false,
  activeForks: false,
  usefulForks: false,
  gitpop2: false,
  devPod: false,
  cloneInVSCode: true,
  cloneInVSCodeInsiders: false,
  cloneInCursor: false,
  cloneInWindsurf: false,
  cloneInWindsurfNext: false,
  openInNewTab: true
};
const gitHubStyle = `
.eIgvIk {
  position: relative;
  z-index: 2;
}
#open-in-web-ide {
  order: 10;
}
#open-in-web-ide .dropdown-menu {
  min-width: 170px;
  width: auto;
}
#open-in-web-ide .dropdown-menu .dropdown-item .d-inline-flex {
  vertical-align:sub;
}`;

let repoUrlPath = getRepoUrlPath();
let options;

function hasPackageJsonCheck () {
  return [...document.querySelectorAll('.Layout-main .Box-sc-g0xbh4-0 .react-directory-filename-column .react-directory-truncate .Link--primary')].some((el) => el.innerText === 'package.json');
}
let hasPackageJson = hasPackageJsonCheck();

async function init () {
  const storage = await chrome.storage.sync.get('options');
  options = storage.options || defaultOptions;

  switch (platform) {
    case 'github': {
      const itemWithBorderOnTop = ideWebsitesList.find((item) => (item.name.startsWith('cloneInVSCode')) && filterItems(item));
      if (itemWithBorderOnTop) {
        itemWithBorderOnTop.class += ' border-top';
      }

      addGitHubSelectMenu();
      document.addEventListener('soft-nav:end', () => {
        document.getElementById('open-in-web-ide')?.remove();
        repoUrlPath = getRepoUrlPath();
        addGitHubSelectMenu();
      });
      break;
    }
    case 'gitlab': {
      addGitLabSelectMenu();
      break;
    }
    default: {
      break;
    }
  }
}

function getRepoUrlPath () {
  return location.pathname.split('/').slice(1, 3).join('/');
}

function filterItems (item) {
  hasPackageJson ||= hasPackageJsonCheck(); // recheck after navigation
  if (item.title === 'StackBlitz' && !hasPackageJson) {
    return false;
  }
  return (!options || options[item.name]) && item.platforms.includes(platform);
}

function addGitHubSelectMenu () {
 // const selectors = [
    '.jxTzTd', // Repo main page
    '.faNtbn .d-flex.gap-2', // Repo files page
    '.gwHaUx .d-flex.gap-2' // Commits page
  ];
  const menuElement = document.querySelector('.react-directory-add-file-icon')?.parentElement?.parentElement
  if (!menuElement || menuElement.querySelector('#open-in-web-ide')) {
    return;
  }

  const githubHtml = `<summary role="button" type="button" class="btn text-center">
    <span class="d-none d-xl-flex flex-items-center">
      Open In Web IDE
      <span class="dropdown-caret ml-2"></span>
    </span>
    <span class="d-inline-block d-xl-none">
      IDE
      <span class="dropdown-caret d-none d-sm-inline-block d-md-none d-lg-inline-block"></span>
    </span>
  </summary>
  <div>
    <ul class="dropdown-menu dropdown-menu-sw">
      ${ideWebsitesList.filter(filterItems).map((item) => `<li class="${item.class || ''}"><a href="${item.baseurl}${repoUrlPath}${item.urlSuffix || ''}" class="dropdown-item" ${(!options || options.openInNewTab) ? 'target="_blank"' : ''} rel="noopener noreferrer">
        <span class="d-inline-flex mr-2">${item.icon}</span>
        ${item.title}
      </a></li>`).join('')}
    </ul>
  </div> `;

  const detailsElement = document.createElement('details');
  detailsElement.setAttribute('id', 'open-in-web-ide');
  detailsElement.setAttribute('class', 'details-overlay details-reset position-relative d-flex');
  detailsElement.innerHTML = githubHtml;
  menuElement.appendChild(detailsElement);

  if (!document.head.querySelector('style[data-id="open-in-web-ide-css"]')) {
    const globalStyle = document.createElement('style');
    globalStyle.dataset.id = 'open-in-web-ide-css';
    globalStyle.innerHTML = gitHubStyle;
    document.head.appendChild(globalStyle);
  }
}

function addGitLabSelectMenu () {
  const webIDEDropdown = document.querySelector('.tree-controls .gl-new-dropdown-panel .gl-new-dropdown-inner .edit-dropdown-group-width ul');
  if (!webIDEDropdown || document.querySelector('#open-in-web-ide')) {
    return;
  }

  const gitLabHtml = `${ideWebsitesList.filter(filterItems).map((item) =>
    `<li tabindex="0" data-testid="gitpod-menu-item" class="gl-new-dropdown-item"><a href="${item.baseurl}${repoUrlPath}" class="gl-new-dropdown-item-content" ${(!options || options.openInNewTab) ? 'target="_blank"' : ''}>
      <span class="gl-new-dropdown-item-text-wrapper"><div class="gl-display-flex gl-flex-direction-column"><span class="gl-display-flex gl-justify-content-space-between gl-align-items-center gl-mb-2"><span data-testid="action-primary-text" class="gl-font-weight-bold">
        ${item.title}
      </span>
    </div></span></a></li>`).join('')}`;

  webIDEDropdown.setAttribute('id', 'open-in-web-ide');
  webIDEDropdown.innerHTML += gitLabHtml;
}

window.onload = init;
init();
