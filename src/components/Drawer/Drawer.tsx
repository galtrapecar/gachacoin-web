import { useEffect, useRef } from 'react';

type DrawerProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Drawer = ({ children, open, onClose }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!drawerRef.current) return;
    drawerRef.current.style.opacity = '0';
    drawerRef.current.style.minWidth = '0';
    drawerRef.current.style.padding = '0';
    setTimeout(() => {
      if (!drawerRef.current) return;
      drawerRef.current.style.opacity = '';
      drawerRef.current.style.minWidth = '';
      drawerRef.current.style.padding = '';
    }, 300);
  }, []);

  return (
    <div className={`Drawer ${open ? 'open' : ''}`} ref={drawerRef}>
      <div className="Drawer__close" onClick={onClose}>
        Close
      </div>
      {children}
    </div>
  );
};

export default Drawer;
