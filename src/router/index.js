import Vue from 'vue'
import VueRouter from 'vue-router'
import Sidebar from '../views/layouts/Sidebar.vue'
import Footer from '../views/layouts/Footer.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Home from '../views/Home.vue'
import DataKantin from  '../views/DataKantin.vue'
import DataMakanan from '../views/DataMakanan.vue'
import Pembelian from '../views/Pembelian.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer, sidebar: Sidebar},
  },
  {
    path: '/datakantin',
    name: 'datakantin',
    components: {default: DataKantin, header: Navbar, footer: Footer, sidebar: Sidebar},
  },
  {
    path: '/datamakanan',
    name: 'datamakanan',
    components: {default: DataMakanan, header: Navbar, footer: Footer, sidebar: Sidebar},
  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {default: Pembelian, header: Navbar, footer: Footer, sidebar: Sidebar},
  },
]

const router = new VueRouter({
  routes
})

export default router
