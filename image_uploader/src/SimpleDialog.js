import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Button, LinearProgress} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

export function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Uploading...</DialogTitle>
      <List>
        {props.files.map((file) => {
          return (
            <ListItem button onClick={() => handleListItemClick(file)} key={file.name}>
              <ListItemText primary={file.name} />
            </ListItem>
          )
        })}
        {/* Progress Bar, 100% 되면 알려주고 닫기 */}
        <LinearProgress variant="determinate" value={props.percent} />
        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog >
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

// export default function SimpleDialogDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog open={open} onClose={handleClose} />
//     </div>
//   );
// }
