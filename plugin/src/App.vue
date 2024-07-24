<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("Plugin Launch");
});
onShow(() => {
  console.log("Plugin Show");
});
onHide(() => {
  console.log("Plugin Hide");
});
</script>
<style></style>
