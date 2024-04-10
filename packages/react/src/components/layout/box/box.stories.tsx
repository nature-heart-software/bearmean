import { Meta, StoryFn } from '@storybook/react'
import { Box } from './'

export default {
    title: 'Components/Layout/Box',
    component: Box,
} as Meta<typeof Box>

const Template: StoryFn<typeof Box> = (args) => (
    <Box {...args}>
        <button>content</button>
    </Box>
)

export const Default = Template.bind({})
Default.args = {
    px: '5',
    py: '5',
    bg: 'slate.100',
}
