import { W as WebPlugin, __tla as __tla_0 } from "./index-9rE1flef.js";
let SafeAreaWeb;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  SafeAreaWeb = class extends WebPlugin {
    async getSafeAreaInsets() {
      return {
        insets: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      };
    }
    async getStatusBarHeight() {
      return {
        statusBarHeight: 0
      };
    }
    setImmersiveNavigationBar() {
      throw this.unimplemented("Method not supported on Web.");
    }
  };
});
export {
  SafeAreaWeb,
  __tla
};
