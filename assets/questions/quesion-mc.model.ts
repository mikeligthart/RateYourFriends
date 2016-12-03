/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
export class QuestionMC {
    constructor(public questionId: string,
                public question: string,
                public answers: string[],
                public playerAnswerIds?: string[]){}
}