import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoCardItem,
  ThumbnailVideoImage,
  ProfileImage,
  Title,
  ChannelName,
  ProfileViewsContainer,
  ViewsItem,
  ProfileDetailsContainer,
  ProfileSection,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {VideoItemDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channelName,
    channelProfileImageUrl,
    id,
  } = VideoItemDetails

  const parsedDate = new Date(publishedAt)
  const publishedTime = formatDistanceToNow(parsedDate)

  return (
    <VideoCardItem>
      <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />
      <ProfileSection>
        <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
          <ProfileImage src={channelProfileImageUrl} alt="channel logo" />
          <ProfileDetailsContainer>
            <Title>{title}</Title>
            <ChannelName>{channelName}</ChannelName>
            <ProfileViewsContainer>
              <ViewsItem views>{viewCount}</ViewsItem>
              <ViewsItem>{publishedTime} ago</ViewsItem>
            </ProfileViewsContainer>
          </ProfileDetailsContainer>
        </Link>
      </ProfileSection>
    </VideoCardItem>
  )
}

export default TrendingVideoCard
