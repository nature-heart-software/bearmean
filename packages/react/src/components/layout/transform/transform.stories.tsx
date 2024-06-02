import { Meta, StoryFn, type StoryObj } from '@storybook/react'
import { Transform } from './'

const meta = {
    title: 'Components/Layout/Transform',
    component: Transform,
} satisfies Meta<typeof Transform>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Transform> = () => <div style={{display: 'flex', gap: 16}}>
    <Transform rotate={'180deg'}>🐻</Transform>
    <Transform translate={'-50% -50%'}>🐻‍❄️</Transform>
    <Transform scale={'1.3'}>🐼</Transform>
    {/* Could be better */ }
    <Transform perspective={'30px'}><Transform transform={'rotateY(45deg) translateZ(30px)'}>🦝</Transform></Transform>
</div>

export const Default = Template.bind({})
Default.args = {}

export const AsChild: Story = {
    render(args) {
        return (
            <Transform { ...args }>
                <button>💐(❁´◡`❁)</button>
            </Transform>
        )
    },
    args: {
        rotate: '45deg',
        transformOrigin: '50% 50%',
        asChild: true,
    },
}
