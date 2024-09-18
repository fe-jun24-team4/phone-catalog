import classnames from 'classnames';

export const isLinkActive = (className: string, { isActive }: { isActive: boolean }) => {
  return classnames({
    [className]: isActive,
  });
};
