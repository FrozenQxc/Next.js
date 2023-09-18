import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
	return (
		<div className={styles.container}>
			<div>@2023 FrozenQxc.⚡</div>
			<div>
				<Image src='/1.svg' alt='FrozenDev' width={30} height={30} />
			</div>
		</div>
	)
}

export default Footer
