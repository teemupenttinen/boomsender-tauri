import cx from 'classnames'
import { useRouter } from 'next/router'

import { useViews } from '../utils/useViews'
import { views } from '../utils/views'
import { HomeIcon } from './icons/HomeIcon'
import { NewIcon } from './icons/NewIcon'
import { SettingsIcon } from './icons/SettingsIcon'

import { footerWrapperStyle, footerIconSelectedStyle } from './Footer.css'

export const Footer: React.FC = () => {
  const { gotoView } = useViews()
  const { pathname } = useRouter()

  return (
    <div className={footerWrapperStyle}>
      <ul>
        <li className={cx({ [footerIconSelectedStyle]: pathname === '/' })} onClick={() => gotoView('home')}>
          <HomeIcon />
        </li>
        <li
          className={cx({ [footerIconSelectedStyle]: pathname.includes(views.newDevice.route) })}
          onClick={() => gotoView('newDevice')}
        >
          <NewIcon />
        </li>
        <li
          className={cx({ [footerIconSelectedStyle]: pathname.includes(views.settings.route) })}
          onClick={() => gotoView('settings')}
        >
          <SettingsIcon />
        </li>
      </ul>
    </div>
  )
}
