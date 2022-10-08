import type { FunctionComponent } from 'preact';
import { h, createContext } from 'preact';

export interface IntlProviderProps {
  definition: Record<string, unknown>;
}

export const IntlContext = createContext<IntlProviderProps>({ definition: {} });

export const IntlProvider: FunctionComponent<IntlProviderProps> = props => {
  const { definition, children } = props;

  return (
    <IntlContext.Provider value={{ definition }}>
      {children}
    </IntlContext.Provider>
  );
};
