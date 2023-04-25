import axios from 'axios'

import { API_SERVER_URL, API_URL } from '@/config/api.config'
import { IS_PRODUCTION } from '@/config/constants'

const axiosClassic = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept-Encoding': 'gzip'
	}
})

export default axiosClassic
