import {promises as fs} from 'fs'

export default async(req, res) => {
  const contentsList = await fs.readdir(`${process.cwd()}/content/`);

  const modifiedContentsList = contentsList.map(fileName => {
    const name = fileName.split('.')[0]
    return (
      {
        label: name,
        name,
        file: `content/${fileName}`,
        fields: [
          {
            name: 'title',
            label: 'title',
            widget: 'string',
          },
          {
            name: 'symbol',
            label: 'symbol',
            widget: 'string',
          },
        ]
      }
    );
  })

  res.status(200).json({
    contentsList: modifiedContentsList,
  })
}
