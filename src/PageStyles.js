import { css } from '@emotion/css';

export default {
  mainContainer: css({
    marginLeft: '144px', 
    marginRight: '144px',
    '@media (max-width: 960px)': {
      marginLeft: '36px', 
      marginRight: '36px',
    },
  }),
  mainContentContainer: css({ 
    display: 'flex', 
    flexDirection: 'row', 
    gap: '16px', 
    flexWrap: 'wrap', 
    marginTop: '36px',
    position: 'relative',
  }),
  paginationSectionContainer: css({
    marginTop: '24px', 
    marginBottom: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  paginationButtonsContainer: css({ 
    display: 'flex', 
    gap: '16px' 
  }),
  paginationTextContainer: css({
    color: '#FFFFFF', 
    marginTop: '8px',
  }),
  detailPageTitleSection: css({
    marginTop: '24px',
    fontSize: '24px', 
    color: '#FFFFFF', 
    fontWeight: '700', 
  }),
  detailPageContainer: css({ 
    display: 'flex', 
    gap: '12px',
    '@media (max-width: 960px)': {
      alignItems: 'center',
      flexDirection: 'column',
    },
  }),
  detailPageDetailSection: css({
    flex: '1',
  }),
  detailPageTitleAndSynopsisSection: css({
    flex: '3',
    '@media (max-width: 960px)': {
      flex: '1',
    },
  }),
  detailPageImageContainer: css({
    marginTop: '12px',
  }),
  detailPageImage: css({ 
    width: '240px', 
    height: '400px'
  }),
  detailPageDetailTable: css({ 
    color: '#FFFFFF', 
    marginTop: '12px' 
  }),
  detailPageTitleText: css({ 
    marginTop: '12px', 
    fontWeight: '500', 
    color: '#FFFFFF', 
    fontSize: '20px' 
  }),
  detailPageDescText: css({
    color: '#FFFFFF', 
    marginTop: '12px',
  }),
  backToHomeButtonContainer: css({
    marginTop: '12px',
  }),
}
