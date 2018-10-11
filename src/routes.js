import Main from './components/Main'
import SouthStationTargetLine from './components/SouthStationTargetLine'
import Order from './components/Order'
//let 语句声明一个块级作用域的本地变量，并且可选的将其初始化为一个值。
let routes = [
  {
    path: '/',
    components: {
      'main':Main
    }
  },
  {
    path: '/southStationTargetLine',
    name: 'southStationTargetLine',
    components: {
      'main':SouthStationTargetLine
    }
  },
  {
    path: '/order',
    name: 'order',
    components: {
      'main':Order
    }
  }

  // {
  //   path: '*',
  //   redirect: { path: '/404' }
  // }
  // {
  //   path: '*',
  //   redirect: { path: '/404' }
  // }
];

export default routes;
