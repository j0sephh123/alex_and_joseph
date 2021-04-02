import dynamic from 'next/dynamic';
import axios from 'axios';

const loadConfig = (contentsList) => {
	return {
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
				files: [...contentsList],
			},
		],
	}
}

const CMS = dynamic(
	() =>
		import('netlify-cms-app').then(async (cms) => {
			const {data: {contentsList}} = await axios.get(`${window.location.origin}/api/hello`)
			cms.init({config: {...loadConfig(contentsList)}});
		}),
	{ssr: false, loading: () => <p>Loading...</p>}
);

const AdminPage = () => {
	console.log('admin page')
	return <CMS something={1}/>
}
export default AdminPage
