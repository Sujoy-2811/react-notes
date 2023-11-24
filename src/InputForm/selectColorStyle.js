const selectColorStyle = (id, styles) => {
  switch (id) {
    case 1:
      return styles.red;
      break;
    case 2:
      return styles.green;
      break;
    case 3:
      return styles.blue;
      break;
    case 4:
      return styles.orange;
      break;
  }
};

export { selectColorStyle };
