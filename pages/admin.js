import dynamic from 'next/dynamic';

const config = {
	cms_manual_init: true,
	backend: {
		name: 'github',
		repo: 'j0sephh123/alex_and_joseph',
		branch: 'main',
	},
	media_folder: 'public/img',
	public_folder: 'img',
	collections: [
		{
			label: 'tokens',
			name: 'tokens',
			folder: "_content",
			create: true,
			fields: [
				{
					name: 'title',
					label: 'Title',
					widget: 'string',
				},
				{
					name: 'symbol',
					label: 'Symbol',
					widget: 'string',
				},
			]
		},
	],
}

const CMS = dynamic(
	() =>
		import('netlify-cms-app').then(cms => {
			cms.init({ config });
		}),
	{ssr: false, loading: () => <p>Loading...</p>}
);

const AdminPage = () => <CMS/>
export default AdminPage
