import { createSSRApp } from "vue";
import App from "./App.vue";

import PluginComponent from "@/components/plugin-component.vue";

export function createApp() {
    const app = createSSRApp(App);
    return {
        app,
        components: {
            PluginComponent,
        },
    };
}
