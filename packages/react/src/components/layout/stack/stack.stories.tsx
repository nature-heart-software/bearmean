import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Stack } from './'
import { Box } from '@/components/layout/box'

const meta = {
    title: 'Components/Layout/Stack',
    component: Stack,
} satisfies Meta<typeof Stack>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Stack> = (args) => (
    <Stack {...args}>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
    </Stack>
)

export const Default = Template.bind({})
Default.args = {
    px: '5',
    py: '5',
    bg: 'slate.100',
}

export const AsChild: Story = {
    render(args) {
        return (
            <Stack {...args} asChild>
                <button>
                    <Box>💐</Box>
                    <Box>(❁´◡`❁)</Box>
                </button>
            </Stack>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
