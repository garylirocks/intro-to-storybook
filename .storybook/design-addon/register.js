import React, { Fragment } from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';

addons.register('my/design-addon', () => {
  addons.add('design-addon/panel', {
    title: 'Assets',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        implement
      </AddonPanel>

    ),
  });
});
