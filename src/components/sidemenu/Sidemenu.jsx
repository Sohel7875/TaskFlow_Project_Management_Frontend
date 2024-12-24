import styles from './Sidemenu.module.css'
import Todo from '../Todo/Todo';
import Notes from '../Notes/Notes';

const Sidemenu = () => {
    return (
        <div className={styles.mainContainer}>
            <Todo />
            <Notes />
        
           
        </div>
    )
}

export default Sidemenu