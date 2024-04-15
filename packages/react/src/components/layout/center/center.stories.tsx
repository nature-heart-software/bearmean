import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Center } from './'
import { Box } from '@/components/layout'

const meta = {
    title: 'Components/Layout/Center',
    component: Center,
} satisfies Meta<typeof Center>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Center> = (args) => (
    <Center {...args}>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
    </Center>
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
            <Center {...args} asChild>
                <button>
                    <Box>💐</Box>
                    <Box>(❁´◡`❁)</Box>
                </button>
            </Center>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
