import { VoteComponent } from "./vote-component";

describe('VoteComponent', () => {
   let component: VoteComponent;
   
   beforeEach(() => {
       component = new VoteComponent;
   });
    it('should increment totalVotes when upVoted', () => {
        // *Arrange
        // let component = new VoteComponent;

        // *Act
        component.upvote();

        // *Assert

        expect(component.totalVotes).toBe(1);

    });

    it('should decrement totalVotes when downVoted', () => {
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    });
});