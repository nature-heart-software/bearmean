import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Box } from './'

const meta = {
    title: 'Components/Layout/Box',
    component: Box,
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Box> = (args) => <Box {...args}>content</Box>

export const Default = Template.bind({})
Default.args = {
    px: '5',
    py: '5',
    bg: 'slate.100',
}

export const AsChild: Story = {
    render(args) {
        return (
            <Box {...args}>
                <button>content</button>
            </Box>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
