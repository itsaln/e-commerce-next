import { getReviewsUrl } from '@/config/api.config'

import { IReview } from '@/types/reviews.interface'

import axiosClassic from '@/api/interceptors'

export const ReviewService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IReview[]>(getReviewsUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async getById(id: string) {
		return axiosClassic.get(getReviewsUrl(`/${id}`))
	}
}
