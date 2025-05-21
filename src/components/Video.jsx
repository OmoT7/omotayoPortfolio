export default function Video({source}) {
    return(
    <div className={`relative overflow-hidden rounded-xl shadow-lg border border-slate-700`}>
        <video controls className="w-full h-auto">
          <source src={source} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    )
}  