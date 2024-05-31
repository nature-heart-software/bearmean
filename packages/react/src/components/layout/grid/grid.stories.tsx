import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Grid } from './'
import { Box } from '@/components/layout/box'

const meta = {
    title: 'Components/Layout/Grid',
    component: Grid,
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Grid> = (args) => (
    <Box p={'5'} bg="slate.100">
        <Grid {...args} h={500}>
            <Grid.Col>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    1
                </Box>
            </Grid.Col>
            <Grid.Col span={4}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    1
                </Box>
            </Grid.Col>
            <Grid.Col span={4}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    2
                </Box>
            </Grid.Col>
            <Grid.Col span={4}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    3
                </Box>
            </Grid.Col>
            <Grid.Col mdSpan={8} lgSpan={4}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    1
                </Box>
            </Grid.Col>
            <Grid.Col mdSpan={4} lgSpan={4}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    2
                </Box>
            </Grid.Col>
            <Grid.Col mdSpan={6} mdStart={4} lgStart={'auto'} lgSpan={4}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    3
                </Box>
            </Grid.Col>
            <Grid.Col span={12}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    1
                </Box>
            </Grid.Col>
            <Grid.Col span={2}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    1
                </Box>
            </Grid.Col>
            <Grid.Col span={2}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    2
                </Box>
            </Grid.Col>
            <Grid.Col span={2}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    3
                </Box>
            </Grid.Col>
            <Grid.Col span={2} start={9}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    4
                </Box>
            </Grid.Col>
        </Grid>
    </Box>
)

export const Default = Template.bind({})
Default.args = {}

const RowsTemplate: StoryFn<typeof Grid> = (args) => (
    <Box p={'5'} bg={'slate.100'}>
        <Grid {...args} rows={3}>
            <Grid.Col span={4} rowSpan={3}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    1
                </Box>
            </Grid.Col>
            <Grid.Col span={8}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    2
                </Box>
            </Grid.Col>
            <Grid.Col span={8} rowSpan={2} lgRowSpan={1} lgRowStart={3}>
                <Box px={'5'} py={'3'} h={'full'} bg={'slate.200'} style={{ textAlign: 'center' }}>
                    3
                </Box>
            </Grid.Col>
        </Grid>
    </Box>
)

export const Rows = RowsTemplate.bind({})
Rows.args = {}

export const AsChild: Story = {
    render(args) {
        return (
            <Box p={'5'} bg="slate.100">
                <Grid {...args}>
                    <Grid.Col bg={'slate.200'} span={6} asChild>
                        <button>
                            <Box>💐</Box>
                            <Box>(❁´◡`❁)</Box>
                        </button>
                    </Grid.Col>
                </Grid>
            </Box>
        )
    },
    args: {},
}
