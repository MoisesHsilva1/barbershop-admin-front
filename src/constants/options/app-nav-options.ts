import type { LucideIcon } from 'lucide-react';
import {
  Calendar,
  CreditCard,
  LayoutDashboard,
  Package,
  Percent,
  Scissors,
  Settings,
  Shield,
  Star,
  UserCog,
  Users,
  UsersRound,
} from 'lucide-react';

import { ROUTE_PATHS } from '@/routes/paths';

export interface AppNavItem {
  label: string;
  icon: LucideIcon;
  to?: string;
}

export interface AppNavSection {
  title: string;
  items: AppNavItem[];
}

export const APP_NAV_SECTIONS: AppNavSection[] = [
  {
    title: 'Home',
    items: [
      { label: 'Overview', icon: LayoutDashboard },
      { label: 'Agendamentos', icon: Calendar },
    ],
  },
  {
    title: 'Gestão',
    items: [
      { label: 'Serviços', icon: Scissors, to: ROUTE_PATHS.services },
    ],
  },
  {
    title: 'Usuários',
    items: [
      { label: 'Usuários', icon: Users },
      { label: 'Perfis', icon: UserCog },
      { label: 'Permissões', icon: Shield },
      { label: 'Configurações', icon: Settings },
    ],
  },
];
