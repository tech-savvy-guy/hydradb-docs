import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const gitConfig = {
  user: 'tech-savvy-guy',
  repo: 'hydradb-docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'HydraDB',
    },
    themeSwitch: {
      enabled: false,
    }
  };
}
