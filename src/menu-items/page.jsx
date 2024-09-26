// assets
import { LoginOutlined, ProfileOutlined, ProductOutlined } from '@ant-design/icons';
// icons
import { AppsOutlined } from '@mui/icons-material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const icons = {
  LoginOutlined,
  ProfileOutlined,
  ProductOutlined,
  AppsOutlined,
  WidgetsIcon,
  ShoppingBagIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Care Cart',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Products',
      type: 'item',
      url: '/login',
      icon: icons.WidgetsIcon,
      target: true
    },
    {
      id: 'register1',
      title: 'Shoppers',
      type: 'item',
      url: '/register',
      icon: icons.ShoppingBagIcon,
      target: true
    }
  ]
};

export default pages;
