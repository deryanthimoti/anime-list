import { css } from '@emotion/css';

export default {
  loadingContainer: css({
    zIndex: 10,
    position: 'absolute',
    width: '100vw',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  loader: css ({
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'inline-block',
    position: 'relative',
    border: '3px solid',
    borderColor: '#FFF #FFF transparent transparent',
    boxSizing: 'border-box',
    animation: 'rotation 1s linear infinite',

    '&::after,&::before': {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 'auto',
      border: '3px solid',
      borderRadius: '50%',
      boxSizing: 'border-box',
      transformOrigin: 'center center',
    },
    '&::after': {
      borderColor: 'transparent transparent #ff3d00 #ff3d00',
      width: '40px',
      height: '40px',
      animation: 'rotationBack 0.5s linear infinite'
    },
  
    '&::before': {
      borderColor: '#fff #fff transparent transparent',
      width: '32px',
      height: '32px',
      animation: 'rotation 1.5s linear infinite'
    },

    '@keyframes rotation': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      }
    },
    '@keyframes rotationBack': {
      '0%': {
        transform: 'rotate(0deg)',
      },
    }
  }),
}
