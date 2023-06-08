import React, { useState, useEffect } from "react";
import "../style/ItemComments.css";

const ItemComments = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([
    {
      id: 1,
      content: "Food taste was amazing, absolutely loved it.",
      isGeneric: true,
    },
    {
      id: 2,
      content: "The burger here tastes good.",
      isGeneric: true,
    },
    {
      id: 3,
      content: "Didn't like the biryani.",
      isGeneric: true,
    },
  ]);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setCommentsList(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(commentsList));
  }, [commentsList]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      const newComment = {
        id: Date.now(),
        content: comment,
        isGeneric: false,
      };
      setCommentsList([...commentsList, newComment]);
      setComment("");
    }
  };

  const handleCommentUpdate = (id, updatedContent) => {
    const updatedComments = commentsList.map((comment) => {
      if (comment.id === id) {
        return { ...comment, content: updatedContent };
      }
      return comment;
    });
    setCommentsList(updatedComments);
  };

  const handleCommentDelete = (id) => {
    const updatedComments = commentsList.filter((comment) => comment.id !== id);
    setCommentsList(updatedComments);
  };

  return (
    <>
      <div className="commentbox">
        <h1>Comments</h1>
        <div className="comArea">
          {commentsList.map((comment) => (
            <Single
              key={comment.id}
              comment={comment}
              onUpdate={handleCommentUpdate}
              onDelete={handleCommentDelete}
            />
          ))}
        </div>
        <div className="tanb">
          <textarea
            placeholder="Comment here"
            id="enter"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <button id="comm" onClick={handleCommentSubmit}>
            Comment
          </button>
        </div>
      </div>
    </>
  );
};

const Single = ({ comment, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(comment.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedContent(comment.content);
  };

  const handleUpdate = () => {
    onUpdate(comment.id, updatedContent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(comment.id);
  };

  return (
    <>
      <div className="single_con">
        {isEditing ? (
          <>
            <textarea
              className="edit-comment"
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
            ></textarea>
            <div className="edit-buttons">
              <button className="update-btn" onClick={handleUpdate}>
                Update
              </button>
              <button className="cancel-btn" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h4>{comment.isGeneric ? "" : ""}</h4>
            <p>{comment.content}</p>
            {comment.isGeneric ? null : (
              <div className="comment-buttons">
                <button className="edit-btn" onClick={handleEdit}>
                  Edit
                </button>
                <button className="delete-btn" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ItemComments;
