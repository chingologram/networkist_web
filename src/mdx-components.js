import RootLayout from './layout.js';
import {MDXProvider} from '@mdx-js/react'
import {Transition} from 'react-transition-group';

export function useMDXComponents(components) {
  const transitionStyles = {
      entered: { opacity: 1},
      exiting: { opacity: 0},
      exited: { opacity: 0},
  };
  return {
    ...components,
      wrapper({children, ...props}) {
            return(
        <Transition in={true} appear={true} timeout={500}>
            {state => (
                    <section style={{
                      ...transitionStyles[state]
                    }}
                    className="transition-opacity duration-500 z-30 page flex flex-col items-center justify-center grow">
                        {children}
                    </section>
                  )}
        </Transition>)
      }
  }
}
