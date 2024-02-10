
  fetch("https://api.ipify.org?format=json")
    .then ((Response)=>Response.json())
    .then(data =>{
      const ipa =data.ip;
      console.log(ipa)
      document.write(ipa)

    });

