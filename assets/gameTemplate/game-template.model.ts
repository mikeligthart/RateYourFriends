/**
 * Created by Mike Ligthart on 25-Nov-16.
 */
export class GameTemplate {
    constructor(public gameId: string,
                public name: string,
                public hostId: string,
                public questionIds?: string[]){}
}