import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Grid } from './'
import { Box } from '@/components/layout'

const meta = {
    title: 'Components/Layout/Grid',
    component: Grid,
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Grid> = (args) => (
    <Grid {...args}>
        <Box p={'5'} bg={'slate.200'}>
            content
        </Box>
    </Grid>
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
            <Grid {...args} asChild>
                <button>
                    <Box>💐</Box>
                    <Box>(❁´◡`❁)</Box>
                </button>
            </Grid>
        )
    },
    args: {
        px: '5',
        py: '5',
        bg: 'slate.100',
        asChild: true,
    },
}
