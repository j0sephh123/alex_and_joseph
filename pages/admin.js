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
			files: [
				{
					label: 'ADA',
					name: 'ADA',
					file: 'content/ADA.md',
					fields: [
						{
							label: 'title',
							name: 'title',
							widget: 'string',
						},
						{
							label: 'symbol',
							name: 'symbol',
							widget: 'string',
						},
					],
				},
				{
					label: 'BTC',
					name: 'BTC',
					file: 'content/pages/BTC.md',
					fields: [
						{
							label: 'title',
							name: 'title',
							widget: 'string',
						},
						{
							label: 'symbol',
							name: 'symbol',
							widget: 'string',
						},
					],
				},
			],
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
