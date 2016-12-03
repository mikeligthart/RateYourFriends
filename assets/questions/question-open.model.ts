/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
export class QuestionOpen {
    constructor(public questionId: string,
                public question: string,
                public playerAnswerIds?: string[]){}
}