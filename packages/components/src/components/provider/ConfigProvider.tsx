import type { FunctionComponent } from 'preact';
import 'uno.css';
import { createContext, h } from 'preact';
import { useMount } from '@src/hooks';
import initUnocssRuntime from '@unocss/runtime';
import unocssConfig from '@src/unocss.config';

export const ConfigContext = createContext({});

export const ConfigProvider: FunctionComponent = props => {
  const { children } = props;

  useMount(() => {
    initUnocssRuntime({
      defaults: unocssConfig,
    });
  });

  return <ConfigContext.Provider value={{}}>{children}</ConfigContext.Provider>;
};
