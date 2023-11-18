'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

const Dashboard = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			try {
				const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
					cache: 'no-store',
				})

				if (!res.ok) {
					setErr(true)
					throw new Error('Failed to fetch data')
				}

				const data = await res.json()
				setData(data)
			} catch (error) {
				console.log(error, 'произошла ошибка')
			} finally {
				setLoading(false)
			}
		}
		getData()
	}, [])

	console.log(data)

	return <div className={styles.container}>Dashboard</div>
}

export default Dashboard
