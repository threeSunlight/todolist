import App from './app.vue'
import Vue from 'vue'
import './assest/styles/style.css'
import './assest/styles/test.stylus.styl'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    render: (h) => h(App)
}).$mount(root)