import React from "react";
import "./Mail.css";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  LabelImportantOutlined,
  MoreVert,
  Reply,
  StarBorderOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSelectedMail } from "./features/mailSlice";

const Mail = () => {
  const history = useHistory();
  const selectedMail = useSelector(getSelectedMail);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mailTools__left">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <InfoIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mailTools__right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__section"></div>
      <div className="mail__body">
        <div className="mailBody__header">
          <div className="mailBody__headerLeft">
            <h3>{selectedMail?.subject}</h3>

            <IconButton>
              <LabelImportantOutlined className="mail__important" />
            </IconButton>
            <span>
              <p>{selectedMail?.title}</p>
            </span>
          </div>
          <div className="mailBody__headerRight">
            <IconButton>
              <StarBorderOutlined />
            </IconButton>
            <IconButton>
              <Reply />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="mail__message">{selectedMail?.description}</div>
      </div>
    </div>
  );
};

export default Mail;
