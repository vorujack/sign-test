import { W as WebPlugin, __tla as __tla_0 } from "./index-9rE1flef.js";
let AppWeb;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  AppWeb = class extends WebPlugin {
    constructor() {
      super();
      this.handleVisibilityChange = () => {
        const data = {
          isActive: document.hidden !== true
        };
        this.notifyListeners("appStateChange", data);
        if (document.hidden) {
          this.notifyListeners("pause", null);
        } else {
          this.notifyListeners("resume", null);
        }
      };
      document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
    }
    exitApp() {
      throw this.unimplemented("Not implemented on web.");
    }
    async getInfo() {
      throw this.unimplemented("Not implemented on web.");
    }
    async getLaunchUrl() {
      return {
        url: ""
      };
    }
    async getState() {
      return {
        isActive: document.hidden !== true
      };
    }
    async minimizeApp() {
      throw this.unimplemented("Not implemented on web.");
    }
  };
});
export {
  AppWeb,
  __tla
};
