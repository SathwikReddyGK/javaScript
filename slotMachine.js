const prompt = require("prompt-sync")();

// Number of rows and columns in the reel
const ROWS = 3;
const COLS = 3;

// number of each symbols out of which we can randomly
// assign values to each column of the reel
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
};

// Value for each symbol on the reel to identify
// the total win for a user
const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
};

// Take initial deposit amount from user
const deposit = () => {
    while(true){

        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if ( isNaN(numberDepositAmount) || numberDepositAmount <= 0 ){
            console.log("invalid deposit amount, try again!");
        }
        else {
            return numberDepositAmount;
        }
    }   
};

// Get the number of lines of the reel user is planning to bet on in the current run
const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > 3){
            console.log("Invalid number of lines, try again!!");
        } else {
            return numberOfLines;
        }
    }
};

// get the bet amount for current run
const getBet = (balance,lines) => {
    while(true){
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
            console.log("Invalid bet, try again!!");
        } else {
            return numberBet;
        }
    }
};

// Spin the reel and get the result of the spin
const spin = () => {
    const symbols = [];
    for(const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i<count; i++){
            symbols.push(symbol);
        }
    }
    
    const reels = [];
    for(let i = 0; i<COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j = 0; j<ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            reels[i].push(reelSymbols[randomIndex]);
            reelSymbols.splice(randomIndex,1);
        }
    }
    return reels;
};

// Transpose the matrix so that we can print the output of the reel
const transpose = (reels) => {
    const rows = []
    for(i = 0; i < ROWS; i++){
        rows.push([]);
        for(j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);
        };
    };
    return rows;
};

// Print the transposed matrix
const printRows = (rows) => {
    for( const row of rows){
        outString = "";
        for(const[i,value] of row.entries()){
            outString += value;
            if(i < row.length-1){
                outString += " | ";
            };
        };
        console.log(outString);
    };
};

// Find the total winnings of user
const getWinnings = (rows,bet,lines) => {

    let totalWinnings = 0;
    for(let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame = true;
        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            };
        };
        if(allSame == true){
            totalWinnings += bet * SYMBOL_VALUES[symbols[0]];
        };
    };

    return totalWinnings;
};

const game = () => {
    let balance = deposit();

    while(true){
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance,numberOfLines);
        balance -= bet * numberOfLines;
        const reel = spin();
        const rows = transpose(reel);
        printRows(rows);
        const winnings = getWinnings(rows,bet,numberOfLines);
        balance += winnings;
        console.log("You won, $" + winnings);

        if(balance <= 0){
            console.log("You ran out of money!");
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)? ");
        if (playAgain != "y") break;
    }
}

game();


