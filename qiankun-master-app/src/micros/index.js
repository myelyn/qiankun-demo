// 子应用切换加载进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Store from "../store"

// 注册微应用主应用
import { registerMicroApps, start, addGlobalUncaughtErrorHandler, initGlobalState } from 'qiankun';
import apps from "./apps";

// 微应用通信 定义全局状态，并返回通信方法
const state = {}
const actions = initGlobalState(state);
actions.setGlobalState({
    globalToken: ''
})

registerMicroApps(apps, {
    beforeLoad: (app) => {
        // 加载微应用前，加载进度条    
        NProgress.start();
        console.log("before load", app.name);

        if (Store.state.token) {
            //  微应用加载检查登录 已登录 子应用直接传参登录
            actions.setGlobalState({ globalToken: Store.state.token })
        }

        return Promise.resolve();
    },
    afterMount: (app) => {
        // 加载微应用前，进度条加载完成    
        NProgress.done();
        console.log("after mount", app.name);

        return Promise.resolve();
    },
});

addGlobalUncaughtErrorHandler((event) => {
    console.error(event);
    const { message: msg } = event
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        console.error("微应用加载失败，请检查应用是否可运行");
    }
});

export default start;
export {
    actions
}