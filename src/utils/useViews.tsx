import { useMemo } from 'react'

import { useRouter } from 'next/router'

import { views } from './views'

export const useViews = () => {
  const { push, query } = useRouter()
  const relativePath = useMemo(() => {
    if ('relative' in query) {
      return query.relative === 'true'
    }
  }, [query])

  const gotoView = (view: keyof typeof views, relative = false) => {
    push(`${views[view].route}?relative=${relative}&position=${views[view].footerPosition}`)
  }

  return {
    gotoView,
    relativePath,
  }
}
