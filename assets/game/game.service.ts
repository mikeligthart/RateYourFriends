import {Game} from "./game.model";
/**
 * Created by Mike Ligthart on 25-Nov-16.
 */

export class GameService {

    private game1: Game = new Game("0", "Test1", "0", ["0", "1", "2", "3"], ["0", "1", "2", "3"], "0", 5);
    private game2: Game = new Game("1", "Test2", "0", ["A", "B", "C", "D"], ["0", "1", "2", "3"], "0", 3);
    private game3: Game = new Game("2", "Test3", "0", ["Z", "Z", "X", "X"], ["0", "1", "2", "3"], "0", 2);

    constructor(){
        this.addGame(this.game1);
        this.addGame(this.game2);
        this.addGame(this.game3);
    }

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