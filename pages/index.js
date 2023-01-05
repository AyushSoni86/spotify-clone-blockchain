import Login from "../components/Login";
import Homepage from "./homepage";

export default function Home() {
  return (
    <div>
      <audio
        id="audio-element"
        hidden
        playsInline
        onVolumeChange={(e) => updateVolume(e)}
        onTimeUpdate={(e) => updateProgress(e)}
      />
      <Homepage />
      {/* temporarily render page */}
    </div>
  );
}
