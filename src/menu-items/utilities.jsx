// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import Person4Icon from '@mui/icons-material/Person4';
// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  TimeToLeaveIcon,
  LocalActivityIcon,
  Person4Icon
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Care Concierge',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Rides',
      type: 'item',
      url: '/typography',
      icon: icons.TimeToLeaveIcon
    },
    {
      id: 'util-color',
      title: 'Events & Activities',
      type: 'item',
      url: '/color',
      icon: icons.LocalActivityIcon
    },
    {
      id: 'util-shadow',
      title: 'Drivers',
      type: 'item',
      url: '/shadow',
      icon: icons.Person4Icon
    }
  ]
};

export default utilities;
