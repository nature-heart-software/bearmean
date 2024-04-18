import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Position } from './'

const meta = {
    title: 'Components/Layout/Position',
    component: Position,
} satisfies Meta<typeof Position>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Position> = (args) => <Position {...args}>content</Position>

export const Default = Template.bind({})
Default.args = {
    px: '5',
    py: '5',
    bg: 'slate.100',
}

export const AsChild: Story = {
    render(args) {
        return (
            <Position {...args}>
                <button>content</button>
            </Position>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
