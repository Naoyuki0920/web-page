"use client";

export default function Movie() {
  return (
    <video
      controls
      muted
      autoPlay
      loop
      playsInline
      preload="metadata"
      width="200"
      style={{ borderRadius: "10px" }}
    >
      <source src="/movie/app.mp4" type="video/mp4" />
      お使いのブラウザは動画の再生に対応していません。
    </video>
  );
}
