/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
export class Game {
    constructor(public hostId: string,
                public questionIds?: string[],
                public playerIds?: string[],
                public roomNumber?: string){}
}