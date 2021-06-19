/** @jsxImportSource @emotion/react */
import theme from '../theme.js'

const DangerousButton = ({ variant, ...props }) => {
  return (
    <button
      css={{
        borderRadius: 4,
        outline: 'none',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor:
          variant === 'contained' ? 'transparent' : theme.palette.dangerous,
        boxShadow: 'none',
        boxSizing: 'border-box',
        background:
          variant === 'contained'
            ? theme.palette.dangerous
            : theme.palette.white,
        transition: theme.transitions.main,
        fontWeight: 600,
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 12px',
        width: 'min-content',
        height: 38,
        color:
          variant === 'contained'
            ? theme.palette.white
            : theme.palette.dangerous,
        fontFamily: theme.fonts.googleSans,
        userSelect: 'none',
        cursor: 'pointer',
        letterSpacing: '.0107142857em',
        '&:focus': {
          outline: 'none',
        },
        '&:hover': {
          background:
            variant === 'contained'
              ? theme.palette.mainDarkenHover
              : theme.palette.errorHover,
        },
        '&:active': {
          background:
            variant === 'contained'
              ? theme.palette.mainDarken
              : theme.palette.dangerousActive,
          boxShadow: variant === 'contained' && theme.shadows.button,
        },
      }}
      {...props}
    />
  )
}

export default DangerousButton
