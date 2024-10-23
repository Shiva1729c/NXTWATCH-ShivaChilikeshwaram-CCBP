import {Link} from 'react-router-dom'

import {
  GamingVideoCardItem,
  ThumbnailVideoImage,
  Title,
} from './styledComponents'

const GamingVideoCard = props => {
  const {GamingVideoCardDetails} = props
  const {thumbnailUrl, title, viewCount, id} = GamingVideoCardDetails

  return (
    <GamingVideoCardItem>
      <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <Title>{title}</Title>
        <Title viewsCount>{viewCount} Watching WorldWide</Title>
      </Link>
    </GamingVideoCardItem>
  )
}

export default GamingVideoCard
