import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		site: null,
		pageId: null,
	}),

	actions: {
		setSiteData(data) {
			this.site = data;
		},
		setPageId(id) {
			this.pageId = id;
		},
	},
});
