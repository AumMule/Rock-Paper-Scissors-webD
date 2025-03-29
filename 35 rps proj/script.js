
const userRock = document.querySelector('.user-selected .rock');
const userPaper = document.querySelector('.user-selected .paper');
const userScissors = document.querySelector('.user-selected .scissors');
const computerRock = document.querySelector('.computer-selected .rock');
const computerPaper = document.querySelector('.computer-selected .paper');
const computerScissors = document.querySelector('.computer-selected .scissors');
const computerImages = document.querySelectorAll('.computer-selected img');
const userSelectedImage = document.querySelector('.userSelectedImage');
const compSelectedImage = document.querySelector('.CompSelectedImage');

const choices = ['rock', 'paper', 'scissors'];


function playGame(userChoice) {
    
    computerImages.forEach(img => {
        img.style.filter = 'none';
    });

    
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[computerChoiceIndex];
    
    
    userSelectedImage.src = `assets/${userChoice}.jpg`;
    compSelectedImage.src = `assets/${computerChoice}.jpg`;
    
    
    compSelectedImage.style.transform = 'scaleX(-1)';
    
    let selectedComputerImage;
    if (computerChoice === 'rock') {
        selectedComputerImage = computerRock;
    } else if (computerChoice === 'paper') {
        selectedComputerImage = computerPaper;
    } else {
        selectedComputerImage = computerScissors;
    }
    
    
    selectedComputerImage.style.filter = 'invert(100%)';
    
    
    let result;
    if (userChoice === computerChoice) {    
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }
    
    // Display result
    const resultDiv = document.createElement('div');
    resultDiv.textContent = result;
    resultDiv.className = 'result-message';
    resultDiv.style.fontSize = '24px';
    resultDiv.style.fontWeight = 'bold';
    resultDiv.style.marginTop = '15px';
    resultDiv.style.color = '#212d3d';
    
    
    const existingResult = document.querySelector('.result-message');
    if (existingResult) {
        existingResult.remove();
    }
    
    
    document.querySelector('.output').appendChild(resultDiv);
}


userRock.addEventListener('click', () => playGame('rock'));
userPaper.addEventListener('click', () => playGame('paper'));
userScissors.addEventListener('click', () => playGame('scissors'));

document.querySelector('.output').style.display = 'flex';
document.querySelector('.output').style.flexDirection = 'column';
document.querySelector('.output').style.justifyContent = 'center';
document.querySelector('.output').style.alignItems = 'center';
document.querySelector('.output').style.gap = '20px';
document.querySelector('.output').style.marginTop = '20px';

userSelectedImage.style.height = '150px';
compSelectedImage.style.height = '150px';

const imageContainer = document.createElement('div');
imageContainer.style.display = 'flex';
imageContainer.style.gap = '30px';
imageContainer.style.justifyContent = 'center';

// Move images to the container
const output = document.querySelector('.output');
output.innerHTML = ''; 
imageContainer.appendChild(userSelectedImage);
imageContainer.appendChild(compSelectedImage);
output.appendChild(imageContainer);