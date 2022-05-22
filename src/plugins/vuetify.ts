/* eslint-disable import/no-extraneous-dependencies */
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00BFA5',
        secondary: '#1C2331',
        accent: '#eee',
        error: '#FF5252',
        info: '#009688',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      dark: {
        nav_color: '#263238',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
