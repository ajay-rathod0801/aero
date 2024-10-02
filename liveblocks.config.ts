// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data

import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

const client = createClient({
    // publicApiKey:
    //     'pk_dev_uktQ-Ga3dyc6i5FzHsEfhixyUpqmdS2C88Cuvq3DG6EM4FLzmpX1cLxMToyqsQps',
    authEndpoint: '/api/liveblocks-auth',
});

type Presence = {};
type Storage = {};
type UserMeta = {
    id?: string;
    info?: {
        name?: string;
        picture?: string;
    };
};
type RoomEvent = {};
type ThreadMetadata = {};

export const {
    suspense: {
        RoomProvider,
        useMyPresence,
        useSelf,
        useOthers,

        // Other suspense hooks
        // ...
    },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
    client
);
