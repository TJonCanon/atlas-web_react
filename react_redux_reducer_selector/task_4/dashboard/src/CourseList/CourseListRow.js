import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '12px',
    textAlign: 'left',
  },
  headerTh: {
    backgroundColor: '#deb5b545',
    color: 'black',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <tr className={css(isHeader ? styles.headerRow : styles.row, checked && styles.rowChecked)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.th, styles.headerTh)} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th, styles.headerTh)}>{textFirstCell}</th>
            <th className={css(styles.th, styles.headerTh)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;