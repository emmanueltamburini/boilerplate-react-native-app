import {RootStackParams} from '../navigator/navigator';

type ComponentKey = keyof RootStackParams;

export interface MenuItem {
  name: string;
  icon: string;
  component: ComponentKey;
}
