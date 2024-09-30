// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data

import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

const client = createClient({
    publicApiKey:
        'pk_dev_uktQ-Ga3dyc6i5FzHsEfhixyUpqmdS2C88Cuvq3DG6EM4FLzmpX1cLxMToyqsQps',
});

type Presence = {};
type Storage = {};
type UserMeta = {};
type RoomEvent = {};
type ThreadMetadata = {};

export const {
    suspense: {
        RoomProvider,
        useMyPresence,

        // Other suspense hooks
        // ...
    },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
    client
);
