import { Meta, StoryFn } from '@storybook/react'
import { Aspect } from './'

const meta = {
    title: 'Components/Layout/Aspect',
    component: Aspect,
} satisfies Meta<typeof Aspect>

export default meta

const Template: StoryFn<typeof Aspect> = (args) => <div style={{ display: 'flex', gap: 16 }}>
    <div style={{ flex: 1 }}>
        <Aspect { ...args } ratio={ '21:9' }><strong>21:9</strong></Aspect>
    </div>
    <div style={{ flex: 1 }}>
        <Aspect { ...args } ratio={ '2:1' }><strong>2:1</strong></Aspect>
    </div>
    <div style={{ flex: 1 }}>
        <Aspect { ...args } ratio={ '16:9' }><strong>16:9</strong></Aspect>
    </div>
    <div style={{ flex: 1 }}>
        <Aspect { ...args } ratio={ '4:3' }><strong>4:3</strong></Aspect>
    </div>
    <div style={{ flex: 1 }}>
        <Aspect { ...args } ratio={ 'square' }><strong>square</strong></Aspect>
    </div>
    <div style={{ flex: 1 }}>
        <Aspect { ...args } ratio={ '9:16' }><strong>9:16</strong></Aspect>
    </div>
</div>

export const Default = Template.bind({})
Default.args = {
    p: '5',
    bg: 'slate.100',
    maw: 500,
    w: 'full',
}

export const AsChild = Template.bind({})
AsChild.args = {
    p: '5',
    bg: 'slate.100',
    maw: 500,
    w: 'full',
    asChild: true,
}
