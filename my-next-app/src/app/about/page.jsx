import Image from 'next/image'
import Button from './../../components/Button/Button'
import styles from './page.module.css'

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src='/1.jpg' fill={true} alt='' className={styles.img} />
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Кто я такой?</h1>
					<h2 className={styles.imgDesc}>Я всеголишь райн гослинг....</h2>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Работаем братья</h1>
					<p className={styles.decs}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Perferendis laborum velit at quod eius culpa rem, nulla similique!
						Culpa aspernatur amet nostrum consectetur asperiores, libero
						doloremque esse nisi optio dolor?
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint
						alias, veniam molestias error vel nobis. Ipsam saepe non unde vero
						porro perspiciatis sapiente incidunt cumque mollitia, amet maxime
						consequatur! import Image from 'next/image' Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Aut sint alias, veniam molestias
						error vel nobis. Ipsam saepe non unde vero porro perspiciatis
						sapiente incidunt cumque mollitia, amet maxime consequatur! import
						Image from 'next/image' Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Aut sint alias, veniam molestias error vel nobis.
						Ipsam saepe non unde vero porro perspiciatis sapiente incidunt
						cumque mollitia, amet maxime consequatur! import Image from
						<br />
						'next/image' Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Aut sint alias, veniam molestias error vel nobis. Ipsam saepe
						non unde vero porro perspiciatis sapiente incidunt cumque mollitia,
						amet maxime consequatur!
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>Кто убил марка?</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
						dicta accusantium, laudantium cupiditate excepturi libero hic non
						adipisci facere, expedita repudiandae deserunt? Doloribus dolorum
						vero aliquam esse unde fugit laborum!
						<br />
						<br /> - Марка убили
						<br />
						<br /> - Марка убили
						<br />
						<br /> - Марка убили
						<br />
						<br /> - Марка убили
					</p>
					<Button url='contact' text='Свяжитесь со мной!' />
				</div>
			</div>
		</div>
	)
}

export default About
