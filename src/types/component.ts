import { RouteLocationRaw } from 'vue-router';

/*
 * Links
 */

/**
 * Link
 */
export interface ILink {
  label?: string;
  to: RouteLocationRaw;
}

/**
 * Icon Link
 */
export interface IIconLink extends ILink {
  icon: IIcon;
}

/*
 * Icon
 */

/**
 * Icon with options
 */
export interface IIcon {
  name: string;
  color?: string;
}
