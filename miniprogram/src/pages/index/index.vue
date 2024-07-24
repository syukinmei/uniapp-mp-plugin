<template>
    <view class="content">
        <image class="logo" src="/static/logo.png" />
        <view class="text-area" @click="jumpPluginPage">
            <text class="title">{{ title }}</text>
        </view>

        <plugin-component></plugin-component>
    </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Go to Plugin page");

const jumpPluginPage = () => {
    uni.navigateTo({
        url: "plugin://koi-mp-plugin/plugin-page",
    });
};
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
