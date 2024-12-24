export interface NavLink {
  label: string;
  route: string;
}

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/#about',
  },
  {
    label: 'Projects',
    route: '/#projects',
  },
  {
    label: 'Contact',
    route: '/#contact',
  },
];
