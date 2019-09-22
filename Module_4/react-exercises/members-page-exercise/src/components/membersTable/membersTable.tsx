import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import { Container, makeStyles, Theme, createStyles, Table, TableBody, TextField, Button, TableFooter, TableRow, TablePagination, Grid } from '@material-ui/core';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import { blueGrey, blue, indigo } from '@material-ui/core/colors';

interface Props {
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
      marginTop: theme.spacing(2),
      height: "70%"
    },
  }),
);

export const MembersTableComponent: React.FunctionComponent<Props> = props => {
  const [members, setMembers] = React.useState([] as MemberEntity[]);
  const [organizationName, setOrganizationName] = React.useState('lemoncode');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const classes = useStyles({});

  const loadMembers = () => {
    memberAPI.getAllMembers(organizationName).then(members => setMembers(members));
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const eventValue = event.target.value;
    setOrganizationName(eventValue === '' ? 'lemoncode' : eventValue);
  }

  function handleChangePage(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setRowsPerPage(parseInt(event.target.value, 10));
  }

  return (
    <Container maxWidth="sm">
      <h1 style={{color: indigo[300]}}> Members Page</h1>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <TextField
            id="organization-textfield-id"
            label="Organization"
            className={classes.textField}
            onChange={handleOnChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={loadMembers}
            fullWidth>
            Load
      </Button>
        </Grid>
      </Grid>
      <Table className={classes.table}>
        <MemberHead />
        <TableBody>
          {members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={3}
              count={members.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'Members per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};
