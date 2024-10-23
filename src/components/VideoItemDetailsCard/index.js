import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'

import {
  VideoItem,
  Title,
  VideoViewsAndTime,
  ViewsItem,
  VideoDetailsContainer,
  InteractionButtonsContainer,
  InteractionButton,
  InteractionButtonText,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelTextContainer,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  VideoPlayer,
} from './styledComponents'

const VideoItemDetailsCard = props => {
  const {VideoItemCardDetails} = props
  const {
    videoUrl,
    title,
    viewCount,
    publishedAt,
    channelName,
    channelProfileImageUrl,
    subscriberCount,
    description,
  } = VideoItemCardDetails

  const parsedDate = new Date(publishedAt)
  const publishedTime = formatDistanceToNow(parsedDate)

  return (
    <AppContext.Consumer>
      {value => {
        const {addVideoToList} = value

        const onSaveVideo = () => {
          addVideoToList({...VideoItemCardDetails})
        }

        return (
          <VideoItem>
            <VideoPlayer>
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </VideoPlayer>
            <Title>{title}</Title>
            <VideoDetailsContainer>
              <VideoViewsAndTime>
                <ViewsItem>{viewCount} views</ViewsItem>
                <ViewsItem>{publishedTime} ago</ViewsItem>
              </VideoViewsAndTime>
              <InteractionButtonsContainer>
                <InteractionButton type="button">
                  <AiOutlineLike size={20} color="#64748b" />
                  <InteractionButtonText>Like</InteractionButtonText>
                </InteractionButton>
                <InteractionButton type="button">
                  <AiOutlineDislike size={20} color="#64748b" />
                  <InteractionButtonText>Dislike</InteractionButtonText>
                </InteractionButton>
                {/* Save button */}
                <InteractionButton type="button" onClick={onSaveVideo}>
                  <BiListPlus size={20} color="#64748b" />
                  <InteractionButtonText>Save</InteractionButtonText>
                </InteractionButton>
                {/* Save button */}
              </InteractionButtonsContainer>
            </VideoDetailsContainer>
            <hr />
            <ChannelDetailsContainer>
              <ChannelLogo src={channelProfileImageUrl} alt="channel logo" />
              <ChannelTextContainer>
                <ChannelName>{channelName}</ChannelName>
                <ChannelSubscribers>
                  {subscriberCount} subscribers
                </ChannelSubscribers>
              </ChannelTextContainer>
            </ChannelDetailsContainer>
            <ChannelDescription>{description}</ChannelDescription>
          </VideoItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoItemDetailsCard
