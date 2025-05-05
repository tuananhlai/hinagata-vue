import type { Meta, StoryObj } from '@storybook/vue3';
import { DropdownMenu } from '../src';

const meta = {
  title: 'DropdownMenu',
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const VisualTest: Story = {
  render: () => ({
    components: { DropdownMenu },
    template: `<div>

    </div>`,
  })
}