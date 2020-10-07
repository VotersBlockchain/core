export default class Transaction{

    // basic transaction setup for VotersBlockchain
    // office shall be the political office or ballot measure being voted on
    // candidate shall be the candidate or response for the political office
    // or ballot measure being voted on
    constructor(office, candidate){
        this.office = office,
        this.candidate = candidate
    }
}