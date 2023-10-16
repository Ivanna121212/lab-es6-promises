// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

 //Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));





getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          
          
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        });
      });
    });
  });
});



function addStepToSteak(step) {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
}


obtainInstruction('steak', 0)
  .then((step0) => {
    addStepToSteak(step0);

    
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    addStepToSteak(step1);
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    addStepToSteak(step2);
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    addStepToSteak(step3);
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    addStepToSteak(step4);
    
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  })
  .catch((error) => {
    
    console.error(error);
  });


  async function makeBroccoli() {
    try {
      
      function addStepToBroccoli(step) {
        document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
      }
  
      
      const step0 = await obtainInstruction('broccoli', 0);
      addStepToBroccoli(step0);
  
      const step1 = await obtainInstruction('broccoli', 1);
      addStepToBroccoli(step1);
  
      const step2 = await obtainInstruction('broccoli', 2);
      addStepToBroccoli(step2);
  
      const step3 = await obtainInstruction('broccoli', 3);
      addStepToBroccoli(step3);
  
      
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    } catch (error) {
      
      console.error(error);
    }
  }
  
  
  makeBroccoli();
  

// Bonus 2 - Promise all
// ...
