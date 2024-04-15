import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Group } from './'
import { Box } from '@/components/layout'

const meta = {
    title: 'Components/Layout/Group',
    component: Group,
} satisfies Meta<typeof Group>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Group> = (args) => (
    <Group {...args}>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
    </Group>
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
            <Group {...args} asChild>
                <button>
                    <Box>💐</Box>
                    <Box>(❁´◡`❁)</Box>
                </button>
            </Group>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
