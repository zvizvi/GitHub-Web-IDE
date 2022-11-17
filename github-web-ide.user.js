// ==UserScript==
// @name         Github Web IDE
// @name:zh-CN   Github Web IDE
// @name:zh-TW   Github Web IDE
// @name:en      Github Web IDE
// @version      2.0.3
// @author       zvizvi (migrated by Cesaryuan)
// @description  ⚡ Open GitHub repositories in online web IDE (Migrated from https://github.com/zvizvi/GitHub-Web-IDE)
// @description:zh-CN  ⚡ Open GitHub repositories in online web IDE (Migrated from https://github.com/zvizvi/GitHub-Web-IDE)
// @description:zh-TW  ⚡ Open GitHub repositories in online web IDE (Migrated from https://github.com/zvizvi/GitHub-Web-IDE)
// @description:en  ⚡ Open GitHub repositories in online web IDE (Migrated from https://github.com/zvizvi/GitHub-Web-IDE)
// @match        *://github.com/*
// @match        *://gitlab.com/*
// @resource     css   https://unpkg.com/@primer/css@^20.2.4/dist/primer.css
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAsIDAsIDQwMCw0MDAiPjxnPjxwYXRoIGQ9Ik0xNzQuMjE5IDEuMjI4IEMgOC44NzUgMjIuNDM2LC01OS4yMzggMjI2Ljk1OCw2MC4yNjYgMzQzLjM5MiBDIDg3LjcwMiAzNzAuMTI0LDEzMi42ODAgMzk0LjYxOSwxNDQuOTMwIDM4OS41MDAgQyAxNTAuNDU5IDM4Ny4xOTAsMTUwLjc3NSAzODUuNzQ5LDE1MC43NzggMzYyLjgwOCBMIDE1MC43ODEgMzQyLjQxMyAxNDQuNzI3IDM0My41MzAgQyAxMTQuMTQ4IDM0OS4xNzUsOTMuNDQ1IDMzOS45OTIsODEuMzgwIDMxNS40MzMgQyA3NC45MDEgMzAyLjI0Niw2OS44ODQgMjk1LjgwOCw2MS43MTUgMjkwLjE5OCBDIDUwLjM0NyAyODIuMzkyLDUwLjYyMSAyNzguMzQ3LDYyLjUwMCAyNzguNjIyIEMgNzMuMTkwIDI3OC44NzEsODMuNzAzIDI4Ni4yNDYsOTIuOTcyIDMwMC4wMDAgQyAxMDIuODA5IDMxNC41OTcsMTEzLjA4NCAzMjAuNTk2LDEyOC4xMjUgMzIwLjUyNCBDIDEzOS40NzEgMzIwLjQ2OSwxNTEuNTYyIDMxNi44NTUsMTUxLjU2MyAzMTMuNTE5IEMgMTUxLjU2MyAzMDguMDk4LDE1Ni43MjAgMjk2LjYyMCwxNjEuNTczIDI5MS4yNDIgQyAxNjQuNjAyIDI4Ny44ODUsMTY1LjI1NyAyODguMjk1LDE1NC4yOTcgMjg2LjY5MiBDIDEwOC40NTcgMjc5Ljk5MCw4Mi4wODcgMjU2LjIyMiw3NS4wMTYgMjE1LjIzNCBDIDY5Ljc5NCAxODQuOTcwLDc0LjA2OSAxNjEuMzU1LDg4LjEzMyAxNDIuNzc0IEMgOTAuMjQwIDEzOS45OTAsOTIuMjEyIDEzNy4zMTEsOTIuNTE1IDEzNi44MjAgQyA5Mi44MTkgMTM2LjMyOSw5Mi4yODMgMTMyLjg1Myw5MS4zMjUgMTI5LjA5NiBDIDg4LjMyNCAxMTcuMzI5LDg4Ljk4OCAxMDIuODM0LDkzLjEyMyA4OS44NDQgQyA5NS40NDggODIuNTQwLDk1LjQ2MSA4Mi41MzAsMTAyLjE5OSA4My4wOTkgQyAxMTIuNDk0IDgzLjk3MCwxMjkuNDg0IDkwLjkxMCwxNDMuODQzIDEwMC4xMTEgTCAxNDkuNzk1IDEwMy45MjUgMTU3LjkwNSAxMDEuOTk0IEMgMTg0LjExMCA5NS43NTUsMjE2LjA1OCA5NS43NTEsMjQyLjA5NSAxMDEuOTg0IEwgMjUwLjIwNSAxMDMuOTI1IDI1Ni4yMTcgMTAwLjA2OSBDIDI3Ny40MDMgODYuNDc4LDMwMi4yMTUgNzkuMDQzLDMwNS4yOTQgODUuMzYyIEMgMzEwLjMxNCA5NS42NjcsMzExLjkyNiAxMTYuNDU1LDMwOC42ODQgMTI5LjA5NiBDIDMwNy43MjEgMTMyLjg1MywzMDcuMTgxIDEzNi4zMjksMzA3LjQ4NSAxMzYuODIwIEMgMzA3Ljc4OCAxMzcuMzExLDMwOS43NjAgMTM5Ljk5MCwzMTEuODY3IDE0Mi43NzQgQyAzMjUuOTMxIDE2MS4zNTUsMzMwLjIwNiAxODQuOTcwLDMyNC45ODQgMjE1LjIzNCBDIDMxNy43MDkgMjU3LjQwMiwyODguNjUxIDI4Mi4zMTUsMjQxLjA1NSAyODcuMTkxIEMgMjM1LjA1NyAyODcuODA2LDIzNS4xNTUgMjg3LjYxNywyMzguNzU1IDI5MS42MDEgQyAyNDcuODU3IDMwMS42NzYsMjQ5LjIxNiAzMDkuMjg0LDI0OS4yMzAgMzUwLjI0NiBDIDI0OS4yNDMgMzg1LjQ5OCwyNDkuMjQ2IDM4NS41MjksMjUzLjIzMSAzODguNDg3IEMgMjU4LjUxMiAzOTIuNDA3LDI2Ny4wMzUgMzkwLjI3NywyODguNzM0IDM3OS42MTYgQyAzNjQuOTMyIDM0Mi4xNzgsNDA5LjI4NyAyNTkuNzM0LDM5OC44MDEgMTc1LjAzMiBDIDM4NS4yMjIgNjUuMzQ5LDI4NC4xNDggLTEyLjg3MiwxNzQuMjE5IDEuMjI4IE0yMTcuMjA5IDE0NS4xMTggQyAyMTQuMjgyIDE0Ni41OTIsMjE0LjQyMCAxNDYuMzY3LDE4OS4wOTUgMTkxLjAxNiBDIDE4Mi41MTUgMjAyLjYxNywxNzQuNzIxIDIxNi4zNTQsMTcxLjc3NiAyMjEuNTQzIEMgMTY0LjMyMSAyMzQuNjc4LDE2NC4yMTkgMjM5LjM2NiwxNzEuMzMyIDI0Mi4wODAgQyAxNzguMDQ3IDI0NC42NDEsMTc2LjI2OCAyNDcuMDkyLDIwNi45ODEgMTkyLjk2OSBDIDIxNC40MTggMTc5Ljg2MywyMjIuMTk4IDE2Ni4xNTIsMjI0LjI3MSAxNjIuNTAwIEMgMjMwLjA2MiAxNTIuMjk3LDIyOS45NTQgMTQ3LjQzMSwyMjMuODgxIDE0NC44OTQgQyAyMjAuNDY2IDE0My40NjcsMjIwLjQ5MSAxNDMuNDY2LDIxNy4yMDkgMTQ1LjExOCBNMTQxLjAxNiAxNjIuMDQxIEMgMTM5LjcyNyAxNjIuNjE0LDEzNi41NzcgMTY1LjMyNSwxMzQuMDE3IDE2OC4wNjUgQyAxMzEuNDU3IDE3MC44MDUsMTI1LjU2OSAxNzYuOTc1LDEyMC45MzEgMTgxLjc3NSBDIDExNS41NjUgMTg3LjMzMSwxMTIuNTAwIDE5MS4xMTEsMTEyLjUwMCAxOTIuMTczIEMgMTEyLjUwMCAxOTMuMDkxLDExMi4xNDggMTkzLjYyNSwxMTEuNzE5IDE5My4zNTkgQyAxMTEuMjg5IDE5My4wOTQsMTEwLjkzOCAxOTMuMjI4LDExMC45MzggMTkzLjY1OCBDIDExMC45MzggMTk0LjA4NywxMTEuMjQ0IDE5NC42MjgsMTExLjYxOCAxOTQuODYwIEMgMTExLjk5MiAxOTUuMDkxLDExMi41MTMgMTk2LjI1NCwxMTIuNzc2IDE5Ny40NDUgQyAxMTMuMDgxIDE5OC44MjUsMTE4LjE3NCAyMDQuNzAyLDEyNi44MzggMjEzLjY3MiBMIDE0MC40MjEgMjI3LjczNCAxNDQuMTAzIDIyNy43MzQgQyAxNDkuMTc0IDIyNy43MzQsMTUyLjM0NCAyMjQuMzgxLDE1Mi4zNDQgMjE5LjAxNSBDIDE1Mi4zNDQgMjE1LjUwMCwxNTIuMTI5IDIxNS4xNzYsMTQ0LjcyMiAyMDcuNTA0IEMgMTQwLjUzMCAyMDMuMTYyLDEzNi4wOTAgMTk4LjQ4OCwxMzQuODU1IDE5Ny4xMTggTCAxMzIuNjExIDE5NC42MjYgMTQyLjQ3NyAxODQuMDc3IEMgMTUxLjk3MiAxNzMuOTI1LDE1Mi4zNDQgMTczLjQwMSwxNTIuMzQ0IDE3MC4xNDEgQyAxNTIuMzQ0IDE2My40MjIsMTQ2LjgxMCAxNTkuNDY1LDE0MS4wMTYgMTYyLjA0MSBNMjUxLjAyNiAxNjIuNDYxIEMgMjQzLjYxNiAxNjYuOTgwLDI0NC43NDUgMTcxLjI1MSwyNTYuNzQxIDE4NC4wNzcgTCAyNjYuNjA4IDE5NC42MjYgMjY0LjM2NCAxOTcuMTE4IEMgMjYzLjEyOSAxOTguNDg4LDI1OC42ODkgMjAzLjE2MiwyNTQuNDk3IDIwNy41MDQgQyAyNDcuMDkwIDIxNS4xNzYsMjQ2Ljg3NSAyMTUuNTAwLDI0Ni44NzUgMjE5LjAxNSBDIDI0Ni44NzUgMjI0LjM4MSwyNTAuMDQ0IDIyNy43MzQsMjU1LjExNiAyMjcuNzM0IEwgMjU4Ljc5OCAyMjcuNzM0IDI3Mi4zODEgMjEzLjY3MiBDIDI4MS4wNDUgMjA0LjcwMiwyODYuMTM4IDE5OC44MjUsMjg2LjQ0MyAxOTcuNDQ1IEMgMjg2LjcwNSAxOTYuMjU0LDI4Ny4yMjcgMTk1LjA5MSwyODcuNjAxIDE5NC44NjAgQyAyODcuOTc1IDE5NC42MjgsMjg4LjI4MSAxOTQuMDg3LDI4OC4yODEgMTkzLjY1OCBDIDI4OC4yODEgMTkzLjIyOCwyODcuOTMwIDE5My4wOTQsMjg3LjUwMCAxOTMuMzU5IEMgMjg3LjA3MCAxOTMuNjI1LDI4Ni43MTkgMTkzLjA5MSwyODYuNzE5IDE5Mi4xNzMgQyAyODYuNzE5IDE5MS4xMTEsMjgzLjY1NCAxODcuMzMxLDI3OC4yODcgMTgxLjc3NSBDIDI3My42NTAgMTc2Ljk3NSwyNjcuNzYxIDE3MC44MDQsMjY1LjIwMSAxNjguMDY0IEMgMjU4LjY4MCAxNjEuMDgyLDI1NS40MDkgMTU5Ljc4OSwyNTEuMDI2IDE2Mi40NjEiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPgo=
// @grant        GM_registerMenuCommand
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// @license      none
// @run-at       document-end
// @namespace    https://github.com/zvizvi/GitHub-Web-IDE
// @supportURL   https://github.com/zvizvi/GitHub-Web-IDE
// @homepageURL  https://github.com/zvizvi/GitHub-Web-IDE
// ==/UserScript==

(function () {
    GM_registerMenuCommand("Options", () => {
        const dialogId = "open-in-web-ide-options";
        const dialog = document.getElementById(dialogId) || addFrameDialog(dialogId, `
<head>
  <meta charset="utf-8">
  <title>Options</title>
  <style>
    body {
      font-family: Arial, sans-serif, monospace;
    }

    .logo {
      width: 32px;
      height: 32px;
    }

    .content {
      min-height: 150px;
    }

    .form-checkbox>label {
      padding: 10px 0 !important;
    }
  </style>
  <style>
  ${GM_getResourceText("css")}
    </style>
</head>
<body class="m-0 p-0">
    <main id="js-pjax-container">
      <div class="container-lg p-responsive clearfix text-left">
        <div tabindex="-1" class="d-flex flex-items-center p-4 position-sticky top-0 color-bg-default" style="z-index:3">
          <a class="color-fg-default mr-3" aria-hidden="true" tabindex="-1" href="/en">
              <svg class="logo" viewBox="0, 0, 400,400"><g><path d="M174.219 1.228 C 8.875 22.436,-59.238 226.958,60.266 343.392 C 87.702 370.124,132.680 394.619,144.930 389.500 C 150.459 387.190,150.775 385.749,150.778 362.808 L 150.781 342.413 144.727 343.530 C 114.148 349.175,93.445 339.992,81.380 315.433 C 74.901 302.246,69.884 295.808,61.715 290.198 C 50.347 282.392,50.621 278.347,62.500 278.622 C 73.190 278.871,83.703 286.246,92.972 300.000 C 102.809 314.597,113.084 320.596,128.125 320.524 C 139.471 320.469,151.562 316.855,151.563 313.519 C 151.563 308.098,156.720 296.620,161.573 291.242 C 164.602 287.885,165.257 288.295,154.297 286.692 C 108.457 279.990,82.087 256.222,75.016 215.234 C 69.794 184.970,74.069 161.355,88.133 142.774 C 90.240 139.990,92.212 137.311,92.515 136.820 C 92.819 136.329,92.283 132.853,91.325 129.096 C 88.324 117.329,88.988 102.834,93.123 89.844 C 95.448 82.540,95.461 82.530,102.199 83.099 C 112.494 83.970,129.484 90.910,143.843 100.111 L 149.795 103.925 157.905 101.994 C 184.110 95.755,216.058 95.751,242.095 101.984 L 250.205 103.925 256.217 100.069 C 277.403 86.478,302.215 79.043,305.294 85.362 C 310.314 95.667,311.926 116.455,308.684 129.096 C 307.721 132.853,307.181 136.329,307.485 136.820 C 307.788 137.311,309.760 139.990,311.867 142.774 C 325.931 161.355,330.206 184.970,324.984 215.234 C 317.709 257.402,288.651 282.315,241.055 287.191 C 235.057 287.806,235.155 287.617,238.755 291.601 C 247.857 301.676,249.216 309.284,249.230 350.246 C 249.243 385.498,249.246 385.529,253.231 388.487 C 258.512 392.407,267.035 390.277,288.734 379.616 C 364.932 342.178,409.287 259.734,398.801 175.032 C 385.222 65.349,284.148 -12.872,174.219 1.228 M217.209 145.118 C 214.282 146.592,214.420 146.367,189.095 191.016 C 182.515 202.617,174.721 216.354,171.776 221.543 C 164.321 234.678,164.219 239.366,171.332 242.080 C 178.047 244.641,176.268 247.092,206.981 192.969 C 214.418 179.863,222.198 166.152,224.271 162.500 C 230.062 152.297,229.954 147.431,223.881 144.894 C 220.466 143.467,220.491 143.466,217.209 145.118 M141.016 162.041 C 139.727 162.614,136.577 165.325,134.017 168.065 C 131.457 170.805,125.569 176.975,120.931 181.775 C 115.565 187.331,112.500 191.111,112.500 192.173 C 112.500 193.091,112.148 193.625,111.719 193.359 C 111.289 193.094,110.938 193.228,110.938 193.658 C 110.938 194.087,111.244 194.628,111.618 194.860 C 111.992 195.091,112.513 196.254,112.776 197.445 C 113.081 198.825,118.174 204.702,126.838 213.672 L 140.421 227.734 144.103 227.734 C 149.174 227.734,152.344 224.381,152.344 219.015 C 152.344 215.500,152.129 215.176,144.722 207.504 C 140.530 203.162,136.090 198.488,134.855 197.118 L 132.611 194.626 142.477 184.077 C 151.972 173.925,152.344 173.401,152.344 170.141 C 152.344 163.422,146.810 159.465,141.016 162.041 M251.026 162.461 C 243.616 166.980,244.745 171.251,256.741 184.077 L 266.608 194.626 264.364 197.118 C 263.129 198.488,258.689 203.162,254.497 207.504 C 247.090 215.176,246.875 215.500,246.875 219.015 C 246.875 224.381,250.044 227.734,255.116 227.734 L 258.798 227.734 272.381 213.672 C 281.045 204.702,286.138 198.825,286.443 197.445 C 286.705 196.254,287.227 195.091,287.601 194.860 C 287.975 194.628,288.281 194.087,288.281 193.658 C 288.281 193.228,287.930 193.094,287.500 193.359 C 287.070 193.625,286.719 193.091,286.719 192.173 C 286.719 191.111,283.654 187.331,278.287 181.775 C 273.650 176.975,267.761 170.804,265.201 168.064 C 258.680 161.082,255.409 159.789,251.026 162.461" stroke="none" fill="#000000" fill-rule="evenodd"/></g></svg>
          </a>
          <a class="f4 text-semibold color-fg-default no-underline no-wrap pl-2 flex-auto" href="/en">GitHub Web IDE Options</a>
        </div>
        <div class="Layout pt-4 Layout--flowRow-until-md Layout--sidebarPosition-start Layout--sidebarPosition-flowRow-start">
          <div class="Layout-sidebar">
            <div class="pr-md-4 pr-0">
              <navigation-list>
                <nav class="NavigationList">
                  <ul role="list" nav_classes="org-sub-menu" class="ActionList">
                    <li class="ActionList-item--navActive ActionList-item org-menu-item">
                      <a href="#" class="ActionList-content ActionList-content--visual16">
                        <span class="ActionList-item-visual ActionList-item-visual--leading">
                          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon octicon-gear">
                            <path fill-rule="evenodd" d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        </span>
                        <span class="ActionList-item-label">
                          Settings
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </navigation-list>
            </div>
          </div>
          <div class="Layout-main">
            <div class="Layout-main-centered-md">
              <div class="container-md">
                <div>
                  <div class="Subhead">
                    <h2 class="Subhead-heading">Enabled IDE list</h2>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="gitHubDev" />
                      GitHub Dev
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="vsCodeDev" />
                      VSCode Dev
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="codeSandbox" />
                      CodeSandbox
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="gitHub1s" />
                      GitHub1s
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="gitLab1s" />
                      GitLab1s
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="replit" />
                      Repl.it
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="stackBlitz" />
                      StackBlitz
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="gitpod" />
                      Gitpod
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="glitch" />
                      Glitch
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="sourcegraph" />
                      Sourcegraph
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="activeForks" />
                      Active Forks
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="gitpop2" />
                      Gitpop2
                    </label>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="gitHubMemory" />
                      GitHub Memory
                    </label>
                  </div>
    
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="cloneInVSCode" />
                      Clone in VSCode
                    </label>
                  </div>
                  <!-- <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="vsCodeRemoteRepositories" />
                      VSCode Remote Repositories
                    </label>
                  </div> -->
    
                  <div class="Subhead mt-6">
                    <h2 class="Subhead-heading">Opening options</h2>
                  </div>
                  <div class="form-checkbox">
                    <label>
                      <input type="checkbox" id="openInNewTab" />
                      Open IDE in new tab
                    </label>
                  </div>
                </div>
    
                <div class="mt-6 mb-4">
                  <button id="reset-button" type="button" class="btn mr-2">Reset to default</button>
                </div>
    
              </div>
            </div>
          </div>
        </div>
        <div class="py-3">Made with <span class="tooltipped tooltipped-n" aria-label="Coffee">☕</span> by <a href="https://github.com/zvizvi/GitHub-Web-IDE" target="_blank">@zvizvi</a></div>
      </div>
    </main>
</body>`, (iframe) => {
            // other methods run javascript in iframe
            // 1. iframe.contentWindow.eval;
            // 2. inline script in html
            // however, both of them are blocked by CSP with policy "script-src github.githubassets.com;"
            optionFrameJS.call(iframe.contentWindow)
        });
        dialog.showModal();
    });
    const platform = location.host.split(".")[0];
    const ideWebsitesList = [
        {
            title: "GitHub Dev",
            name: "gitHubDev",
            baseurl: "https://github.dev/",
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 16 16" class="mr-2" style="vertical-align:sub"><path fill="var(--color-fg-default)" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>',
        },
        {
            title: "VSCode Dev",
            name: "vsCodeDev",
            baseurl: "https://vscode.dev/github/",
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 276 276" class="mr-2" style="vertical-align:sub"><g><path d="M246.94 27.6383L194.193 2.24138C188.088 -0.698302 180.791 0.541721 175.999 5.33332L3.32371 162.773C-1.32082 167.008 -1.31548 174.32 3.33523 178.548L17.4399 191.37C21.2421 194.827 26.9682 195.081 31.0619 191.976L239.003 34.2269C245.979 28.9347 255.999 33.9103 255.999 42.6667V42.0543C255.999 35.9078 252.478 30.3047 246.94 27.6383Z" fill="var(--color-fg-default)"/><g><path d="M246.94 228.362L194.193 253.759C188.088 256.698 180.791 255.458 175.999 250.667L3.32371 93.2272C-1.32082 88.9925 -1.31548 81.6802 3.33523 77.4523L17.4399 64.6298C21.2421 61.1733 26.9682 60.9188 31.0619 64.0245L239.003 221.773C245.979 227.065 255.999 222.09 255.999 213.333V213.946C255.999 220.092 252.478 225.695 246.94 228.362Z" fill="var(--color-fg-default)"/></g><g><path d="M194.196 253.763C188.089 256.7 180.792 255.459 176 250.667C181.904 256.571 192 252.389 192 244.039V11.9606C192 3.61057 181.904 -0.571175 176 5.33321C180.792 0.541166 188.089 -0.700607 194.196 2.23648L246.934 27.5985C252.476 30.2635 256 35.8686 256 42.0178V213.983C256 220.132 252.476 225.737 246.934 228.402L194.196 253.763Z" fill="var(--color-fg-default)"/></g></g></svg>',
        },
        {
            title: "CodeSandbox",
            name: "codeSandbox",
            baseurl: `https://codesandbox.io/s/${platform}/`,
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 222 252" fill="none" class="mr-2" style="vertical-align:sub"><path d="M7.21906 55.4205L104.143 2.63078C109.425 -0.246393 115.823 -0.172544 121.038 2.8258L214.465 56.5439C218.759 59.0125 221.405 63.5875 221.405 68.5401V182.652C221.405 187.615 218.747 192.199 214.438 194.663L117.637 250.034C113.346 252.488 108.072 252.467 103.8 249.979L6.87245 193.515C2.61721 191.036 0 186.483 0 181.558V67.5728C0 62.5058 2.76932 57.8441 7.21906 55.4205Z" fill="var(--color-fg-default)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M110.695 126.451V235.33C112.591 235.33 113.837 234.919 115.539 233.947L202.722 184.128C206.163 182.156 207.567 179.101 207.567 175.133V74.1121C207.567 72.1218 207.148 70.931 206.181 69.2687L113.484 121.645C111.76 122.63 110.695 124.465 110.695 126.451ZM159.13 188.972C159.13 191.739 158.093 193.123 155.67 194.507L126.609 211.113C124.534 212.496 121.766 211.805 121.766 209.037V135.001C121.766 133.021 123.509 130.454 125.225 129.466L191.651 91.4103C193.496 90.3484 195.11 92.0491 195.11 94.178V133.618C195.11 135.662 194.146 137.499 192.342 138.461L162.59 154.375C160.786 155.337 159.13 157.174 159.13 159.219V188.972Z" fill="#999999"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8252 175.131V74.1108C13.8252 70.138 15.9113 66.395 19.3606 64.4238L103.775 16.6811C105.594 15.7173 108.618 15.2973 110.695 15.2973C112.771 15.2973 115.973 15.8114 117.614 16.6811L201.337 64.4238C202.993 65.4026 205.243 67.6571 206.18 69.2674L113.462 121.854C111.738 122.839 110.695 124.711 110.695 126.697V235.329C108.799 235.329 106.861 234.917 105.159 233.945L20.0525 184.819C16.6031 182.847 13.8252 179.104 13.8252 175.131ZM26.2798 94.1766V133.616C26.2798 136.384 26.9718 137.768 29.7395 139.152L58.8003 155.758C61.5679 157.142 62.2599 159.217 62.2599 161.293V188.97C62.2599 191.737 62.9518 193.121 65.7195 194.506L94.7803 211.112C97.5477 212.496 99.6238 211.804 99.6238 209.036V135.001C99.6238 132.924 98.9318 130.848 96.1646 129.465L31.1233 92.1008C29.0475 90.717 26.2798 91.4089 26.2798 94.1766ZM139.756 47.1258L114.154 61.6561C112.079 63.04 109.311 63.04 107.235 61.6561L81.6337 47.1258C79.9485 46.1733 77.7863 46.1781 76.0983 47.1258L44.2699 65.1158C41.5022 66.4997 41.5022 69.2674 44.2699 70.6512L107.926 107.323C109.63 108.298 111.759 108.298 113.462 107.323L177.119 70.6512C179.195 69.2674 179.887 66.4997 177.119 65.1158L145.291 47.1258C143.603 46.1781 141.441 46.1733 139.756 47.1258Z" fill="#F2F2F2"></path></svg>',
        },
        {
            title: "GitHub1s",
            name: "gitHub1s",
            baseurl: "https://github1s.com/",
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 400 400" class="mr-2" style="vertical-align:sub"><g><path stroke="none" fill="var(--color-fg-default)" d="M35.587 25.574 C 26.887 34.274,22.366 85.319,28.408 106.640 C 29.808 111.581,30.362 115.990,29.639 116.436 C 22.375 120.926,6.586 153.361,2.311 172.577 C -1.702 190.614,-0.380 242.019,4.623 262.483 C 23.337 339.024,75.772 372.234,183.814 375.971 C 333.315 381.142,400.042 329.514,399.989 208.709 C 399.973 171.788,393.448 148.895,375.953 124.378 L 369.021 114.663 371.179 105.378 C 378.038 75.873,372.074 26.678,361.310 23.977 C 349.211 20.940,315.376 33.668,289.736 50.901 L 277.128 59.375 269.292 57.047 C 230.073 45.401,175.046 45.086,133.396 56.269 L 122.262 59.259 109.633 50.951 C 77.787 29.999,43.062 18.098,35.587 25.574 M199.219 174.024 C 215.547 173.970,243.672 173.640,261.719 173.291 C 297.764 172.594,302.347 173.496,314.439 183.671 C 360.164 222.146,353.423 307.996,302.675 333.490 C 257.998 355.934,129.596 354.142,90.730 330.533 C 37.291 298.070,45.173 192.813,102.426 174.343 C 108.963 172.234,114.738 172.025,139.844 172.986 C 156.172 173.611,182.891 174.078,199.219 174.024 M115.787 201.123 C 100.709 208.550,93.908 238.122,102.705 258.007 C 117.257 290.906,150.790 276.028,150.686 236.719 C 150.615 210.124,133.322 192.485,115.787 201.123 M265.858 201.088 C 262.979 202.507,258.887 206.290,256.767 209.495 C 233.925 244.011,263.236 295.935,289.886 268.166 C 314.409 242.614,294.482 186.985,265.858 201.088 M176.563 301.563 C 164.758 313.367,192.597 331.661,210.156 323.639 C 224.183 317.230,229.788 307.913,223.438 301.563 C 219.132 297.257,215.495 297.640,208.594 303.125 C 205.350 305.703,201.482 307.813,200.000 307.813 C 198.518 307.813,194.650 305.703,191.406 303.125 C 184.505 297.640,180.868 297.257,176.563 301.563"/></g></svg>',
        },
        {
            title: "GitLab1s",
            name: "gitLab1s",
            baseurl: "https://gitlab1s.com/",
            platforms: ["gitlab"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 400 400" class="mr-2" style="vertical-align:sub"><g><path stroke="none" fill="var(--color-fg-default)" d="M35.587 25.574 C 26.887 34.274,22.366 85.319,28.408 106.640 C 29.808 111.581,30.362 115.990,29.639 116.436 C 22.375 120.926,6.586 153.361,2.311 172.577 C -1.702 190.614,-0.380 242.019,4.623 262.483 C 23.337 339.024,75.772 372.234,183.814 375.971 C 333.315 381.142,400.042 329.514,399.989 208.709 C 399.973 171.788,393.448 148.895,375.953 124.378 L 369.021 114.663 371.179 105.378 C 378.038 75.873,372.074 26.678,361.310 23.977 C 349.211 20.940,315.376 33.668,289.736 50.901 L 277.128 59.375 269.292 57.047 C 230.073 45.401,175.046 45.086,133.396 56.269 L 122.262 59.259 109.633 50.951 C 77.787 29.999,43.062 18.098,35.587 25.574 M199.219 174.024 C 215.547 173.970,243.672 173.640,261.719 173.291 C 297.764 172.594,302.347 173.496,314.439 183.671 C 360.164 222.146,353.423 307.996,302.675 333.490 C 257.998 355.934,129.596 354.142,90.730 330.533 C 37.291 298.070,45.173 192.813,102.426 174.343 C 108.963 172.234,114.738 172.025,139.844 172.986 C 156.172 173.611,182.891 174.078,199.219 174.024 M115.787 201.123 C 100.709 208.550,93.908 238.122,102.705 258.007 C 117.257 290.906,150.790 276.028,150.686 236.719 C 150.615 210.124,133.322 192.485,115.787 201.123 M265.858 201.088 C 262.979 202.507,258.887 206.290,256.767 209.495 C 233.925 244.011,263.236 295.935,289.886 268.166 C 314.409 242.614,294.482 186.985,265.858 201.088 M176.563 301.563 C 164.758 313.367,192.597 331.661,210.156 323.639 C 224.183 317.230,229.788 307.913,223.438 301.563 C 219.132 297.257,215.495 297.640,208.594 303.125 C 205.350 305.703,201.482 307.813,200.000 307.813 C 198.518 307.813,194.650 305.703,191.406 303.125 C 184.505 297.640,180.868 297.257,176.563 301.563"/></g></svg>',
        },
        {
            title: "Repl.it",
            name: "replit",
            baseurl: `https://repl.it/${platform}/`,
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 900 900" class="mr-2" style="vertical-align:sub"><g fill-rule="nonzero" stroke="none" stroke-width="1"><path fill="var(--color-fg-default)" d="M895.5 408.05c1.23 13.58 2.08 27.28 2.08 41.19 0-13.91-.85-27.6-2.08-41.19z"></path><path fill="var(--color-fg-default)" d="M230 405.68S105.25 865.32 605.26 869.32c156.88-58.4 272.48-201.58 290-374.2 1.21-11.94 1.57-24.12 1.84-36.32.05-3.21.48-6.33.48-9.56 0-13.9-.85-27.61-2.08-41.19C763.4 928.08 179 724.39 230 405.68z"></path><path fill="var(--color-fg-default)" d="M488.54 235.07S23 105.06 30.16 612.68a449.86 449.86 0 00108.49 162.17c2 1.89 4.07 3.68 6.09 5.54a450.17 450.17 0 0042.54 34.67c2.31 1.65 4.48 3.47 6.8 5.08a446.74 446.74 0 0049.11 29.16c4.93 2.54 10 4.86 15 7.23a443.91 443.91 0 0044.85 18.2c3.75 1.28 7.33 2.88 11.13 4.07A444.68 444.68 0 00370 892c5.71 1 11.48 1.84 17.26 2.64a450 450 0 0059.11 4.59c.76 0 1.49.12 2.25.12 14.92 0 29.65-.8 44.18-2.23-522.34-124.57-323.8-708.65-4.26-662.05z"></path><path fill="var(--color-fg-default)" d="M670 475.8S780.14 11.46 284.36 32.2C118.11 97.87.42 259.63.42 449.2a451.1 451.1 0 004.61 61C109.37-15.14 703.8 155 670 475.8z"></path><path fill="var(--color-fg-default)" d="M431.95 675.62S898.3 736.5 869.11 293.11C805.64 122.44 641.76.62 449 .62a450.24 450.24 0 00-81.35 7.73c519.64 63.79 384.58 671.81 64.3 667.27z"></path><path fill="var(--color-fg-default)" d="M578.46 449.25c0 50.824-30.618 96.643-77.575 116.09-46.957 19.445-101.005 8.688-136.937-27.256-35.933-35.944-46.673-89.995-27.212-136.946 19.46-46.95 65.29-77.554 116.114-77.538 69.381.017 125.616 56.269 125.61 125.65z"></path></g></svg>',
        },
        {
            title: "StackBlitz",
            name: "stackBlitz",
            baseurl: "https://githubblitz.com/",
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 25 33" class="mr-2" style="vertical-align:sub"><path fill="var(--color-fg-default)" fill-rule="nonzero" stroke="none" stroke-width="1" d="M0 19.9187087L9.87007874 19.9187087 4.12007874 34 23 13.9612393 13.0846457 13.9612393 18.7893701 0z"></path></svg>',
        },
        {
            title: "Gitpod",
            name: "gitpod",
            baseurl: `https://gitpod.io/#https://${platform}.com/`,
            platforms: ["github", "gitlab"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 32 32" class="mr-2" style="vertical-align:sub"><path fill="var(--color-fg-default)" d="M18.748 1.594a3.16 3.16 0 01-1.178 4.313l-9.437 5.387a.8.8 0 00-.403.695v8.456a.8.8 0 00.403.695l7.47 4.264a.8.8 0 00.794 0l7.47-4.264a.8.8 0 00.403-.695v-5.259l-6.715 3.785a3.167 3.167 0 01-4.312-1.2 3.16 3.16 0 011.202-4.308l9.607-5.415c2.927-1.65 6.548.463 6.548 3.82v9.22a6.016 6.016 0 01-3.035 5.224l-8.576 4.895a6.03 6.03 0 01-5.978 0l-8.576-4.895A6.016 6.016 0 011.4 21.087v-9.74a6.016 6.016 0 013.035-5.225L14.43.417a3.167 3.167 0 014.318 1.177z"/></svg>',
        },
        {
            title: "Glitch",
            name: "glitch",
            baseurl: "https://glitch.com/edit/#!/import/github/",
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 614.93 478.48" class="mr-2" style="vertical-align:sub"><path d="M243,242.33V224.71H461.72v3.42c-28,9.12-69.46,17.72-80.1,19.38,5.8,2.7,7.69,5.08,10.16,5.89a208.75,208.75,0,0,1,25.42,4.68c16.47,3.79,30.11,7.38,41.33,11.34,11.66,4.36,17.83,6.37,24.7,8.35a246,246,0,0,0,24.36,5.33c6.77,1,21.16-4,24.54-4.87s47.15-17.88,47.15-17.88,19-7.11,26.52-9c6.91-1.91,7.09.4,7.09.4a47.43,47.43,0,0,1,1.48,6.11,100.59,100.59,0,0,1,.18,19.59,149.43,149.43,0,0,1-3,14.93A65.07,65.07,0,0,1,607,304.16c-1.4,2.45-3.56,6.27-4.3,7.93a22,22,0,0,0-2.18,7.29,35.09,35.09,0,0,0,.49,10.29c.6,2.9,2.54,10.17,2.54,10.17l2.29,9.09-313.46-.38,0,18.38H38.53a2.51,2.51,0,0,0,.07-1.31c-.26-1.12-1.54-2.77-6.44-5.72-6.31-4.11-26.23-11.32-32-13.43C-.07,341-2.44,315.8,29,288.15a297.4,297.4,0,0,1,29.66-22.3s27-17.66,48.46-24.71" fill="var(--color-fg-default)" style="isolation:isolate"/><path d="M605.79,348.93l-313.46-.38,0,18.38H38.53c-1.41,4.14-20.46,11.46-33.5,14,7,9.63,20.22,18.42,33.49,26a304.23,304.23,0,0,0,39.72,18.11c5,1.73,19.9,7.56,28.78,8.26a206.19,206.19,0,0,0,37.08-.7,173.16,173.16,0,0,0,19.37-3s1.24,4.9,9,15.66c5.61,7.45,12.49,15.07,19.36,19.58,8.18,5.17,10.9,7.9,28.62,11.13a141.64,141.64,0,0,0,40,1.86c9-.83,17.72-1.12,25.47-3.27.37-9.94-.88-19.12-4.88-27.23,10.76.43,16.74.74,31.76.45,29-.55,60.67-6.52,86.63-11.48,21.45-4.09,56.54-13.92,73.32-19.5,9.64-3.21,32.56-11,34.69-11,3.45,0,8.63.81,15.84,2.94,10.71,3.17,18.94,6,37,12.49s34.13,12.15,43.91,13.49c7.23,1,8.12,0,8.62-3.62.83-4.58-5.55-15-8.18-23.18a43.14,43.14,0,0,1-1.89-26,70.16,70.16,0,0,1,2.46-7.5,41,41,0,0,0,2.24-15.55A48,48,0,0,0,605.79,348.93Z" fill="var(--color-fg-muted)"/><path d="M601.7,198.75a33,33,0,0,1,1.3-10.19c.62-2,1.26-3.78,2.44-7.15a40.44,40.44,0,0,0,1.89-15.93,82,82,0,0,0-1.57-9.49l-229.88-.39v17.9H38.68c.68,4.91-20.5,12.76-33.54,15.34C11.94,198.18,25.69,207.39,39,215a311.06,311.06,0,0,0,39.78,18.11c6,2.12,19.12,7,28.4,8.07L243,242.33V224.71H461.72v3.42c3.3-.92,8.2-2.38,11.35-3.42,9.64-3.21,32.94-11.23,35.07-11.26,3.46,0,7.87.76,15.08,2.89,10.71,3.16,19.23,6.33,37.31,12.78s33.77,12,43.53,13.44c8.39,1.25,8.89-1.56,8.89-4.91.2-4.27-6.12-15.06-8.76-23.28A50.64,50.64,0,0,1,601.7,198.75Z" fill="var(--color-fg-muted)"/><path d="M614.37,65.91c.18,3.26.68,16.56.18,19.58a113.94,113.94,0,0,1-2.8,13.69c-1.3,4.1-3.28,10-4.8,12.68-1.4,2.45-3.68,6.23-4.42,7.89a24.77,24.77,0,0,0-2.06,7.69,35.09,35.09,0,0,0,.49,10.29c.6,2.9,2.54,10.17,2.54,10.17l2.26,8.09-229.88-.39v17.9H38.68s.3-2-5.8-5.8c-5.5-3-23.4-10.6-32.5-13.4C-.5,149.73-2.44,123.85,29,96.21A295.82,295.82,0,0,1,58.68,73.9s26.08-18.51,54.1-26.8a142.37,142.37,0,0,1,20.6-4.2c19.87-1.62,51.72-2.4,54.84-2.29A231.72,231.72,0,0,1,208.58,17C220.45,5.31,227.18.8,234.28,0c9.8.58,62.26,12.84,77.07,17.25,8.5,2.4,25.52,7,39,12.65,13.9,5.34,17.28,9.88,17.28,9.88a124.57,124.57,0,0,0,8.46,11.33c3.28,3.28,12.7,8.94,15.32,10,3.95,1,10.63,1.06,25.75,4.71,15.8,3.76,30,7.78,41.3,11.3,11.7,3.9,17.8,6.6,24.8,8.4s18.2,4.5,24.4,5.4,19.83-4,23.21-4.87S579.28,68.4,579.28,68.4s24.3-8.69,26.5-9.4C613.15,56.6,614.37,56.43,614.37,65.91Z" fill="var(--color-fg-default)" style="isolation:isolate"/><path d="M107,93.51c-15.9,0-27.9,12.2-28.7,29.5-.8,17.1,12.9,29.5,28.7,29.5s28.7-13.2,28.7-29.5S122.91,93.51,107,93.51Zm-6.7,52.8c-12.2,0-22.1-8.7-22-22.7.4-11.5,9.9-22.7,22-22.7s22,10.1,22,22.7S112.51,146.31,100.31,146.31Z" fill="#fff"/><path d="M100.31,101c-12.2,0-21.7,11.2-22,22.7,0,14,9.9,22.7,22,22.7s22-10.1,22-22.7S112.51,101,100.31,101Zm-10.4,37.8a7.4,7.4,0,1,1,7.2-7.4A7.28,7.28,0,0,1,89.91,138.81Z"/><ellipse cx="89.91" cy="131.41" rx="7.2" ry="7.4" fill="#fff"/><path d="M107,287.09c-15.9,0-27.9,12.2-28.7,29.5-.8,17.1,12.9,29.5,28.7,29.5s28.7-13.2,28.7-29.5S122.91,287.09,107,287.09Zm-6.7,52.8c-12.2,0-22.1-8.7-22-22.7.4-11.5,9.9-22.7,22-22.7s22,10.1,22,22.7S112.51,339.89,100.31,339.89Z" fill="#fff"/><path d="M100.31,294.59c-12.2,0-21.7,11.2-22,22.7,0,14,9.9,22.7,22,22.7s22-10.1,22-22.7S112.51,294.59,100.31,294.59Zm-10.4,37.8a7.4,7.4,0,1,1,7.2-7.4A7.28,7.28,0,0,1,89.91,332.39Z"/><ellipse cx="89.91" cy="324.99" rx="7.2" ry="7.4" fill="#fff"/><path d="M224.46,173.5c-4.11,15.43-8.38,28.13-8.46,28.36a7,7,0,0,0,13.27,4.49c.34-1,5.26-15.65,9.68-32.85Z" fill="#ccc"/><path d="M192.24,173.5c-1.28,2.89-2.2,4.66-2.25,4.76a6,6,0,0,0,10.6,5.61,113.2,113.2,0,0,0,4.68-10.37Z" fill="#ccc"/><path d="M231.9,135.15c0,.21-.06.41-.08.62-.8,10.93-4,25.23-7.36,37.73H239c3.12-12.14,6-25.57,6.81-36.42,1.78-12.09-5.61-34.81-10.5-48.08a1196.75,1196.75,0,0,1,125.12,11.37c71.07,10.28,156.8,52.88,157.66,53.31a7,7,0,1,0,6.26-12.52c-3.58-1.8-88.58-44-161.91-54.65-76-11-136.79-11.78-137.39-11.78a7,7,0,0,0-6.55,9.67C224.48,99,233.46,125.62,231.9,135.15Z" fill="#ccc"/><path d="M200.57,136.58c1.17,13.32-4.88,29.16-8.33,36.92h13c3.84-9.64,8.44-24.47,7.25-38a111.21,111.21,0,0,0-17.8-50.8,6,6,0,0,0-9.76,7A100.88,100.88,0,0,1,200.57,136.58Z" fill="#ccc"/><path d="M224.59,366.89c-4.11,15.43-8.38,28.13-8.46,28.36a7,7,0,0,0,13.26,4.49c.35-1,5.27-15.65,9.68-32.85Z" fill="#ccc"/><path d="M192.37,366.89c-1.29,2.89-2.21,4.66-2.26,4.76a6,6,0,0,0,10.61,5.61,113.2,113.2,0,0,0,4.68-10.37Z" fill="#ccc"/><path d="M232,328.54a6.18,6.18,0,0,0-.07.62c-.81,10.93-4,25.23-7.36,37.73h14.48c3.12-12.14,6-25.57,6.82-36.42,1.78-12.09-5.61-34.81-10.51-48.08a1196.87,1196.87,0,0,1,125.13,11.37c71.06,10.28,156.8,52.88,157.65,53.31a7,7,0,1,0,6.27-12.52c-3.58-1.8-88.58-44-161.92-54.65a1167.85,1167.85,0,0,0-137.39-11.79,7,7,0,0,0-6.54,9.68C224.61,292.35,233.59,319,232,328.54Z" fill="#ccc"/><path d="M200.69,330c1.18,13.32-4.88,29.16-8.32,36.92h13c3.83-9.64,8.44-24.47,7.25-38a111.21,111.21,0,0,0-17.8-50.8,6,6,0,0,0-9.76,7A100.94,100.94,0,0,1,200.69,330Z" fill="#ccc"/></svg>',
        },
        {
            title: "Sourcegraph",
            name: "sourcegraph",
            baseurl: `https://sourcegraph.com/${platform}.com/`,
            platforms: ["github", "gitlab"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 65 64" class="mr-2" style="vertical-align:sub"><path d="M19.5809 8.42498L33.4692 59.2756C34.4044 62.6921 37.9254 64.7045 41.3365 63.772C44.7477 62.8342 46.7547 59.3051 45.8222 55.8886L31.9312 5.03529C30.996 1.61881 27.475 -0.393568 24.0639 0.541611C20.6554 1.47679 18.6457 5.00582 19.5809 8.42498Z" fill="var(--color-fg-default)"></path><path d="M45.2995 8.23211L10.5184 47.5659C8.17375 50.2187 8.41759 54.2756 11.065 56.6256C13.7125 58.9756 17.7587 58.7291 20.1033 56.0763L54.8845 16.7425C57.2291 14.0897 56.9853 10.0355 54.3378 7.68548C51.6904 5.33547 47.6469 5.57931 45.2995 8.23211Z" fill="var(--color-fg-default)"></path><path d="M5.89199 30.0308L55.494 46.4621C58.8515 47.5768 62.4716 45.7493 63.5837 42.3864C64.6957 39.0208 62.8709 35.3927 59.516 34.2833L9.91138 17.844C6.55385 16.7346 2.93372 18.5568 1.82437 21.9223C0.712335 25.2879 2.53446 28.9161 5.89199 30.0308Z" fill="var(--color-fg-default)"></path></svg>',
        },
        {
            title: "Active Forks",
            name: "activeForks",
            baseurl: "https://techgaun.github.io/active-forks/index.html#",
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 480 512" style="vertical-align:sub" class="mr-2"><path fill="var(--color-fg-default)" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>',
        },
        {
            title: "Gitpop2",
            name: "gitpop2",
            baseurl: "http://gitpop2.herokuapp.com/",
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 1024 1536" style="vertical-align:sub" class="mr-2"><path fill="var(--color-fg-default)" d="M288 1344q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm0-1152q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm640 128q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm96 0q0 52-26 96.5T928 486q-2 287-226 414q-67 38-203 81q-128 40-169.5 71T288 1152v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56t-136-56t-56-136q0-52 26-96.5t70-69.5V358q-44-25-70-69.5T0 192q0-80 56-136T192 0t136 56t56 136q0 52-26 96.5T288 358v497q54-26 154-57q55-17 87.5-29.5t70.5-31t59-39.5t40.5-51t28-69.5T736 486q-44-25-70-69.5T640 320q0-80 56-136t136-56t136 56t56 136z"></path></svg>',
        },
        {
            title: "GitHub Memory",
            name: "gitHubMemory",
            baseurl: "https://githubmemory.com/repo/",
            platforms: ["github"],
            openInNewTab: true,
            icon: '<svg width="16" height="16" viewBox="0 0 29 29" style="vertical-align:sub" class="mr-2"><g fill="none" fill-rule="evenodd"><g fill="var(--color-fg-default)"><path d="M4.608 6.721l3.798 3.799a1.948 1.948 0 01-2.754 2.754L1.853 9.476A1.948 1.948 0 014.608 6.72zm8.023 8.024l8.086 8.085a1.948 1.948 0 11-2.755 2.754L9.877 17.5a1.948 1.948 0 012.754-2.754z"/><path d="M2.755 6.22L24.105.836a2.057 2.057 0 012.483 1.433 1.94 1.94 0 01-1.392 2.411l-21.35 5.385a2.057 2.057 0 01-2.483-1.434 1.94 1.94 0 011.392-2.41z"/><path d="M17.384 23.604l5.385-21.35A1.94 1.94 0 0125.179.86a2.057 2.057 0 011.434 2.483l-5.384 21.35a1.94 1.94 0 01-2.411 1.392 2.057 2.057 0 01-1.434-2.482z"/></g><path fill="var(--color-fg-default)" d="M16.541 13.778l-7.63 7.631a2.015 2.015 0 11-2.85-2.849l7.631-7.63a2.015 2.015 0 112.85 2.848zm-11.43 11.43l-1.108 1.109a2.015 2.015 0 11-2.85-2.85l1.11-1.108a2.015 2.015 0 112.848 2.85z"/></g></svg>',
        },
        {
            title: "Clone in VSCode",
            name: "cloneInVSCode",
            baseurl: `vscode://vscode.git/clone?url=https://${platform}.com/`,
            platforms: ["github"],
            icon: '<svg width="16" height="16" viewBox="0 0 276 276" class="mr-2" style="vertical-align:sub"><g><path d="M246.94 27.6383L194.193 2.24138C188.088 -0.698302 180.791 0.541721 175.999 5.33332L3.32371 162.773C-1.32082 167.008 -1.31548 174.32 3.33523 178.548L17.4399 191.37C21.2421 194.827 26.9682 195.081 31.0619 191.976L239.003 34.2269C245.979 28.9347 255.999 33.9103 255.999 42.6667V42.0543C255.999 35.9078 252.478 30.3047 246.94 27.6383Z" fill="var(--color-fg-default)"/><g><path d="M246.94 228.362L194.193 253.759C188.088 256.698 180.791 255.458 175.999 250.667L3.32371 93.2272C-1.32082 88.9925 -1.31548 81.6802 3.33523 77.4523L17.4399 64.6298C21.2421 61.1733 26.9682 60.9188 31.0619 64.0245L239.003 221.773C245.979 227.065 255.999 222.09 255.999 213.333V213.946C255.999 220.092 252.478 225.695 246.94 228.362Z" fill="var(--color-fg-default)"/></g><g><path d="M194.196 253.763C188.089 256.7 180.792 255.459 176 250.667C181.904 256.571 192 252.389 192 244.039V11.9606C192 3.61057 181.904 -0.571175 176 5.33321C180.792 0.541166 188.089 -0.700607 194.196 2.23648L246.934 27.5985C252.476 30.2635 256 35.8686 256 42.0178V213.983C256 220.132 252.476 225.737 246.934 228.402L194.196 253.763Z" fill="var(--color-fg-default)"/></g></g></svg>',
            class: "d-none d-md-block",
        },
        // {
        //   title: 'VSCode Remote Repositories',
        //   name: 'vsCodeRemoteRepositories',
        //   platforms: ['github'],
        //   baseurl: 'vscode://GitHub.remotehub/open?url=https://github.com/',
        //   icon: '<svg width="16" height="16" viewBox="0 0 276 276" class="mr-2" style="vertical-align:sub"><g><path d="M246.94 27.6383L194.193 2.24138C188.088 -0.698302 180.791 0.541721 175.999 5.33332L3.32371 162.773C-1.32082 167.008 -1.31548 174.32 3.33523 178.548L17.4399 191.37C21.2421 194.827 26.9682 195.081 31.0619 191.976L239.003 34.2269C245.979 28.9347 255.999 33.9103 255.999 42.6667V42.0543C255.999 35.9078 252.478 30.3047 246.94 27.6383Z" fill="var(--color-fg-default)"/><g><path d="M246.94 228.362L194.193 253.759C188.088 256.698 180.791 255.458 175.999 250.667L3.32371 93.2272C-1.32082 88.9925 -1.31548 81.6802 3.33523 77.4523L17.4399 64.6298C21.2421 61.1733 26.9682 60.9188 31.0619 64.0245L239.003 221.773C245.979 227.065 255.999 222.09 255.999 213.333V213.946C255.999 220.092 252.478 225.695 246.94 228.362Z" fill="var(--color-fg-default)"/></g><g><path d="M194.196 253.763C188.089 256.7 180.792 255.459 176 250.667C181.904 256.571 192 252.389 192 244.039V11.9606C192 3.61057 181.904 -0.571175 176 5.33321C180.792 0.541166 188.089 -0.700607 194.196 2.23648L246.934 27.5985C252.476 30.2635 256 35.8686 256 42.0178V213.983C256 220.132 252.476 225.737 246.934 228.402L194.196 253.763Z" fill="var(--color-fg-default)"/></g></g></svg>',
        //   class: 'd-none d-md-block'
        // }
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
        sourcegraph: true,
        activeForks: false,
        gitpop2: false,
        gitHubMemory: false,
        cloneInVSCode: true,
        vsCodeRemoteRepositories: false,
        openInNewTab: true,
    };

    let repoUrlPath = getRepoUrlPath();
    const hasPackageJson = [
        ...document.querySelectorAll(
            ".Details > .js-active-navigation-container > .Box-row a.js-navigation-open"
        ),
    ].some((el) => el.innerText === "package.json");

    let options;
    function init() {
        const storage = GM_getValue("options");
        options = storage || defaultOptions;

        switch (platform) {
            case "github": {
                const itemWithBorderOnTop = ideWebsitesList.find(
                    // first item only
                    (item) =>
                        (item.name === "cloneInVSCode" ||
                            item.name === "vsCodeRemoteRepositories") &&
                        filterItems(item)
                );
                if (itemWithBorderOnTop) {
                    itemWithBorderOnTop.class += " border-top";
                }

                addGitHubSelectMenu();
                document.addEventListener("soft-nav:success", () => {
                    console.log("soft-nav:success");
                    document.getElementById("open-in-web-ide")?.remove();
                    repoUrlPath = getRepoUrlPath();
                    addGitHubSelectMenu();
                });
                break;
            }
            case "gitlab": {
                addGitLabSelectMenu();
                localStorage.setItem("gl-web-ide-button-selected", "webide");
                break;
            }
            default: {
                break;
            }
        }
    }

    function getRepoUrlPath() {
        return location.pathname.split("/").slice(1, 3).join("/");
    }

    function filterItems(item) {
        if (item.title === "StackBlitz" && !hasPackageJson) {
            return false;
        }
        return (!options || options[item.name]) && item.platforms.includes(platform);
    }

    function addGitHubSelectMenu() {
        const menuElement = document.querySelector("#repo-content-turbo-frame .file-navigation");
        if (!menuElement || menuElement.querySelector("#open-in-web-ide")) {
            return;
        }

        const githubHtml = `<summary role="button" type="button" class="btn ml-2">
        <span class="d-none d-md-flex flex-items-center">
          Open In Web IDE
          <span class="dropdown-caret ml-1"></span>
        </span>
        <span class="d-inline-block d-md-none">IDE</span>
      </summary>
      <div>
        <ul class="dropdown-menu dropdown-menu-sw" style="min-width:170px;width:auto">
          ${ideWebsitesList
              .filter(filterItems)
              .map(
                  (item) => `<li class="${
                      item.class || ""
                  }" data-toggle-for="open-in-web-ide"><a href="${
                      item.baseurl
                  }${repoUrlPath}" class="dropdown-item" ${
                      (!options || options.openInNewTab) && item.openInNewTab
                          ? 'target="_blank"'
                          : ""
                  } rel="noopener noreferrer">
            ${item.icon}
            ${item.title}
          </a></li>`
              )
              .join("")}
        </ul>
      </div> `;

        const detailsElement = document.createElement("details");
        detailsElement.setAttribute(
            "class",
            "details-overlay details-reset position-relative d-block"
        );
        detailsElement.setAttribute("id", "open-in-web-ide");
        detailsElement.innerHTML = githubHtml;

        menuElement.appendChild(detailsElement);
    }

    function addGitLabSelectMenu() {
        const webIDEDropdown = document.querySelector(
            ".tree-controls .gl-new-dropdown .dropdown-menu .gl-new-dropdown-contents"
        );
        if (!webIDEDropdown || document.querySelector("#open-in-web-ide")) {
            return;
        }

        const gitLabHtml = `${ideWebsitesList
            .filter(filterItems)
            .map(
                (item) =>
                    `<li data-toggle-for="open-in-web-ide"><a href="${item.baseurl}${repoUrlPath}" class="dropdown-item" target="_blank">
          ${item.icon}
          ${item.title}
        </a></li>`
            )
            .join("")}`;

        webIDEDropdown.setAttribute("id", "open-in-web-ide");
        webIDEDropdown.setAttribute("style", "--color-fg-default: currentColor");
        webIDEDropdown.innerHTML = gitLabHtml;
    }

    window.addEventListener("load", () => {
        init();
    });
    init();
})();

function addFrameDialog(dialogId, html, frameOnload) {
    const dialog = document.createElement("dialog");
    dialog.setAttribute("id", dialogId);
    dialog.setAttribute(
        "style",
        "width: 60%;  background-color: #fff; border: 1px solid #ccc; border-radius: 5px; padding: 10px; box-sizing: border-box;"
    );
    dialog.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin: 0;">
                Options
            </h2>
            <button id="dialog-close-gwi" style="background: none; border: none; cursor: pointer; font-size: 1.5rem; font-weight: bold; color: #000; padding: 0 5px;">
                <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1045 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-spm-anchor-id="a313x.7781069.1998910419.i1"><path d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"></path></svg>
            </button>
        </div>
    `;
    const iframe = document.createElement("iframe");
    iframe.setAttribute("style", "width: 100%; height: 950px; border: none; overflow: hidden;");
    dialog.appendChild(iframe);
    document.body.appendChild(dialog);
    iframe.autofocus = true;
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(html);
    iframe.contentWindow.document.close();
    frameOnload(iframe);
    let closeBtn = dialog.querySelector("#dialog-close-gwi");
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
    // close dialog when click outside
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });
    return dialog;
}

function optionFrameJS() {
    let document = this.document;
    console.log("optionFrameJS", document);
    const defaultOptions = {
        gitHubDev: true,
        vsCodeDev: true,
        codeSandbox: true,
        gitHub1s: true,
        gitLab1s: true,
        replit: true,
        stackBlitz: true,
        gitpod: true,
        glitch: true,
        sourcegraph: true,
        activeForks: false,
        gitpop2: false,
        gitHubMemory: false,
        cloneInVSCode: true,
        vsCodeRemoteRepositories: false,
        openInNewTab: true,
    };
    let options = { ...defaultOptions };

    // Load options from storage
    const load = function () {
        const storage = GM_getValue("options");
        options = storage || defaultOptions;
        show();
    };

    // Save options to storage
    const save = function (object = options) {
        if (!Object.keys(object).some((key) => key !== "openInNewTab" && options[key])) {
            object = {
                gitHubDev: true,
                openInNewTab: object.openInNewTab,
            };
        }
        GM_setValue("options", object);
        load();
    };

    // Show options
    const show = function () {
        for (const key in defaultOptions) {
            const ele = document.getElementById(key);
            if (ele) {
                switch (typeof defaultOptions[key]) {
                    case "boolean": {
                        ele.checked = options[key];
                        break;
                    }
                    case "string": {
                        ele.value = options[key];
                        break;
                    }
                }
            }
        }
    };

    // On checkbox changed
    document.addEventListener("input", (event) => {
        if (event.target.type === "checkbox") {
            for (const key in defaultOptions) {
                const ele = document.getElementById(key);
                if(!ele)continue;
                switch (typeof defaultOptions[key]) {
                    case "boolean": {
                        options[key] = !!ele.checked;
                        break;
                    }
                    case "string": {
                        options[key] = ele.value;
                        break;
                    }
                }
            }
            save(options);
        }
    });

    // Reset to defaults
    const reset = function () {
        save(defaultOptions);
    };

    // On reset button clicked
    document.addEventListener("click", (event) => {
        if (event.target.id === "reset-button") {
            reset();
        }
    });

    load();
}