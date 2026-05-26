import { UserMenu } from '../components'
import { LogoutConfirm } from '../components'
import { Message } from '../components'
import { BurgerMenu } from '../components'
import { LastTable } from '../components'

export const MODAL_CONFIG = {
  settings: { component: UserMenu, title: 'Settings' },
  logout: { component: LogoutConfirm, title: 'Logout' },
  message: { component: Message, title: 'Message' },
  burgerMenu: { component: BurgerMenu, title: null },
  lastClosedTable: { component: LastTable, title: null },
}
