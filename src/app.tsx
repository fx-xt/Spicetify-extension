import { io } from "socket.io-client";

function sleep(ms:number) {return new Promise(resolve => setTimeout(resolve, ms));}

async function main() {
  await sleep(200)
  const socket = io("http://0.0.0.0:61242");
  socket.on("connect", () => {
    const engine = socket.io.engine;
    console.log(engine.transport.name);
    socket.emit("command",Spicetify.Queue.track.contextTrack.metadata.title)
  });
  socket.on("input", async(data) => {
    // console.log(data)
    switch(data){
      case "getdata":
        socket.emit("command",Spicetify.Queue.track.contextTrack.metadata.title)
    }
  });
  // Try to make this work with the package structure
  // Spicetify.Player.addEventListener("songchange",()=>{
  //   console.log("HUH")
  //   socket.emit("command",Spicetify.Queue.track.contextTrack.metadata.title)
  // })
}

export default main;

