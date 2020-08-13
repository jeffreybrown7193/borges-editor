import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
  roles?: UserRole[];
}

const data: IMenuItem[] = [
  {
    id: 'projects',
    icon: 'iconsminds-books',
    label: 'menu.projects',
    to: `${adminRoot}`
  },
  {
    id: 'reading-lists',
    icon: 'iconsminds-check',
    label: 'menu.reading-lists',
    to: `${adminRoot}/lists`
  },
  {
    id: 'book-clubs',
    icon: 'iconsminds-speach-bubble-comic-4',
    label: 'menu.book-clubs',
    to: `${adminRoot}/clubs`
  },
];
export default data;
