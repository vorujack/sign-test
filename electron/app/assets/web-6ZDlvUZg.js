import { W as WebPlugin, __tla as __tla_0 } from "./index-9rE1flef.js";
let Browser, BrowserWeb;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  BrowserWeb = class extends WebPlugin {
    constructor() {
      super();
      this._lastWindow = null;
    }
    async open(options) {
      this._lastWindow = window.open(options.url, options.windowName || "_blank");
    }
    async close() {
      return new Promise((resolve, reject) => {
        if (this._lastWindow != null) {
          this._lastWindow.close();
          this._lastWindow = null;
          resolve();
        } else {
          reject("No active window to close!");
        }
      });
    }
  };
  Browser = new BrowserWeb();
});
export {
  Browser,
  BrowserWeb,
  __tla
};
