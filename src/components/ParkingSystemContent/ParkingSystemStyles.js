import { css } from '@emotion/css';

export default {
  mainContainer: css({
    width: '100%',
    marginTop: '24px',
  }),
  parkingSpaceTableTitle: css({
    marginTop: '16px',
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '700',
  }),
  parkingSpaceTable: css({
    marginTop: '12px',
    borderCollapse: 'collapse',
    border: '1px solid black',
    color: '#ffffff',
  }),
  availabilityContainer: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  onlineIndicator: css({
    display: 'flex',
    width: '15px',
    height: '15px',
    marginRight: '10px',
    backgroundColor: '#0fcc45',
    borderRadius: '50%',
  }),
  offlineIndicator: css({
    display: 'flex',
    width: '15px',
    height: '15px',
    marginRight: '10px',
    backgroundColor: '#b51b0d',
    borderRadius: '50%',
  }),
  mainButtonContainer: css({
    gap: '12px',
    display: 'flex',
  })
}
