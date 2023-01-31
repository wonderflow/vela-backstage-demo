import React from 'react';
import { Icon } from '@material-ui/core';

// Use inline-svg instead of .svg static file because we want the logo 
// to change color when in/out-of focus.
const velaLogoUncolored = `<svg id="layer_1" data-name="layer1" x="0px" y="0px" width="1em" height="1em" viewBox="26.517 6.152 79.431 78.847" xmlns="http://www.w3.org/2000/svg">
<path class="cls-1" d="M47,67.85a7.58,7.58,0,0,0,6.55,3.78,7.42,7.42,0,0,0,3.66-1,3.89,3.89,0,0,1,3.85,0,7.52,7.52,0,0,0,7.11.13,4,4,0,0,1,3.72,0,7.55,7.55,0,0,0,10-3Z" />
<path class="cls-1" d="M85.87,54.8l-.09-1.47c-.91-14.52-6.32-28.16-15.23-38.39h0V54.1Z" />
<path class="cls-1" d="M68.46,54V23.14A51.85,51.85,0,0,0,53.53,53.32Z" />
<path class="cls-1" d="M54.75,56.18l-1.2-2.85-14.16-.65,3.89,9.23h0a6.64,6.64,0,0,0,8.94,2.49,4.76,4.76,0,0,1,4.68,0,6.63,6.63,0,0,0,6.39,0,4.76,4.76,0,0,1,4.68,0,6.63,6.63,0,0,0,6.39,0,4.76,4.76,0,0,1,4.68,0A6.63,6.63,0,0,0,88,61.91l1.61-3.25L56.12,57.13A1.54,1.54,0,0,1,54.75,56.18Z" />
</svg>`

export const VelaLogo = () => {
  return (
    <Icon style={{ fill: "currentcolor" }} >
      <div dangerouslySetInnerHTML={{__html: velaLogoUncolored}} />
    </Icon>
  )
}
