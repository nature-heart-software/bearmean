import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Container } from './'
import { Box } from '@/components/layout'

const meta = {
    title: 'Components/Layout/Container',
    component: Container,
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Container> = (args) => (
    <Container {...args}>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
    </Container>
)

export const Default = Template.bind({})
Default.args = {
    bg: 'slate.100',
}

export const AsChild: Story = {
    render(args) {
        return (
            <Container {...args} asChild>
                <button>
                    <Box>💐</Box>
                    <Box>(❁´◡`❁)</Box>
                </button>
            </Container>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
