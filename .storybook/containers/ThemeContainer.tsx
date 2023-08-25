import React, { PropsWithChildren } from 'react';
import { DocsContainer, DocsContainerProps } from '@storybook/blocks';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

export const ThemeContainer = (
  props: PropsWithChildren<DocsContainerProps>,
) => {
  const dark = useDarkMode();

  return (
    <DocsContainer
      context={props.context}
      theme={dark ? themes.dark : themes.light}
    >
      {props.children}
    </DocsContainer>
  );
};
