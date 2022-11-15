import Home from '../views/Home.vue'
let microPath = ''
if (window.__POWERED_BY_QIANKUN__) {
  microPath = '/vue2-micro-app'
}

const routes = [
  {
    path: microPath + '/',
    redirect: microPath + '/analysys'
  },
  {
    name: 'Home',
    path: microPath + '/analysys',
    component: Home
  }
]
export default routes