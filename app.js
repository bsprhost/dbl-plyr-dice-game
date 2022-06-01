

class clsDblDiceMgr {
    constructor(newDiceConfigs,
        newDiceTotal1,
        newDiceTotal2,
        newBtnHldAFoc,
        newBtnHldBFoc) {

        this.diceConfigs = newDiceConfigs;
        this.diceTotal1 = newDiceTotal1;
        this.diceTotal2 = newDiceTotal2;
        this.btnHldAFoc = newBtnHldAFoc;
        this.btnHldBFoc = newBtnHldBFoc;

        this.putBtnsOnScreen();
        this.startDiceGame();
    }

    putBtnsOnScreen = () => {
        this.diceConfigs.commands.forEach(strBtnName => {
            let intIndex = 0;
            const domButtons = document.getElementById("btn-panel");
            const domBtn = document.createElement('button');
            domBtn.classList.add('btn');
            domBtn.name = strBtnName;
            domBtn.innerText = this.setCaption(strBtnName);
            domBtn.style.backgroundColor = this.setBackColor(strBtnName);
            domBtn.style.color = this.setColor(strBtnName);
            domButtons.appendChild(domBtn);
            intIndex++;
        })
    }
    
    setCaption = (strElementName) => {
        let strKeyValue = "";
        for(const entry of Object.entries(this.diceConfigs)) {
            if (entry[0] == strElementName) {
                strKeyValue = entry[1];
                break;
            }
        }  
        return strKeyValue;   
    }

    setBackColor = (strElementName) => {
        let strKeyValue = "";
        for(const entry of Object.entries(this.diceConfigs)) {
            if (entry[0] == `${strElementName}-bcolor`) {
                strKeyValue = entry[1];
                break;
            }
        }  
        return strKeyValue;   
    }

    setColor = (strElementName) => {
        let strKeyValue = "";
        for(const entry of Object.entries(this.diceConfigs)) {
            if (entry[0] == `${strElementName}-color`) {
                strKeyValue = entry[1];
                break;
            }
        }  
        return strKeyValue;   
    }
// 88888888888888888888888888888888888888888888888888888888

    rollDice1 = () => {
		let dice1 = document.getElementById("dice-1");
		let status = document.getElementById("status");
        let btnStart = document.getElementsByClassName("btn")[0];
        let plyrATot = document.getElementById("plyr-a-tot");

		let diceResult1 = Math.floor(Math.random() * 6) + 1;
		this.diceTotal1 = this.diceTotal1 + diceResult1;
		dice1.innerHTML = diceResult1;
        status.innerText = `Player A has rolled the number: ${diceResult1}.\n`;
		status.innerText += `Player A's total score is: ${this.diceTotal1}.\n\n`;
        plyrATot.innerText = this.diceTotal1;
        btnStart.innerText = "Start";

		if(this.diceTotal1 > 20){
            this.procWinScore1();
		}
        else if (diceResult1 == 1) {
            this.procLoseScore1();
        }
    }

    procLoseScore1 = () => {
		let status = document.getElementById("status");
        let btnStart = document.getElementsByClassName("btn")[0];
        let btnAHold = document.getElementsByClassName("btn")[1];
        let btnBHold = document.getElementsByClassName("btn")[2];
        let btnRoll = document.getElementsByClassName("btn")[3];

        status.innerText += " UNLUCKY! Player A lost his time.\n";
        status.innerText += " Please press the Restart button to play again.";
        btnStart.innerText = "=> Restart <=";
        btnRoll.innerText = "Player A";
        btnRoll.innerText += "Roll";
        btnRoll.disabled = true;
        btnStart.disabled = false;
        btnAHold.disabled = true;
        btnBHold.disabled = true;
        this.diceTotal1 = 0;
        diceResult1 = 0;
        this.btnHldAFoc = 1;
        this.btnHldBFoc = 0;
    }

    procWinScore1 = () => {
		let dice1 = document.getElementById("dice-1");
		let status = document.getElementById("status");
        let btnStart = document.getElementsByClassName("btn")[0];
        let btnAHold = document.getElementsByClassName("btn")[1];
        let btnBHold = document.getElementsByClassName("btn")[2];
        let btnRoll = document.getElementsByClassName("btn")[3];

        status.innerText += "Player A has beaten the score of 20\n";
        status.innerText += " Player A is the WINNER!!\n";
        status.innerText += " Please press the Restart button to play again.";
        btnStart.innerText = "=> Restart <=";
        btnRoll.innerText += "Player A";
        btnRoll.innerText = "Roll";
        btnRoll.disabled = true;
        btnStart.disabled = false;
        btnAHold.disabled = true;
        btnBHold.disabled = true;
        this.diceTotal1 = 0;
        dice1.innerHTML = "";
        this.btnHldAFoc = 1;
        this.btnHldBFoc = 0;
    }

// 88888888888888888888888888888888888888888888888888888888

    rollDice2 = () => {
        let dice2 = document.getElementById("dice-2");
        let status = document.getElementById("status");
        let btnStart = document.getElementsByClassName("btn")[0];
        let plyrBTot = document.getElementById("plyr-b-tot");

        let diceResult2 = Math.floor(Math.random() * 6) + 1;
        this.diceTotal2 = this.diceTotal2 + diceResult2;
        dice2.innerHTML = diceResult2;
        status.innerText = `Player B has rolled the number: ${diceResult2}.\n`;
        status.innerText += `Player B's total score is: ${this.diceTotal2}.\n\n`;
        plyrBTot.innerText = this.diceTotal2;
        btnStart.innerText = "Start";

        if(this.diceTotal2 > 20){
            this.procWinScore2();
        }
        else if (diceResult2 == 1) {
            this.procLoseScore2();
        }
    }

    procLoseScore2 = () => {
        let status = document.getElementById("status");
        let btnStart = document.getElementsByClassName("btn")[0];
        let btnAHold = document.getElementsByClassName("btn")[1];
        let btnBHold = document.getElementsByClassName("btn")[2];
        let btnRoll = document.getElementsByClassName("btn")[3];

        status.innerText += " UNLUCKY! Player B has lost his time.\n";
        status.innerText += " Please press the Restart button to play again.";
        btnStart.innerText = "=> Restart <=";
        btnRoll.innerText += "Player B";
        btnRoll.innerText = "Roll";
        btnRoll.disabled = true;
        btnStart.disabled = false;
        btnAHold.disabled = true;
        btnBHold.disabled = true;
        this.diceTotal2 = 0;
        diceResult2 = 0;
        this.btnHldAFoc = 1;
        this.btnHldBFoc = 0;
    }

    procWinScore2 = () => {
        let dice2 = document.getElementById("dice-2");
        let status = document.getElementById("status");
        let btnStart = document.getElementsByClassName("btn")[0];
        let btnAHold = document.getElementsByClassName("btn")[1];
        let btnBHold = document.getElementsByClassName("btn")[2];
        let btnRoll = document.getElementsByClassName("btn")[3];

        status.innerText += "Player B has beaten the score of 20\n";
        status.innerText += " Player B is the WINNER!!\n";
        status.innerText += " Please press the Restart button to play again.";
        btnStart.innerText = "=> Restart <=";
        btnRoll.innerText += "Player B";
        btnRoll.innerText = "Roll";
        btnRoll.disabled = true;
        btnStart.disabled = false;
        btnAHold.disabled = true;
        btnBHold.disabled = true;
        this.diceTotal2 = 0;
        dice2.innerHTML = "";
        this.btnHldAFoc = 1;
        this.btnHldBFoc = 0;
    }

// 88888888888888888888888888888888888888888888888888888888

    hndClickInputs = (strClickElement) => {
        switch(strClickElement) {
                case "start":
                    this.startDiceGame();
                    break;
            
                case "roll":
                    this.selectDice();
                    break;

                case "hold-A":
                    this.setRollFocus("hold-A");
                    break;

                case "hold-B":
                    this.setRollFocus("hold-B");
                    break;
            }        
    }

    selectDice = () => {
        if (this.btnHldAFoc == 1) {
            this.rollDice1();
        }
        else if (this.btnHldBFoc == 1) {
            this.rollDice2();
        }
    }

    setRollFocus = (strHoldClicked) => {
        let btnRoll = document.getElementsByClassName("btn")[3];

        if (strHoldClicked == "hold-A") {
            btnRoll.innerText = "=> Player B <=\n";
            btnRoll.innerText += "Roll";
            this.btnHldAFoc = 0;
            this.btnHldBFoc = 1;

        }
        else if (strHoldClicked == "hold-B") {
            btnRoll.innerText = "=> Player A <=\n";
            btnRoll.innerText += "Roll";
            this.btnHldAFoc = 1;
            this.btnHldBFoc = 0;
        }
    }

    startDiceGame = () => {
        let dice1 = document.getElementById("dice-1");
        let dice2 = document.getElementById("dice-2");
        let status = document.getElementById("status");
        let btnStart = document.getElementsByClassName("btn")[0];
        let btnAHold = document.getElementsByClassName("btn")[1];
        let btnBHold = document.getElementsByClassName("btn")[2];
        let btnRoll = document.getElementsByClassName("btn")[3];
        let plyrA = document.getElementById("plyr-a");
        let plyrB = document.getElementById("plyr-b");
        let plyrATot = document.getElementById("plyr-a-tot");
        let plyrBTot = document.getElementById("plyr-b-tot");

        status.innerText = " Welcome to a Double Player Dice Game.\n";
        status.innerText += "First player pass 20 is the winner.\n";
        status.innerText += "Any player that rolls a 1 loses the game.\n";
        status.innerText += "\n";
        status.innerText += " Player can click the Roll button when it is their turn.";
        btnStart.innerText = "Start\n"
        btnStart.style.height = 10;
        btnRoll.innerText = "=> Player A <=\n";
        btnRoll.innerText += "Roll";
        btnRoll.disabled = false;
        btnStart.disabled = true;
        
        plyrA.style.backgroundColor = '#afd1e9';
        plyrATot.style.backgroundColor = '#afd1e9';
        plyrATot.innerText = 0;
        btnAHold.disabled = false;
        
        this.diceTotal = 0;
        plyrB.style.backgroundColor = '#ffff00';
        plyrBTot.style.backgroundColor = '#ffff00';
        plyrBTot.innerText = 0;
        btnBHold.disabled = false;
        this.diceTotal2 = 0;

        dice1.innerText = "";
        dice1.style.backgroundColor = '#afd1e9';
        dice2.innerText = "";
        dice2.style.backgroundColor = '#ffff00';

    }
}

const objDiceConfigs = {"start":"Start",
                        "roll":"Roll",
                        "startFocus":"=> Restart <=",
                        "rollFocus":"=> Roll <=",
                        "playAgain":" Press the Restart button to play again.",
                        "hold-A":"Player A Hold",
                        "hold-B":"Player B Hold",
                        "hold-A-bcolor":"#afd1e9",
                        "hold-B-bcolor":"#ffff00",
                        "hold-A-color":"#000000",
                        "hold-B-color":"#000000",
                        commands: ['start',
                                    'hold-A',
                                    'hold-B',
                                    'roll']
};

const objDblDiceMgr = new clsDblDiceMgr(objDiceConfigs, 0, 0, 1, 0);

// Listen for click events
document.addEventListener("click", (event) => {
    objDblDiceMgr.hndClickInputs(event.target.name);
});



