import Image from 'next/image'
import Hero from 'public/hero.jpg'
import Button from './../../components/Button/Button'
import styles from './page.module.css'

const Contact = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Здарова аглы ебучи</h1>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<Image src={Hero} />
				</div>
				<form className={styles.form}>
					<input type='text' placeholder='name' className={styles.input} />
					<input type='text' placeholder='email' className={styles.input} />
					<textarea
						className={styles.textArea}
						cols='30'
						rows='10'
						placeholder='message'
					></textarea>
					<Button url='#' text='Отправить' />
				</form>
			</div>
		</div>
	)
}

export default Contact
