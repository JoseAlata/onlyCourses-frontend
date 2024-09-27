interface MenuItemData {
  nameIcon: string;
  nameItem: string;
  pathItem: string;
}
export const menuItemData: MenuItemData[] = [
  {
    nameIcon: 'home',
    nameItem: 'home',
    pathItem: '/home',
  },
  {
    nameIcon: 'import_contacts',
    nameItem: 'courses',
    pathItem: '/mycourses',
  },
  {
    nameIcon: 'insert_chart',
    nameItem: 'progress',
    pathItem: '#',
  },
];

export const handleSidebarResize = (setOpen: { (): void; (arg0: boolean): void }) => {
  const handleResize = () => {
    if (window.innerWidth < 616) {
      setOpen(false);
    }
  };
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
};
