import RootLayout from './layout.js';
import {MDXProvider} from '@mdx-js/react'

export function useMDXComponents(components) {
  return {
    ...components,
      //wrapper({children, ...props}) {
      //    return <RootLayout suppressHydrationWarning={true}>{children}</RootLayout>
      //}
  }
}
