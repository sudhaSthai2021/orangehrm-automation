import { World } from '@cucumber/cucumber';

declare module '@cucumber/cucumber' {
  interface World {
    page: any;
  }
}