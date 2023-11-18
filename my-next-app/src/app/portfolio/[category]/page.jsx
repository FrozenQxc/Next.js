import Button from '@/components/Button/Button'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { items } from './data.js'
import styles from './page.module.css'

const getData = cat => {
	const data = items[cat]

	if (Array.isArray(data)) {
		return data
	}

	return notFound()
}
const Category = ({ params }) => {
	const data = getData(params.category)

	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{params.category}</h1>
			{data.map(item => (
				<div key={item.id} className={styles.item}>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.desc}</p>
						<Button text='увидеть больше' url='#' />
					</div>
					<div className={styles.imgContainer}>
						<Image src={item.image} fill={true} alt='' className={styles.img} />
					</div>
				</div>
			))}
		</div>
	)
}

export default Category
