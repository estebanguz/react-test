import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackBarCustom from "../../utils/tools/SnackBarCustom";

export const SnackNotification = ({
  message,
  open,
  handleAction,
  type,
}) => {
  return (
    <>
      {type == "success" ? (
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={() => handleAction(false)}
        >
          <SnackBarCustom
            variant="success"
            message={message}
            onClose={() => handleAction(false)}
          />
        </Snackbar>
      ) : null}
      {type == "error" ? (
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={() => handleAction(false)}
        >
          <SnackBarCustom
            variant="error"
            className={classes.margin}
            message={message}
            onClose={() => handleAction(false)}
          />
        </Snackbar>
      ) : null}
    </>
  );
};
