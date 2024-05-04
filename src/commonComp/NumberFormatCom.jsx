import React from 'react'
import { NumericFormat } from 'react-number-format';

export default function NumberFormatCom(props) {
  const { prefix, value, displayType, thousandSeparator, suffix, strikeOut } = props;
  return (
    <div>
      <NumericFormat
        value={value}
        prefix={prefix}
        thousandSeparator={thousandSeparator}
        displayType={displayType}
        renderText={(value) => <b style={strikeOut ? { textDecoration: 'line-through' } : {}}>{value}</b>}
        suffix={suffix}
      />
    </div>
  )
}
