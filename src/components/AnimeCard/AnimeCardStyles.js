import { css } from '@emotion/css';

export default {
  imageCardContainer: css({
    flex: '1',
    flexBasis: '18%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  imageCardImageContainer: css({
    cursor: 'pointer',
    maxWidth: '200px',
    maxHeight: '320px',
    display: 'flex',
    borderColor: '#000000',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '4px',
    position: 'relative',
  }),
  imageCardDarkOverlay: css({
    width: '200px',
    height: '320px',
    position: 'absolute',
    transition: `opacity ease 500ms`,
    opacity: 0,
    background: `linear-gradient(180deg, rgba(0,212,255,0) 0%, rgba(0,0,0,1) 100%)`,
    '&:hover': {
      opacity: 1,
    },
  }),
  imageCardTextContainer: css({
    position: 'absolute',
    color: '#FFFFFF',
    fontWeight: '700',
    height: 'fit-content',
    bottom: '4px !important',
    right: '8px !important',
    textAlign: 'right !important',
  }),
}
