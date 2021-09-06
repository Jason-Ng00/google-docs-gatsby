import React from "react";

import {AnimatePresence} from 'framer-motion';

export function shouldUpdateScroll(prevRouterProps, { location }) {
  window.scrollTo(0, 0)
  const body = document.getElementsByTagName('body')[0]
  body.scrollTop = 0
  return false
}

export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
