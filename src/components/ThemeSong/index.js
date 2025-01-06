const ThemeSong = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>Press play to hear Burney's Hot Chicken theme song</div>
      <audio controls loop>
        <source src="audio/bhc-song.mp3" type="audio/ogg" />
        <source src="audio/bhc-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <small>produced by hip-hop artist Preacher Bishop</small>
    </div>
  );
  
  export default ThemeSong;
  