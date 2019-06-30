import * as React from 'react';
import { TableHead, TableRow, TableCell, Theme, createStyles, withStyles } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: indigo[200],
      color: theme.palette.common.white,
    },
  }),
)(TableCell);

export const MemberHead = () => (

  <TableHead>
    <TableRow>
      <StyledTableCell
        align="center">
        Avatar
      </StyledTableCell>
      <StyledTableCell
        align="center">
        Id
      </StyledTableCell>
      <StyledTableCell
        align="center">
        Name
      </StyledTableCell>
    </TableRow>
  </TableHead>
);
