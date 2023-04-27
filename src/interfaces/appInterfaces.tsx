import {RootStackParams} from '../navigator/Navigator';

type ComponentKey = keyof RootStackParams;

export interface MenuItem {
  name: string;
  icon: string;
  component: ComponentKey;
}
