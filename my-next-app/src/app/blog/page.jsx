import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const Blog = () => {
	return (
		<div className={styles.mainContainer}>
			<Link href='/blog/id' className={styles.container}>
				<div className={styles.imageContainer}>
					<Image
						src='/hero.jpg'
						alt=''
						width={400}
						height={250}
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>desc</p>
				</div>
			</Link>
			<Link href='/blog' className={styles.container}>
				<div className={styles.imageContainer}>
					<Image
						src='/hero.jpg'
						alt=''
						width={400}
						height={250}
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>desc</p>
				</div>
			</Link>
		</div>
	)
}

export default Blog
