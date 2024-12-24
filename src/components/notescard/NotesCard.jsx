import React, { useState } from 'react';
import styles from './NotesCard.module.css';
import { Paper, OptionIcon } from '../../assets';

const colors = [
  { name: "--var_orange", value: "rgba(255, 165, 0, 1)" },
  { name: "--var_dark_green", value: "rgba(34, 139, 34, 1)" },
  { name: "--var_sky_blue", value: "rgba(135, 206, 235, 1)" },
  { name: "--var_pink", value: "rgba(255, 105, 180, 1)" },
  { name: "--var_purple", value: "rgba(128, 0, 128, 1)" },
  { name: "--var_blue", value: "rgba(0, 0, 139, 1)" },
];

const NotesCard = ({ note,notesColorMap,onDelete }) => {

  const [showActions, setShowActions] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const toggleActions = () => setShowActions(!showActions);

  const confirmDelete = () => {
    onDelete(note.id);
    setShowActions(false)
    setShowDeleteConfirmation(false);
  };


  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const getColorForItem = (itemId) => {
    if (!notesColorMap[itemId]) {
    
      notesColorMap[itemId] = getRandomColor();
    }
    return notesColorMap[itemId];
  };

  return (
    <div className={styles.noteCard}>
     <div className={styles.noteCardHeader}>
        <div className={styles.dateAndLogo}>
          <img src={Paper} alt="note" className={styles.icon} />
          <p className={styles.date}>{note?.Date}</p>
        </div>

        <div className={styles.optionWrapper}  onClick={toggleActions}>
          <img
            src={OptionIcon}
            alt="options"
            className={styles.optionIcon}
           
          />
          {showActions && (
            <div className={styles.editOrDelete}>
              <button
                className={styles.actionButton}
                onClick={() => alert('Edit functionality pending')}
              >
                Edit
              </button>
              <button
                className={styles.actionButton}
                onClick={() => setShowDeleteConfirmation(true)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>


      {showDeleteConfirmation && (
        <div className={styles.confirmationOverlay}>
          <div className={styles.confirmationBox}>
            <p>Are you sure you want to delete this note?</p>
            <div className={styles.confirmationActions}>
              <button
                className={styles.confirmButton}
                onClick={confirmDelete}
              >
                Yes, Delete
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setShowDeleteConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.noteBody}>
        <h3 className={styles.noteHeading}>{note?.NotesHeading}</h3>
        <p className={styles.noteParagraph}>{note?.NotesDescription}</p>
      </div>
      <div className={styles.noteFooter}>
        {note?.Tags && note?.Tags.length > 0 &&
          note?.Tags.map((tag, index) => {
            const color = getColorForItem(index + note.id);
            const backgroundColor = color.value.replace(/, 1\)/, ", 0.1)");
            return <span
              key={index}
              className={styles.tag}
              style={{
                backgroundColor,
                border: `1px solid ${color.value}`,
                color: color.value,
              }}
            >{tag}</span>
          }
          )}
      </div>
    </div>
  );
};

export default NotesCard;
