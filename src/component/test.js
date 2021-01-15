import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Box, Text } from '~/theme';
import { SIZES, ROUTES, NAVIGATION_TAB_PROP_TYPE } from '~/constants';
import { ICONS } from '~/assets';

import Logo from './logo';

const { EDIT, EDIT_BLUE } = ICONS.UI.SYSTEM;
const { NAVIGATION_BOTTOM_TABS_HEIGHT } = SIZES;

function TabsHandler({ tabs, tabWidth }) {
  const {
    params: { screen: routeName },
  } = useRoute();

  function getIcon(tab) {
    switch (tab) {
      case ROUTES.A: {
        if (routeName === ROUTES.A) {
          return <EDIT_BLUE />;
        }

        return <EDIT />;
      }
      case ROUTES.B: {
        if (routeName === ROUTES.B) {
          return <EDIT_BLUE />;
        }

        return <EDIT />;
      }
      case ROUTES.D: {
        if (routeName === ROUTES.D) {
          return <EDIT_BLUE />;
        }

        return <EDIT />;
      }
      case ROUTES.E: {
        if (routeName === ROUTES.E) {
          return <EDIT_BLUE />;
        }

        return <EDIT />;
      }
      default:
        break;
    }

    return null;
  }

  return (
    <Box flexDirection="row-reverse">
      {tabs.map((tab, key) => {
        if (key === Math.floor(tabs.length / 2)) {
          return (
            <Box
              key="logo"
              width={tabWidth}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              height={NAVIGATION_BOTTOM_TABS_HEIGHT}
            >
              <Box
                position="absolute"
                style={{ top: -NAVIGATION_BOTTOM_TABS_HEIGHT / 2 }}
              >
                <Logo />
              </Box>
            </Box>
          );
        }

        return (
          <TouchableOpacity {...{ key }} onPress={tab.action}>
            <Box
              width={tabWidth}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              height={NAVIGATION_BOTTOM_TABS_HEIGHT}
            >
              {getIcon(tab.route)}
              <Text variant="tabRoute">{tab.name}</Text>
            </Box>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
}

TabsHandler.propTypes = {
  tabWidth: PropTypes.number.isRequired,
  tabs: NAVIGATION_TAB_PROP_TYPE.isRequired,
};

export default TabsHandler;