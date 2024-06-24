"use client"

import { useEffect, useMemo, useState } from 'react';
import { Text, Grid, Group, rem, useMantineTheme } from '@mantine/core';
import { Dropzone, MIME_TYPES, FileWithPath } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';
import styles from './styles.module.css';
import FilePlayer from 'react-player/file';
import { useVideoStore } from '@/store/videos';

export function DropzoneBanner() {
  const theme = useMantineTheme();
  // const openRef = useRef<() => void>(null);
  const {uploadVideo} = useVideoStore();
  const [files, setFiles] = useState<FileWithPath[]>([]);


  useEffect(() => {
    files.map((file) => {
      const imageUrl = URL.createObjectURL(file);
      uploadVideo(imageUrl);
    });
  }, [files]);

  const previews = useMemo(() => (
    files.map((file, index) => {
      const imageUrl = URL.createObjectURL(file);
      return (
        <Grid.Col span="content">
          <FilePlayer key={index} url={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />
        </Grid.Col>
      );
    })
  ), [files]);

  return (
    <div className={styles.wrapper}>
      <Dropzone
        onDrop={setFiles}
        className={styles.dropzone}
        radius="md"
        accept={[MIME_TYPES.mp4]}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload style={{ width: rem(50), height: rem(50) }} stroke={1.5} />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>Upload resume</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            We can accept only <i>.mp4</i> files that are less than 50Mb in size.
          </Text>
        </div>
      </Dropzone>
      
      <Grid
        className={styles.previews}
        columns={3}
        grow
      >
        {previews}
      </Grid>
    </div>
  );
}