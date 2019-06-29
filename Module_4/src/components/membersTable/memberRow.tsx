import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { TableRow, TableCell, CardMedia, Link, makeStyles, Theme, createStyles } from '@material-ui/core';

interface Props {
  member: MemberEntity;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      margin: theme.spacing(1),
    },
    cardMedia: {
      height: 0,
      paddingTop: '56%',
    },
  }),
);

export const MemberRow: React.FunctionComponent<Props> = props => {

  const classes = useStyles();

  return (
    <TableRow key={props.member.id}>
      <TableCell align="center">
        <CardMedia
          image={props.member.avatar_url}
          className={classes.cardMedia}
        />
        <Link
          href={props.member.html_url}
          className={classes.link}>
          Show more
      </Link>
      </TableCell>
      <TableCell
        align="center">
        {props.member.id}
      </TableCell>
      <TableCell
        align="center">
        {props.member.login}
      </TableCell>
    </TableRow>
  );
};
