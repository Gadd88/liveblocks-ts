import { Liveblocks } from "@liveblocks/node";

export const liveblocksClient = new Liveblocks({
    secret: process.env.LIVEBLOCKS_API_KEY || 'sk_dev_2iDboIrxqsRykHfHIerQvWUS6GWvt-l6AVBHuRkgit32qGQ5yNjUUdUoWwAL_pTP',
})