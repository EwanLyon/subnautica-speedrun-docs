type TwitchProps = {
	videoId: string;
	startTime?: number; // In seconds
};

export const TwitchVideo = (props: TwitchProps) => {
	let videoURL = `https://player.twitch.tv/?video=${props.videoId}&parent=localhost`;

	if (props.startTime) {
		videoURL += `&time=${props.startTime}`;
	}

	return (
		<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: 16 }}>
			<iframe
				width="100%"
				height="100%"
				src={videoURL}
				allowFullScreen
			></iframe>
		</div>
	);
};
