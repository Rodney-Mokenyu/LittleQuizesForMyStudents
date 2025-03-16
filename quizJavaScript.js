
        function checker(){  
        let score = 0;      
        let correctAnswers = ['B', 'A', 'B', 'A', 'A', 'B', 'A', 'B', 'B', 'A'];

        let studentAnswers = [];

        // collecting the chosen answers
        for(let i = 0; i<correctAnswers.length; i++){
            let chosenOption = document.querySelector(`input[name="q${i+1}"]:checked`);

        if(chosenOption){
            studentAnswers.push(chosenOption.value)
        } else{
            studentAnswers.push(null);
            alert(`You have not answered question ${i+1}`);

        }

        }
        //calculating the score
        
        for(let i=0; i<correctAnswers.length; i++){
            if(correctAnswers[i]==studentAnswers[i]){
                score++;
            }
        }

        let publishScore = document.getElementById("score");
        publishScore.innerHTML = `<b>Your final score is: ${score}/${correctAnswers.length}</b>`;
        publishScore.style.display = 'block'
    

    }

        //Event listener to the submit button
    let him = document.getElementById("submitButton");
    him.addEventListener('click', function () {
        checker(); 
        him.style.backgroundColor = 'green';
        
    });

   
   
    