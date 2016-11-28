/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
export class Game {
    constructor(public gameId: string,
                public name: string,
                public hostId: string,
                public questionIds?: string[],
                public playerIds?: string[],
                public roomNumber?: string,
                public playDate?: number,
                public questionDuration?: number,
                public autoContinue?: boolean){}
}