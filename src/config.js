// Edit the greeting, message, photo captions and local music filenames here.
export const config = {
  friendName: "Priyadharini",
  welcomeTitle: "Hey Beautiful! ❤️",
  welcomeText: "I have created a little surprise just for you...",
  greeting: "Happy Diwali, Beautiful! ✨",
  wish: "May your life always shine brighter than a thousand diyas. May happiness, success, love, and beautiful memories fill every moment of your life.",
  appreciationTitle: "Some People Make Life More Beautiful...",
  appreciation: [
    "You are one of those special people who bring happiness and positivity just by being themselves.",
    "You deserve endless smiles, wonderful opportunities, and all the beautiful things life has to offer."
  ],
  memories: [
    { src: "/images/photo-1.jpg", caption: "A little moment to remember" },
    { src: "/images/photo-2.jpg", caption: "Smiles that make memories" },
    { src: "/images/photo-3.jpg", caption: "A beautiful day" },
    { src: "/images/photo-4.jpg", caption: "Keep this happy moment" },
    { src: "/images/photo-5.jpg", caption: "More memories, more smiles" },
    { src: "/images/photo-6.jpg", caption: "A moment worth keeping" }
  ],
  letter: `Dear Friend,

On this beautiful Diwali, I just want to wish you endless happiness, success, peace, and countless reasons to smile.

Keep shining, keep smiling, and never stop being the wonderful person you are.

You deserve all the happiness in the world.

Happy Diwali! ❤️`,
  finalLine: "May your future be as bright as these fireworks and your smile never fade.",
songs: [
  {
    title: "Bigil celebration track",
    src: `${import.meta.env.BASE_URL}music/Bigil.mp3`
  },
  {
    title: "Magale",
    src: `${import.meta.env.BASE_URL}music/magale.mp3`
  }
]}