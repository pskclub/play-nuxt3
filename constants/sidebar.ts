import { DesktopComputerIcon, HomeIcon, PaperAirplaneIcon } from '@heroicons/vue/solid'
import { ComponentInstance } from '@vue/devtools-api'

export interface ISidebar {
  name: string
  to: string
  icon: ComponentInstance
}

export const SIDEBAR: ISidebar[] = [
  {
    name: 'Home',
    to: '/',
    icon: HomeIcon
  },
  {
    name: 'Forms',
    to: '/form',
    icon: PaperAirplaneIcon
  },
  {
    name: 'Modal',
    to: '/modal',
    icon: DesktopComputerIcon
  },
  {
    name: 'Buttons',
    to: '/button-component',
    icon: DesktopComputerIcon
  },
  {
    name: 'Cards',
    to: '/card-component',
    icon: DesktopComputerIcon
  }
]
