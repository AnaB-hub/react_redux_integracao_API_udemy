import Home from './components/home/home';
import Users from './components/Users/Users';

const routesConfig = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/users",
    component: Users,
    exact: true
  }
]

export default routesConfig