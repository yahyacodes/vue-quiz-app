import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import TheQuiz from "./components/TheQuiz.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("the-quiz", TheQuiz);

app.mount("#app");
