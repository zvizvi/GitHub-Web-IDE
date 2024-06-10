/* global chrome */

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
  idx: true,
  sourcegraph: true,
  jsDelivr: false,
  activeForks: false,
  usefulForks: false,
  gitpop2: false,
  devPod: false,
  cloneInVSCode: true,
  cloneInVSCodeInsiders: false,
  openInNewTab: true
};
let options = { ...defaultOptions };

// Load options from storage
const load = async function () {
  const storage = await chrome.storage.sync.get('options');
  options = storage.options || defaultOptions;
  show();
};

// Save options to storage
const save = async function (object = options) {
  if (!Object.keys(object).some((key) => options[key])) {
    object = {
      gitHubDev: true
    };
  }

  await chrome.storage.sync.set({
    options: object
  });
  load();
};

// Show options
const show = function () {
  for (const key in defaultOptions) {
    switch (typeof defaultOptions[key]) {
      case ('boolean'): {
        document.getElementById(key).checked = options[key];
        break;
      }
      case ('string'): {
        document.getElementById(key).value = options[key];
        break;
      }
    }
  }
};

// On checkbox changed
document.addEventListener('input', async (event) => {
  if (event.target.type === 'checkbox') {
    for (const key in defaultOptions) {
      switch (typeof defaultOptions[key]) {
        case ('boolean'): {
          options[key] = !!document.getElementById(key).checked;
          break;
        }
        case ('string'): {
          options[key] = document.getElementById(key).value;
          break;
        }
      }
    }

    await save(options);
  }
});

// Reset to defaults
const reset = async function () {
  await save(defaultOptions);
};

// On reset button clicked
document.addEventListener('click', async (event) => {
  if (event.target.id === 'reset-button') {
    await reset();
  }
});

load();
