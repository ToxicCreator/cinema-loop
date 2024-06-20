import { Grid } from "@mantine/core";
import { VideoData } from "@/store/videos";
import { Player } from "@/components/player";


type Props = {
	videos: VideoData[];
}

export const VideosPanel = (props: Props) => {
	const {videos} = props;
    return (
        <Grid>
            {videos.map(({url}) => (
                <Grid.Col span={{ base: 12, xs: 4 }} h={900}>
                    <Player url={url} playing={false} />
                </Grid.Col>
            ))}
        </Grid>
    );
};
