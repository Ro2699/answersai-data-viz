import {
  Menu,
  Home,
  Bell,
  CalendarCheck2,
  CloudUpload,
  Settings,
  User,
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-16 bg-[#0e0e0f] flex flex-col justify-between items-center py-4">
      {/* Top section: Menu icon + nav links */}
      <div className="flex flex-col items-center">
        {/* Menu icon (non-clickable placeholder for now) */}
        <div className="h-10 flex items-center justify-center mb-4">
          <Menu className="w-4 h-4 text-white" />
        </div>

        {/* Navigation icons */}
        <div className="flex flex-col items-center gap-5">
          <SidebarIcon icon={<Home className="w-4 h-4" />} active />
          <SidebarIcon icon={<Bell className="w-4 h-4" />} />
          <SidebarIcon icon={<CalendarCheck2 className="w-4 h-4" />} />
          <SidebarIcon icon={<CloudUpload className="w-4 h-4" />} />
          <SidebarIcon icon={<Settings className="w-4 h-4" />} />
        </div>
      </div>

      {/* Bottom section: User avatar icon */}
      <div className="mb-2">
        <div className="w-7 h-7 flex items-center justify-center rounded-full border border-white text-white">
          <User className="w-[14px] h-[14px]" />
        </div>
      </div>
    </aside>
  );
};

// Reusable icon wrapper with active state styling
const SidebarIcon = ({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) => (
  <div
    className={`w-8 h-8 flex items-center justify-center rounded-md cursor-pointer transition-all
      ${active ? 'bg-[#2a2a2e] text-white' : 'text-gray-400 hover:text-white hover:bg-[#2a2a2e]'}`}
  >
    {icon}
  </div>
);

export default Sidebar;
