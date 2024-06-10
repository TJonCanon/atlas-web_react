import React from 'react';
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

const CourseListRow = ({ id, isHeader, textFirstCell, textSecondCell, isChecked, onChangeRow }) => {
  const handleCheckboxChange = () => {
    onChangeRow(id, !isChecked);
  };

  return (
    <tr className={css(isHeader ? styles.headerRow : styles.row, isChecked && styles.rowChecked)}>
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
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  id: PropTypes.string,
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
  isChecked: false,
  onChangeRow: () => {},
};

export default CourseListRow;