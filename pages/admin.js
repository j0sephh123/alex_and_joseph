import dynamic from 'next/dynamic';

const config = {
	cms_manual_init: true,
	publish_mode: 'editorial_workflow',
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
					label: 'Home',
					name: 'home',
					file: 'content/home.md',
					fields: [
						{
							name: 'title',
							label: 'title',
							widget: 'string',
						}
					],
				},
				{
					label: 'Home2',
					name: 'home2',
					file: 'content/home2.md',
					fields: [
						{
							name: 'title',
							label: 'title',
							widget: 'string',
						}
					],
				},
			],
		},
	],
}

const CMS = dynamic(
	() =>
		import('netlify-cms-app').then((cms) => {
			cms.init({ config });
		}),
	{ ssr: false, loading: () => <p>Loading...</p> }
);

export default function AdminPage() {
	return <CMS />;
}


