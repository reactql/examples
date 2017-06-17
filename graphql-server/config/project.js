/* eslint-disable import/prefer-default-export */

// ----------------------
// IMPORTS

/* Local */
import {
  getServerHost,
  getServerPort,
} from 'kit/lib/env';

// ----------------------

export const APOLLO = {
  uri: `http://${getServerHost()}:${getServerPort()}/graphql`,
};
