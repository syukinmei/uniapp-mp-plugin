<script setup lang="ts">
import { onLaunch } from "@dcloudio/uni-app";
import globalData from "./globalData";

// @ts-ignore
const myPluginInterface = requirePlugin("koi-mp-plugin");

onLaunch(() => {
    console.log("App Launch", globalData, myPluginInterface);

    console.log(
        "The plugin currently in use is ...",
        myPluginInterface.getPluginName()
    );
    setTimeout(() => {
        console.log("寄主的传递的参数发生了变化...");
        globalData.age++;
    }, 2000);
});
</script>
<style></style>
