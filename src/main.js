import { createApp } from 'vue'
import './scss/app.scss'
import App from './App.vue'
// import './webgl'

// createApp(App).mount('#app')

document.addEventListener('DOMContentLoaded', () => {
  const height = window.innerHeight
  const header = document.querySelector('.header')

  document.addEventListener('scroll', () => {
    const scrollY = window.scrollY

    if (scrollY < height) {
      console.log(scrollY / height, Math.pow(scrollY / height, 0.5))
      header.style.opacity = 1 - Math.pow(scrollY / height, 0.5)
    }
  })
})