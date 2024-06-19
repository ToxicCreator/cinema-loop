import { Player } from "@/components/player";
import { Grid } from "@mantine/core";

const data = [
    {
      url: 'https://www.youtube.com/shorts/Itd0NF8sBkc'
    },
    {
      url: 'https://www.youtube.com/shorts/tli4d-JH5CM'
    },
    {
      url: 'https://www.youtube.com/shorts/4GkPqDkgl-E?feature=share'
    },
    {
      url: 'https://www.youtube.com/shorts/tli4d-JH5CM'
    },
    {
      url: 'https://www.youtube.com/shorts/4GkPqDkgl-E?feature=share'
    },
    {
      url: 'https://www.youtube.com/shorts/Itd0NF8sBkc'
    },
    {
      url: 'https://www.youtube.com/shorts/tli4d-JH5CM'
    },
    {
      url: 'https://www.youtube.com/shorts/4GkPqDkgl-E?feature=share'
    },
    {
      url: 'https://www.youtube.com/shorts/tli4d-JH5CM'
    },
    {
      url: 'https://www.youtube.com/shorts/4GkPqDkgl-E?feature=share'
    },
    {
      url: 'https://www.youtube.com/shorts/Itd0NF8sBkc'
    },
];

export const VideosPanel = () => {
    return (
        <Grid>
            {data.map(({url}) => (
                <Grid.Col span={{ base: 12, xs: 4 }} h={900}>
                    <Player url={url} playing={false} />
                </Grid.Col>
            ))}
        </Grid>
    );
};
