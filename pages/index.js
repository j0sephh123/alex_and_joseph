import {parseMdFile, scanDir} from '../utils'

export default function Index({
  tokens = [],
}) {

  return (
    <div>
      Jello world -> HEllo world1
      {tokens.map(({data}) => <div>{data.title}</div>)}
    </div>
  )
}

export async function getStaticProps(context) {
  const dir = await scanDir('content');
  const tokens = await Promise.all(dir.map(file => parseMdFile(file)));

  return {
    props: {
      tokens
    },
  }
}
