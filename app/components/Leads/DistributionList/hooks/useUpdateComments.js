import React, { useState, useEffect } from "react";
import { updateCommentsLead } from "../../../../api/leads/index";

export const useUpdateComments = ({
  setForceUpdate
}) => {
  const [currentComment, setCurrentComment] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [updateCommentAction, setUpdateCommentAction] = useState(false);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (updateCommentAction) {
      updateComment();
    }
    
    setNewComment(currentComment.comments);
  }, [updateCommentAction, currentComment]);

  const updateComment = async () => {
    const _response = await updateCommentsLead({
      leadId: currentComment.id_booker,
      comments: newComment,
    });

    setUpdateCommentAction(false);
    setForceUpdate(true);    
  };

  return [
    currentComment,
    setCurrentComment,
    setCurrentId,
    setUpdateCommentAction,
    newComment,
    setNewComment,
  ];
};
