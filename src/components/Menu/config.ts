import { MenuEntry } from '@blackswap/uikit'
import { exchangeUrl } from '../../config/app'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: exchangeUrl,
      },
      {
        label: 'Liquidity',
        href: `${exchangeUrl}/#/pool`,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
]

export default config
