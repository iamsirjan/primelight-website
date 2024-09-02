interface Routes {
  LANDING: string;
  ABOUT: string;
  generateFullPath(property: keyof Routes): string;
}

export const Routes: Routes = {
  LANDING: '/',
  ABOUT: '/about',
  generateFullPath(property: keyof Routes): string {
    return `${this.LANDING.replace('*', '')}${this[property]}`;
  },
};
