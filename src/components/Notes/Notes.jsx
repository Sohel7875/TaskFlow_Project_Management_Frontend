import React, { useState } from 'react'
import styles from './Notes.module.css'
import { AddIcon, EditButton } from '../../assets'
import NotesCard from '../notescard/NotesCard';
import useGenerateData from '../../hooks/useGenerateData';

const NotesList = [
  {
    id: 1,
    NotesHeading: "Grocery Shopping",
    NotesDescription: "Buy milk, bread, eggs, and snacks. Check prices for vegetables, fruits, and other essentials. Don't forget reusable bags.",
    Tags: ["Shopping", "Groceries"],
    Date: "2024-12-24"
  },
  {
    id: 2,
    NotesHeading: "Project Update",
    NotesDescription: "Finalize backend API integration and thoroughly test endpoints. Schedule a meeting with the frontend team to align on UI adjustments. Discuss timelines for deployment and review any pending issues from the QA team. Share feedback and document changes for the next iteration.",
    Tags: ["Work", "Project"],
    Date: "2024-12-23"
  },
  {
    id: 3,
    NotesHeading: "Weekend Plans",
    NotesDescription: "Plan a short hike with friends to a nearby nature trail. Carry essentials like snacks, water, and a first-aid kit. Arrange transportation in advance. Discuss timing and meeting point to avoid delays. Remember to bring sunscreen, caps, and comfortable footwear.",
    Tags: ["Personal", "Recreation"],
    Date: "2024-12-22"
  },
  {
    id: 4,
    NotesHeading: "Learn JavaScript",
    NotesDescription: "Dive deep into JavaScript concepts like closures, async/await, and promises. Understand callback functions and chaining techniques. Practice solving problems to avoid callback hell. Explore examples on event loops and debouncing. Test these concepts with real-world examples and mini-projects for better understanding.",
    Tags: ["Learning", "Programming"],
    Date: "2024-12-21"
  },
  {
    id: 5,
    NotesHeading: "Birthday Party Checklist",
    NotesDescription: "Organize the perfect birthday party! Start by confirming the venue booking and creating a guest list. Send invitations to ensure everyone is informed. Plan the menu and order catering services well in advance. Arrange for decorations, lighting, and entertainment, like music or games. Don’t forget the cake! Also, create a timeline for the event to avoid last-minute rushes. Include party favors for kids and ensure seating arrangements are comfortable. Double-check all bookings and ensure everything aligns with the theme.",
    Tags: ["Event", "Party"],
    Date: "2024-12-20"
  }
];


const notesColorMap = {}
const Notes = () => {
  const [notes, setNotes] = useState(NotesList)
  const [isNoteAdding, setIsNoteAdding] = useState(false)
  const [noteHeading, setNoteHeading] = useState('')
  const [noteDescription, setNoteDescription] = useState('')
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])




  const toggleButton = (Setter) => {
    Setter((prev) => !prev)
  }


  const addNewNote = () => {

    const newNote = {
      id: notes?.length + 1 || 0,
      NotesHeading: noteHeading,
      NotesDescription: noteDescription,
      Tags: tags,
      Date: useGenerateData()
    }

    const newNotes = [newNote, ...notes]
    setNotes(newNotes)
    setNoteHeading('')
    setNoteDescription('')
    setTags([])
    setIsNoteAdding(false)

  }


  const handleAddTag = () => {
    if (tag?.length === 0) return
    setTags((prev) => {
      return [tag, ...prev]
    })
    setTag('')
  }


  const handleRemoveTag = (index) => {

    const newTags = tags.filter((_, i) => index !== i)
    setTags(newTags)
  }

  const onDelete = (index) => {
    const updatedNote = notes?.filter((item, _) => item?.id !== index)
    setNotes(updatedNote)
  }
  return (
    <div className={styles.notesContainer}>
      <div className={styles.notesHeader} >

        <p className={styles.notesHeading}>
          <img src={EditButton} alt="Notes" />
          Notes
        </p>
       

        <img src={AddIcon} alt='Add Todos' className={styles.addNewNotesButton} onClick={() => toggleButton(setIsNoteAdding)} />
      
      </div>
      <div className={`${styles.addNoteContainer} ${isNoteAdding ? styles.openNoteTodoContainer : ''}`}>

        <div className={styles.formGroup}>
          <label htmlFor="newNoteHeading" className={styles.label}>Heading</label>
          <input
            type="text"
            value={noteHeading}
            onChange={(e) => setNoteHeading(e.target.value)}
            placeholder="Enter your note heading..."
            className={styles.input}
            id="newNoteHeading"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="newNoteDescription" className={styles.label}>Description</label>
          <textarea
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
            placeholder="Enter note description..."
            className={styles.textarea}
            id="newNoteDescription"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="notesTags" className={styles.label}>Tags</label>
          <input
            type="text"
            id="notesTags"
            placeholder="Press 'Enter' to add a tag..."
            className={styles.input}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
          />
          {tags?.length === 0 && <p className={styles.instruction}>* Press 'Enter' to add a tag</p>}
        </div>

        {tags && tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
                <button
                  className={styles.removeTagButton}
                  onClick={() => handleRemoveTag(index)}
                  aria-label={`Remove tag ${tag}`}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        )}

        <button
          className={styles.addButton}
          disabled={!noteHeading?.length || !noteDescription?.length}
          onClick={addNewNote}
        >
          Add Note
        </button>
      </div>


      <div className={styles.notesCardsContainer}>


        {
          notes && notes?.length > 0 ? notes?.map((note, index) => (
            <NotesCard key={index} note={note} notesColorMap={notesColorMap} onDelete={onDelete} />
          )) : (
            <div className={styles.emptyStateContainer}>
            <div className={styles.emptyStateCard}>
              <h3 className={styles.emptyStateTitle}>Your Notes Are Empty</h3>
              <p className={styles.emptyStateDescription}>
                Start organizing your thoughts and ideas. Click below to add your first note!
              </p>
              <button
                className={styles.addNoteButton}
                onClick={() => toggleButton(setIsNoteAdding)}
              >
                Add New Note
              </button>
            </div>
          </div>
          )
        }
      </div>


    </div>
  )
}

export default Notes