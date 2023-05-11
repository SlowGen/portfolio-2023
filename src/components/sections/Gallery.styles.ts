export const styles = {
  galleryContainer: {
    padding: '10px',
    backgroundColor: 'rgba(171, 162, 157, 0.5)',
    borderRadius: '20px',
    maxWidth: '1000px',
  },
  galleryContent: {
    display: 'grid',
    gridTemplate: 'auto auto / auto auto',
    gridGap: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '30px',
    paddingLeft: '30px',
    justifySelf: 'center',

  },
  card: {
    minHeight: '150px',
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    maxWidth: '400px',
  },
  img: {
    paddingLeft: '10px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
