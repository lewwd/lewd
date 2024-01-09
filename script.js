  // dont foget to add .png at end bro u went through like 20 minute sfiguring it out
const imageUrls = [
    'rngimagegenerator/a.png',
    'rngimagegenerator/asahiouka.png',
    'rngimagegenerator/mahiroanime.png',
    'rngimagegenerator/g.png',
    'rngimagegenerator/h.png',
    'rngimagegenerator/f.png',
    'rngimagegenerator/KaedeAnime2.png',
    'rngimagegenerator/MiyoAnime2.png',
    'rngimagegenerator/MihariAnime2.png',
    'rngimagegenerator/c.png',
    'rngimagegenerator/d.png',
    'rngimagegenerator/e.png',
    'rngimagegenerator/Main.png',
    'rngimagegenerator/Mahiro2.png',
  ];

  // dont foget to add .png at end bro
  
  // get a random index to select a random image from the array
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  
  // get the img element by its ID
  const imgElement = document.getElementById('randomImg');
  
  // set the src attribute of the img element to the randomly selected image URL
  imgElement.src = imageUrls[randomIndex];
  