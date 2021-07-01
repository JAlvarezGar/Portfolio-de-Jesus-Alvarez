import React from "react";
import Timeline from 'react-timeline-semantic-ui';

export function Tecnologias() {
  return (
    <div>
      Technologies
      <Timeline
        direction="left"
        icon="user"
        title="Title"
        time="Time"
        description="Description."
        color="red"
        tags={["tag1", "tag2"]}
        lineHeight={4}
      />
    </div>
  );
}
