import { StoryObj, Meta } from '@storybook/react'

import { GameCardProps } from '../../components/GameCard'
import GameCardSlider from '.'
import items from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: ({ ...args }) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider items={items} {...args} />
    </div>
  )
}
