let userNum = prompt('Enter number between 1 and 100');

if(userNum >= 60 && userNum <= 69) {
                document.write('You received a D');
} else if (userNum >= 70 && userNum <= 79) {
                document.write('You received a C');
} else if (userNum >= 80 && userNum <= 89) {
                document.write('You received a B');
} else if (userNum >= 90 && userNum <= 100) {
                document.write('You received a A');
} else if (userNum < 60 && userNum >= 0) {
                document.write('You received a F');
} else {
                document.write('You need to enter a number between 1 and 100. Try again.');    
}
