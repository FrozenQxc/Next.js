import Image from 'next/image'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

async function getData(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`, {
		cache: 'no-store',
	})

	if (!res.ok) {
		return notFound()
	}

	return res.json()
}

const BlogPost = async ({ params }) => {
	const data = await getData(params.id)
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>{data.title}</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde
						corporis eaque architecto commodi explicabo illo odit fugiat
						officia, doloremque dignissimos et, consequuntur non! Incidunt
						mollitia dolorum minima ducimus quidem.
					</p>
					<div className={styles.author}>
						<Image
							src='/hero.jpg'
							alt=''
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>John Doc</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src='/hero1.jpg' alt='' width={555} height={400} />
				</div>
			</div>
		</div>
	)
}

export default BlogPost
