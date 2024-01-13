  // dont foget to add .png at end bro u went through like 20 minute sfiguring it out
const imageUrls = [
    'rngimagegenerator/a.png',
    'rngimagegenerator/asahiouka.png',
    'rngimagegenerator/mahiroanime.png',
    'rngimagegenerator/g.png',
    'rngimagegenerator/h.png',
    'rngimagegenerator/KaedeAnime2.png',
    'rngimagegenerator/MiyoAnime2.png',
    'rngimagegenerator/MihariAnime2.png',
    'rngimagegenerator/c.png',
    'rngimagegenerator/d.png',
    'rngimagegenerator/e.png',
    'rngimagegenerator/Main.png',
    'rngimagegenerator/Mahiro2.png',
    'rngimagegenerator/zoro2.png',
    'rngimagegenerator/clown.png',
    'rngimagegenerator/usopp1.png',
    'rngimagegenerator/choppertony.png',
    'rngimagegenerator/zoro.png',
    'rngimagegenerator/franky.png',
    'rngimagegenerator/usopp_anime_6.png',
    'rngimagegenerator/brook.png',
    'rngimagegenerator/smoker.png',
    'rngimagegenerator/ussoop.png',
    'rngimagegenerator/robin.png',
    'rngimagegenerator/nami5.png',
    'rngimagegenerator/fatgirl.png',
    'rngimagegenerator/sanji.png',
    'rngimagegenerator/luffy.png',
    'rngimagegenerator/cirno.png',
    'rngimagegenerator/marisa.png',
    'rngimagegenerator/touhou-fumo.gif',
    'rngimagegenerator/mlala.png',
    'rngimagegenerator/fumo.png',
    'rngimagegenerator/whack.png',
    'rngimagegenerator/Lovely-Anime-TouHou-Project-Fumo-Inu-Sakuya-Cosplay-Cute-Doll-Plush-Stuffed-Throw-Pillow-Sitting-Boy.png',
    'rngimagegenerator/neurosama.png',
    'rngimagegenerator/neuro.png',
    'rngimagegenerator/filianplushie.png',
    'rngimagegenerator/filianmiddlefinger.png',
    'rngimagegenerator/filian.png',
    'rngimagegenerator/fill.png',
    'rngimagegenerator/filianwhat.gif',
    'rngimagegenerator/Nami.png',
    'rngimagegenerator/nami3.png',
    'rngimagegenerator/nami4.png',
    'rngimagegenerator/nami2.png',
    'rngimagegenerator/nami1.png',
    'rngimagegenerator/one_piece___nami___sp___24__breaking_mirrors_2__by_thunder1928_dcnjx7u-fullview.png',
    'rngimagegenerator/kid-nami.png',
    'rngimagegenerator/op_luffy_5.png',
    'rngimagegenerator/tonychopper2.png',
    'rngimagegenerator/Nami_Waifuuu.png',
    'rngimagegenerator/tonychopper1.png',
    'rngimagegenerator/onepiecea.png',
    'rngimagegenerator/NamiPostTimeskip__28Original_29.png',
    'rngimagegenerator/chicken1.png',
    'rngimagegenerator/chicken2.png',
    'rngimagegenerator/chicken3.png',
    'rngimagegenerator/chicken4.png',
    'rngimagegenerator/chicken5.png',
    'rngimagegenerator/chicken6.png',
    'rngimagegenerator/chicken7.png',
    'rngimagegenerator/chicken8.png',
    'rngimagegenerator/chicken9.png',
    'rngimagegenerator/chicken10.png',
    'rngimagegenerator/chicken11.png',
    'rngimagegenerator/chicken12.png',
    'rngimagegenerator/copfilian.png',

    'rngimagegenerator/lucsuggested1.jpg',
    'rngimagegenerator/lucsuggested2.jpg',
    'rngimagegenerator/lucsuggested3.jpg',
    'rngimagegenerator/lucsuggested4.jpg',
    'rngimagegenerator/lucsuggested5.png',
    'rngimagegenerator/lucsuggested6.jpg',
    'rngimagegenerator/lucsuggested7.png',

  ];

  // dont foget to add .png at end bro
  
  // get a random index to select a random image from the array
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  
  // get the img element by its id
  const imgElement = document.getElementById('randomImg');
  
  // set the src attribute of the img element to the randomly selected image URL
  imgElement.src = imageUrls[randomIndex];
  






  
  document.addEventListener("DOMContentLoaded", function() {
    // Triggering the animation on page load
    var iconElement = document.querySelector('.icon');
    if (iconElement) {
      iconElement.style.animation = 'flip-card 3s ease-in-out infinite';
      iconElement.style.animationPlayState = 'running';
    }
  });



