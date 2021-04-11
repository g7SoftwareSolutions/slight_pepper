import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import vuetify from '~/plugins/vuetify' // path to vuetify export
import * as VueGoogleMaps from 'vue2-google-maps'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VueTelInput);
Vue.use(VueSweetalert2);
Vue.use(VueGoogleMaps, {
  load: {
    key: window.config.google_api_key,
    region:"tt",
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
});

import VueFormulate from '@braid/vue-formulate'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false
Vue.use(VueFormulate)

/* eslint-disable no-new */
new Vue({

  vuetify,
  i18n,
  store,
  router,
  ...App
})
