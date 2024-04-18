import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Aspect } from './'

const meta = {
    title: 'Components/Layout/Aspect',
    component: Aspect,
} satisfies Meta<typeof Aspect>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Aspect> = (args) => <Aspect {...args}>content</Aspect>

export const Default = Template.bind({})
Default.args = {
    px: '5',
    py: '5',
    bg: 'slate.100',
}

export const AsChild: Story = {
    render(args) {
        return (
            <Aspect {...args}>
                <button>content</button>
            </Aspect>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
