import {GameTemplate} from "./game-template.model";
/**
 * Created by Mike on 26-11-2016.
 */
export class GameTemplateService {

    private games: GameTemplate[] = [];

    constructor(){
        this.addGameTemplate(new GameTemplate("0", "TestTemplate1", "0", ["1", "2", "3"]));
        this.addGameTemplate(new GameTemplate("1", "TestTemplate2", "0", ["4", "5", "6", "11"]));
        this.addGameTemplate(new GameTemplate("2", "TestTemplate3", "0", ["7", "8", "9", "11", "12"]));
    }

    public getGameTemplates(userId: string){
        return this.games;
    }

    public addGameTemplate(gameTemplate: GameTemplate){
        this.games.push(gameTemplate);
    }

    public deleteGameTemplate(gameTemplate: GameTemplate){
        this.games.splice(this.games.indexOf(gameTemplate), 1);
    }

    public getGameTemplate(gameTemplateId: string){
        for (let game of this.games){
            if (game.gameId === gameTemplateId){
                return game;
            }
        }
        return null;
    }

}