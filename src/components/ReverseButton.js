/** @jsxImportSource @emotion/react */
import { cx, css } from '@emotion/css'
import theme from '../theme.js'

const ReverseButton = ({ on, ...props }) => {
  return (
    <button
      css={{
        borderRadius: 4,
        outline: 'none',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: theme.palette.main,
        boxShadow: 'none',
        boxSizing: 'border-box',
        background: theme.palette.white,
        transition: theme.transitions.main,
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: '0.6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 12px',
        width: 'min-content',
        height: 38,
        color: theme.palette.main,
        textTransform: 'uppercase',
        userSelect: 'none',
        cursor: 'pointer',
        '&:focus': {
          outline: 'none',
        },
        '&:hover': {
          background: theme.palette.mainHover,
        },
        '&:active': {
          background: theme.palette.mainActive,
        },
      }}
      {...props}
    >
      <i
        className={cx(
          'fas fa-arrow-down',
          css({
            transition: theme.transitions.main,
            transform: on ? 'rotate(0)' : 'rotate(180deg)',
          })
        )}
      />
    </button>
  )
}

export default ReverseButton
