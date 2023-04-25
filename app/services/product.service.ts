import { getProductsUrl } from '@/config/api.config'

import { IProduct } from '@/types/product.interface'

import axiosClassic from '@/api/interceptors'

export const ProductService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IProduct[]>(getProductsUrl(''), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getById(id: string) {
		return axiosClassic.get(getProductsUrl(`/${id}`))
	},

	async getBySlug(slug: string) {
		return axiosClassic.get(getProductsUrl(`/slug/${slug}`))
	},

	async getRelatives(id: string) {
		return axiosClassic.get(getProductsUrl(`/relatives/${id}`))
	}
}
