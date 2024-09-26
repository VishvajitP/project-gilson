// assets
import BarChartIcon from '@mui/icons-material/BarChart';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import GroupIcon from '@mui/icons-material/Group';

// icons
const icons = {
  BarChartIcon,
  StickyNote2Icon,
  GroupIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Overview',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.BarChartIcon,
      breadcrumbs: false
    },
    {
      id: 'orders',
      title: 'Orders',
      type: 'item',
      url: '/',
      icon: icons.StickyNote2Icon,
      breadcrumbs: false
    },
    {
      id: 'accounts',
      title: 'Accounts',
      type: 'item',
      url: '/accounts',
      icon: icons.GroupIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
