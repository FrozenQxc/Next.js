import Button from '@/components/Button/Button'
import Image from 'next/image'
import styles from './page.module.css'

const Category = ({ params }) => {
	console.log(params)
	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{params.category}</h1>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Testt</h1>
					<p className={styles.desc}>Desc</p>
					<Button text='увидеть больше' url='#' />
				</div>
				<div className={styles.imgContainer}>
					<Image src='/hero1.jpg' fill={true} alt='' className={styles.img} />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Testt</h1>
					<p className={styles.desc}>Desc</p>
					<Button text='увидеть больше' url='#' />
				</div>
				<div className={styles.imgContainer}>
					<Image src='/hero1.jpg' fill={true} alt='' className={styles.img} />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Testt</h1>
					<p className={styles.desc}>Desc</p>
					<Button text='увидеть больше' url='#' />
				</div>
				<div className={styles.imgContainer}>
					<Image src='/hero1.jpg' fill={true} alt='' className={styles.img} />
				</div>
			</div>
		</div>
	)
}

export default Category
