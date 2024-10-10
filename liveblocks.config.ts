// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data

import { createClient, LiveList, LiveMap, LiveObject } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';
import { Layer, Color } from '@/types/canvas';

const client = createClient({
    // publicApiKey:
    //     'pk_dev_uktQ-Ga3dyc6i5FzHsEfhixyUpqmdS2C88Cuvq3DG6EM4FLzmpX1cLxMToyqsQps',
    throttle: 16,
    authEndpoint: '/api/liveblocks-auth',
});

type Presence = {
    cursor: {
        x: number;
        y: number;
    } | null,
    selection: string[];
};

type Storage = {
    layers: LiveMap<string, LiveObject<Layer>>;
    layerIds: LiveList<string>; 
};

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
        useHistory,
        useUndo,
        useRedo,
        useCanUndo,
        useCanRedo,
        useStorage,
        useOthersConnectionIds,
        useOther,
        useMutation,


        // Other suspense hooks
        // ...
    },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
    client
);
