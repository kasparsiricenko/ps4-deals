/** @jsxImportSource @emotion/react */
import { css, cx } from '@emotion/css'
import { useEffect, useRef, useState } from 'react'
import theme from '../theme'

const File = ({ onDrop, ...props }) => {
  const [dragging, setDragging] = useState(false)
  const dropRef = useRef()
  const dragCounter = useRef(0)

  const handleDragOver = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleDragEnter = (event) => {
    event.preventDefault()
    event.stopPropagation()
    dragCounter.current++
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setDragging(true)
    }
  }

  const handleDragLeave = (event) => {
    event.preventDefault()
    event.stopPropagation()
    dragCounter.current--
    if (dragCounter.current === 0) {
      setDragging(false)
    }
  }

  const handleDrop = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setDragging(false)
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      onDrop && onDrop(event.dataTransfer.files)
      event.dataTransfer.clearData()
      dragCounter.current = 0
    }
  }

  useEffect(() => {
    if (dropRef.current) {
      const ref = dropRef.current
      ref.addEventListener('dragenter', handleDragEnter)
      ref.addEventListener('dragleave', handleDragLeave)
      ref.addEventListener('dragover', handleDragOver)
      ref.addEventListener('drop', handleDrop)
      return () => {
        ref.removeEventListener('dragenter', handleDragEnter)
        ref.removeEventListener('dragleave', handleDragLeave)
        ref.removeEventListener('dragover', handleDragOver)
        ref.removeEventListener('drop', handleDrop)
      }
    }
  }, []) // eslint-disable-line

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: window.innerHeight - 100,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      ref={dropRef}
      {...props}
    >
      <div
        css={{
          border: `dashed ${theme.palette.main} 4px`,
          // backgroundColor: 'rgba(255, 255, 255, 0.2)',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: theme.transitions.main,
          opacity: dragging ? 0.8 : 0.3,
          margin: '0 8px 12px',
        }}
      />
      <i
        className={cx(
          'fas fa-file-import ',
          css({
            fontSize: 48,
            transition: theme.transitions.main,
            color: theme.palette.main,
            opacity: dragging ? 0.8 : 0.4,
          })
        )}
      />
    </div>
  )
}

export default File
