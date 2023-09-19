import Image from 'next/image'

import styles from './page.module.css'

import Hero from 'public/hero.jpg'
import Button from './../components/Button/Button'

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Я front-end developer</h1>
				<p className={styles.desc}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ex nihil,
					sit ullam, error quibusdam eum consectetur iusto expedita voluptas
					accusamus dicta tempore id vitae perferendis cumque minus ipsam quas!
				</p>
				<Button url='portfolio' text='Чекни мои работы' />
			</div>
			<div className={styles.item}>
				<Image src={Hero} alt='hero' className={styles.img} />
			</div>
		</div>
	)
}
