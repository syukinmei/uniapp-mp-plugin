<template>
    <view>
        <view> This is a plugin page! </view>
    </view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";

onLoad(() => {
    console.log("This is a plugin page!");
});
</script>

<style></style>
