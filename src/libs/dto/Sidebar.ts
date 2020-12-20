export type SidebarPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

export type HideOnScrollPropsType = {
  window?: () => Window;
  children: React.ReactElement;
};
