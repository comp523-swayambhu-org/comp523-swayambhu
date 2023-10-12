import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';

export default function Tutorial({open, onClose}) {

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Tutorial"}
            </DialogTitle>
            <DialogContent id="alert-dialog-description">
                <DialogContentText>
                    Use WASD to move around.
                </DialogContentText>
                <DialogContentText>
                    Double click ESC to freely move cursor.
                </DialogContentText>
                <DialogContentText>
                    Notable parts of the Swayambhu are labelled with annotations. Find the annotations in the menu on the right.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={onClose} autoFocus>
                Okay
            </Button>
            </DialogActions>
        </Dialog>
    );
}