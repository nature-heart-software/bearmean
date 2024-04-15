import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Divider } from './'
import { Box } from '@/components/layout'

const meta = {
    title: 'Components/Layout/Divider',
    component: Divider,
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Divider> = (args) => (
    <Box bg={'slate.100'}>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
        <Divider {...args} />
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
        <Divider {...args} />
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
    </Box>
)

export const Default = Template.bind({})
Default.args = {
    bc: 'slate.300',
}

export const AsChild: Story = {
    render(args) {
        return (
            <Divider {...args} asChild>
                <button>
                    <Box>💐</Box>
                    <Box>(❁´◡`❁)</Box>
                </button>
            </Divider>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
