import {
  Button
} from 'reactstrap'

import styles from '../../styles/addButton.module.css';

export default function AddButton({ open, text }) {
  return (
    <Button className={styles.addButton}>+</Button>
  )
}
