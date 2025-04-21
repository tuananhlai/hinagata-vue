import type { Meta, StoryObj } from '@storybook/vue3';
import { Popover } from '../src';

const meta = {
  title: 'Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const VisualTest: Story = {
  render: () => ({
    components: { Popover },
    template: `<div>

    </div>`,
  })
}