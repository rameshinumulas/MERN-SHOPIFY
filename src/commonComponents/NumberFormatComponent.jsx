import React from 'react'
import { NumericFormat } from 'react-number-format';

export default function NumberFormatCom(props) {
  const { prefix, value, displayType, thousandSeparator, suffix, strikeOut, isBold,
    className
   } = props;
  const TextDisplay = (textValue) => (
    <>
      {isBold ? (
      <b style={strikeOut ? { textDecoration: 'line-through' } : {}}>{textValue}</b>
        )
      : (
      <p style={strikeOut ? { textDecoration: 'line-through' } : {}}>
        {textValue}
      </p>
      )}
    </>
  )
  return (
    <div className={`${className}`}>
      <NumericFormat
        value={value}
        prefix={prefix}
        thousandSeparator={thousandSeparator}
        displayType={displayType}
        renderText={(value) => <>{TextDisplay(value)}</>}
        suffix={suffix}
      />
    </div>
  )
}
