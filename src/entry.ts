import { App } from "vue";
import MyButton from "./button";
import FButton from "./button/FButton.vue";
import JSXButton from "./button/JSXButton";
export { MyButton, FButton, JSXButton };
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(FButton.name, FButton);
    app.component(JSXButton.name, JSXButton);
  },
};
