import { useEffect, useState } from 'react';

export type CircleDropdownItem = {
  label: string;
  icon: JSX.Element | string;
  value: any;
  onSelect: (value: any) => void;
};

type CircleDropdownProps = {
  items: CircleDropdownItem[];
  icon: JSX.Element;
  closeOnSelect?: boolean;
  style?: React.CSSProperties;
};

const CircleDropdown = ({
  items,
  icon,
  closeOnSelect,
  style,
}: CircleDropdownProps) => {
  const [open, setOpen] = useState(false);

  const closeDropdown = (e: MouseEvent) => {
    if (e.target instanceof Element) {
      if (
        Array.from(e.target.classList).join(' ').includes(icon.props.className)
      )
        return;
      if (e.target.classList.contains('CircleDropdown__list')) return;
      if (e.target.classList.contains('CircleDropdown__list__item')) return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [icon]);

  return (
    <div className="CircleDropdown" style={style}>
      <div
        onClick={() => setOpen(true)}
        style={{ width: '100%', height: '100%' }}
      >
        {icon}
      </div>
      <div
        className="CircleDropdown__list"
        style={!open ? { display: 'none' } : undefined}
      >
        {items.map((item) => {
          return (
            <div
              key={item.label}
              className="CircleDropdown__list__item"
              onClick={() => {
                item.onSelect(item.value);
                if (closeOnSelect) setOpen(false);
              }}
            >
              {item.label}
              {item.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleDropdown;
