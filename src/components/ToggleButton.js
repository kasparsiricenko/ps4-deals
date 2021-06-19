/** @jsxImportSource @emotion/react */
import theme from '../theme.js'

const ToggleButton = ({ on, ...props }) => {
  return (
    <button
      css={{
        borderRadius: 4,
        outline: 'none',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: !on ? theme.palette.main : 'transparent',
        boxShadow: 'none',
        boxSizing: 'border-box',
        background: on ? theme.palette.main : theme.palette.white,
        transition: theme.transitions.main,
        fontWeight: 600,
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 12px',
        width: 'min-content',
        height: 38,
        color: on ? theme.palette.white : theme.palette.main,
        fontFamily: theme.fonts.googleSans,
        userSelect: 'none',
        cursor: 'pointer',
        letterSpacing: '.0107142857em',
        '&:focus': {
          outline: 'none',
        },
        '&:hover': {
          background: on
            ? theme.palette.mainDarkenHover
            : theme.palette.mainHover,
        },
        '&:active': {
          background: on ? theme.palette.mainDarken : theme.palette.mainActive,
          boxShadow: on && theme.shadows.button,
        },
      }}
      {...props}
    />
  )
}

export default ToggleButton
