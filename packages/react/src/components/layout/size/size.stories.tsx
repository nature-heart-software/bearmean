import { Meta, StoryFn } from '@storybook/react'
import { Size } from './'
import { Box } from '@/components/layout/box'

const meta = {
    title: 'Components/Layout/Size',
    component: Size,
} satisfies Meta<typeof Size>

export default meta

const Template: StoryFn<typeof Size> = (args) => (
    <Size {...args}>
        {({ width, height, map }) => (
            <Box
                p={'5'}
                bg={map([
                    [width > 1000, 'green.200'],
                    [width < 1000, 'red.200'],
                ])}
            >
                Background is green when the size is {'>'} 1000 <br />
                Background is red when the size is {'<'} 1000 <br />
                <br />[{width}, {height}]
            </Box>
        )}
    </Size>
)

export const Default = Template.bind({})
Default.args = {
    p: '5',
    bg: 'slate.100',
}
