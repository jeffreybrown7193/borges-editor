import { environment } from 'src/environments/environment';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}
const data: IMenuItem[] = [
  {
    id: 'projects',
    icon: 'iconsminds-books',
    label: 'menu.projects-dashboard',
    to: `${adminRoot}`
  },
  {
    id: 'reading-lists',
    icon: 'iconsminds-check',
    label: 'menu.reading-lists',
    to: `/reading-lists`
  }
];
export default data;
