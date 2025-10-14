import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { CommentsModule } from "./comments/comments.module";
import { MatchesModule } from "./matches/matches.module";
import { PairingsModule } from "./pairings/pairings.module";
import { PlayersModule } from "./players/players.module";
import { ResultsOfMatchesModule } from "./results-of-matches/results-of-matches.module";
import { StandingsModule } from "./standings/standings.module";
import { TournamentPlayersModule } from "./tournament-players/tournament-players.module";
import { TournamentsModule } from "./tournaments/tournaments.module";

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CommentsModule,
    MatchesModule,
    PairingsModule,
    PlayersModule,
    ResultsOfMatchesModule,
    StandingsModule,
    TournamentPlayersModule,
    TournamentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
