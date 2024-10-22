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

const VideoItem = props => {
  const {VideoItemDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channelName,
    channelProfileImageUrl,
  } = VideoItemDetails

  const parsedDate = new Date(publishedAt)
  const publishedTime = formatDistanceToNow(parsedDate)

  return (
    <VideoCardItem>
      <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />
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
    </VideoCardItem>
  )
}

export default VideoItem
