import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
	return (
		<div className={styles.container}>
			<div>@2023 FrozenQxc.⚡</div>
			<div>
				<div className={styles.social}>
					<Image
						src='2.svg'
						alt='Git'
						width={30}
						height={30}
						className={styles.icon}
					/>
					<Image
						src='2.svg'
						alt='Telegram'
						width={30}
						height={30}
						className={styles.icon}
					/>
					<Image
						src='2.svg'
						alt='Vk'
						width={30}
						height={30}
						className={styles.icon}
					/>
				</div>
			</div>
		</div>
	)
}

export default Footer
