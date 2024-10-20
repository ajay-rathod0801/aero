// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data

import {
    createClient,
    LiveList,
    LiveMap,
    LiveObject,
} from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';
import { Layer, Color } from '@/types/canvas';

const client = createClient({
    throttle: 16,
    authEndpoint: '/api/liveblocks-auth',
});

type Presence = {
    cursor: {
        x: number;
        y: number;
    } | null;
    selection: string[];

    pencilDraft: [x: number, y: number, pressure: number][] | null;
    penColor: Color | null;
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
        useOthersMapped,
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
