import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Header from './components/header.vue'
import MainSec from './components/MainSec.vue'
import MenuSec from './components/MenuSec.vue'
import Blog from './components/Blog.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faArrowRight, faStar);

const app =createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);
app.component('Header', Header);
app.component('MainSec', MainSec);
app.component('MenuSec', MenuSec);
app.component('Blog', Blog);
app.mount("#app");