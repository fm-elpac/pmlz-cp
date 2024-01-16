// css
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { zhHans } from "vuetify/locale";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    locale: "zhHans",
    fallback: "en",
    messages: { zhHans },
  },
  theme: {
    defaultTheme: "light",
  },
});
