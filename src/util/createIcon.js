import React from 'react'
import SvgIcon from '@mcesystems/material-ui-core/SvgIcon'

export default (path) => {
  const Icon = (props) => <SvgIcon {...props}><path d={path} /></SvgIcon>
  Icon.muiName = 'SvgIcon'
  return Icon
}
