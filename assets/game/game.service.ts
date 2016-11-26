import {Game} from "./game.model";
/**
 * Created by Mike Ligthart on 25-Nov-16.
 */

export class GameService {

    private games: Game[] = [];

    getGames(userId: string){
        return this.games;
    }

    addGame(game: Game){
        this.games.push(game);
    }

    deleteGame(game: Game){
        this.games.splice(this.games.indexOf(game), 1);
    }

}