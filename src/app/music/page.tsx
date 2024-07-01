import React from "react"

export default function MusicPage() {
    return (
      <main>
        <center><h1>These are Safe&apos;s Playlists</h1> </center>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
      <iframe
        src="https://open.spotify.com/embed/playlist/3xCCJhNwpKhbJywVsm4Ruh?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px' }}
      />
    </div>
    

    <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
      <iframe
        src="https://open.spotify.com/embed/playlist/6UIZXpCdb7Ch2IwQxQmA2b?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px' }}
      />
    </div>
        
    <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
      <iframe
        src="https://open.spotify.com/embed/playlist/4xZ3ewvvJ21xMZqo3KBSMb?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px' }}
      />
    </div>
    
  
    </div> 
      </main>
    )
  }
  