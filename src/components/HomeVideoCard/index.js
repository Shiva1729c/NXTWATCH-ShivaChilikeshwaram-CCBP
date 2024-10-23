import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

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

const HomeVideoCard = props => {
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
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <ProfileSection>
          <ProfileImage src={channelProfileImageUrl} alt="channel logo" />
          <ProfileDetailsContainer>
            <Title>{title}</Title>
            <ChannelName>{channelName}</ChannelName>
            <ProfileViewsContainer>
              <ViewsItem views>{viewCount}</ViewsItem>
              <ViewsItem>{publishedTime} ago</ViewsItem>
            </ProfileViewsContainer>
          </ProfileDetailsContainer>
        </ProfileSection>
      </Link>
    </VideoCardItem>
  )
}

export default HomeVideoCard
