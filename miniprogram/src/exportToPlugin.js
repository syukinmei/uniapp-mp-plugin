/** 寄主小程序导出给插件使用的变量 */
import globalData from "./globalData";
export default {
    sayHello: () => {
        console.log("hello plugin! I am miniprogram");
    },
    globalData,
};
