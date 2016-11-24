/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
export class QuestionMC {
    constructor(public question: string,
                public answers: string[],
                public playerAnswerIds?: string[]){}
}