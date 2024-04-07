declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "@metamask/jazzicon" {
  export default function (diameter: number, seed: number): HTMLElement;
}

declare module '*.json';
declare module '*.png';
declare module '*.jpeg';
