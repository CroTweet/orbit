/*
  DOCUMENTATION: https://orbit.kiwi/components/illustration/
*/

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Illustration";

type Name =%NAMES%

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly size?: "extraSmall" | "small" | "medium" | "large" | "display";
  readonly name: Name;
  readonly alt?: string;
}

const Illustration: React.FunctionComponent<Props>;
export { Illustration, Illustration as default };
