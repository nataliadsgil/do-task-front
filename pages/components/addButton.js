import {
  Button
} from 'reactstrap'

import styles from '../../styles/addButton.module.css';

export default function AddButton({ onClick }) {
  return (
    <Button onClick={onClick} className={styles.addButton}>+</Button>
  )
}
