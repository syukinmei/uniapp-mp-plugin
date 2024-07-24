<template>
    <view>
        <view>PLUGIN_COMPONENT</view>
        <button @click="handleIncrease">count:{{ count }}</button>
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);

const handleIncrease = () => {
    count.value++;

    // @ts-ignore
    const miniProgramExports = requireMiniProgram();
    console.log(miniProgramExports.globalData.age);
    miniProgramExports.sayHello();
};
</script>

<style></style>
