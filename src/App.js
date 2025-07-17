
import './App.css';
import SideBar from './Components/Sidebar';
import { FaBuffer, FaBrain, FaCalendar, FaAddressBook, FaAddressCard } from 'react-icons/fa';

//bg-color-number
const globalIconBgColor = "bg-gray-900";
//hover:bg-color-number
const globalHoverColor = "hover:bg-gray-800";
//text-color-number
const globalIconColor = "text-green-500";
//bg-color-number
const barColor = "bg-gray-900";
//mt-number
const iconSpacing = "mt-0";

const iconSize = "w-12 h-12"; // Adjust icon size as needed

const sizeMatch = iconSize.match(/w-(\d+)/);
const baseSize = sizeMatch ? parseInt(sizeMatch[1], 10) : 6; // default fallback
const dividedSize = baseSize / 3; // ➝ 2
const dividedSizeRem = `${dividedSize * 0.25}rem`;  // e.g., 2 → 0.5rem

const sidebarItems = [
   { icon: <FaBuffer size={dividedSizeRem} />, 
    tooltip: 'Bottom Icon', 
    iconColor: globalIconColor, 
    index: 0, 
    groupIndex: 0, 
    iconBgColor: globalIconBgColor, 
    hoverColor: globalHoverColor,
    iconSize: iconSize

  },
   { icon: <FaBrain size={dividedSizeRem}/>, 
    tooltip: 'Bottom Icon', 
    iconColor: globalIconColor, 
    index: 1, 
    groupIndex: 0, 
    iconBgColor: globalIconBgColor, 
    hoverColor: globalHoverColor,
    iconSize: iconSize 
  },
   { icon: <FaCalendar size={dividedSizeRem} />, 
    tooltip: 'Bottom Icon', 
    iconColor: globalIconColor, 
    index: 2, 
    groupIndex: 0, 
    iconBgColor: globalIconBgColor, 
    hoverColor: globalHoverColor,
    iconSize: iconSize
  },
  { icon: <FaAddressBook size={dividedSizeRem} />, 
    tooltip: 'Bottom Icon', 
    iconColor: globalIconColor, 
    index: 0, 
    groupIndex: 1, 
    iconBgColor: globalIconBgColor, 
    hoverColor: globalHoverColor,
    iconSize: iconSize 
  },
  { icon: <FaAddressCard size={dividedSizeRem}/>, 
    tooltip: 'Bottom Icon', 
    iconColor: globalIconColor, 
    index: 1, 
    groupIndex: 1, 
    iconBgColor: globalIconBgColor, 
    hoverColor: globalHoverColor,
    iconSize: iconSize
  },
];

function App() {
  return (
    <div className="flex bg-black h-screen">
       <SideBar items={sidebarItems} barColor={barColor} iconSpacing={iconSpacing}/>
    </div>
  );
}

export default App;
