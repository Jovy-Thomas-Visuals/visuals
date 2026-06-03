export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'SMALL EVENT PHOTOGRAPHY', href: '/events' },
  { label: 'PACKAGES', href: '/packages' },
  { label: 'ABOUT ME', href: '/about' },
  { label: 'MENTIONS', href: '/mentions' },
  { label: 'CONTACT', href: '/contact' }
];

export function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}
