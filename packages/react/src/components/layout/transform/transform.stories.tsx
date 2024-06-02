import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Transform } from './'

const meta = {
    title: 'Components/Layout/Transform',
    component: Transform,
} satisfies Meta<typeof Transform>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Transform> = (args) => <Transform {...args}>content</Transform>

export const Default = Template.bind({})
Default.args = {
    px: '5',
    py: '5',
    bg: 'slate.100',
}

export const AsChild: Story = {
    render(args) {
        return (
            <Transform {...args}>
                <button>content</button>
            </Transform>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
