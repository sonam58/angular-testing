export class VoteComponent{
    totalVotes = 0;

    upvote(){
        this.totalVotes++;
    }
    downVote(){
        this.totalVotes--;
    }
}
