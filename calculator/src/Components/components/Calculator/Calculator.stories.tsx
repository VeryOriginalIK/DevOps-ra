import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Calculator} from './Calculator';

const meta: Meta<typeof Calculator> = {
  component: Calculator,
};

export default meta;

type Story = StoryObj<typeof Calculator>;

export const Basic: Story = {args: {}};
