import { defineAsyncComponent } from 'vue';
const DOCTYPES_BY_TEMPLATE = {
	ContentPage: defineAsyncComponent(
		() => import('~/doctypes/ContentPage.vue')
	),
};

export const getDoctypeFromTemplate = (template) => `${template}`;

// format that allows local registration via `components`
export default Object.entries(DOCTYPES_BY_TEMPLATE).reduce(
	(acc, [template, doctype]) => ({
		...acc,

		[getDoctypeFromTemplate(template)]: doctype,
	}),
	{}
);
