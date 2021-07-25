function VideoDetails({ details, clearVideoDetails }) {
  const downloadPath = `/download/${details.videoId}`;

  return (
    <div className="w-full rounded-lg bg-gray-100 p-5 shadow">
      <iframe
        title={details.title}
        className="w-full h-96 mb-6"
        src={details.embedUrl}
      ></iframe>
      <div className="mb-6">
        <h1 className="text-lg font-bold text-gray-900">{details.title}</h1>
        <h2 className="text-md text-gray-500 mb-3">{details.author}</h2>
        <div className="text-sm text-gray-500 flex items-center">
          <p className="mr-3">
            <i className="fas fa-eye mr-1 text-yellow-500"></i>
            {details.viewCount}
          </p>
          <p className="mr-3">
            <i className="fas fa-thumbs-up mr-1 text-green-500"></i>
            {details.likes}
          </p>
          <p className="mr-3">
            <i className="fas fa-thumbs-down mr-1 text-red-500"></i>
            {details.dislikes}
          </p>
        </div>
      </div>
      <a
        href={`${downloadPath}/mp4`}
        className="w-full bg-red-500 rounded-lg p-3 text-white font-bold text-xl flex justify-center items-center mb-3 hover:bg-red-400 transition duration-200"
        download
      >
        <i className="fas fa-video mr-3"></i> Download Video
      </a>
      <a
        href={`${downloadPath}/mp3`}
        className="w-full bg-red-500 rounded-lg p-3 text-white font-bold text-xl flex justify-center items-center mb-3 hover:bg-red-400 transition duration-200"
        download
      >
        <i className="fas fa-music mr-3"></i> Download Audio
      </a>
      <button
        onClick={clearVideoDetails}
        className="w-full border-gray-500 border rounded-lg p-3 text-gray-500 text-xl hover:bg-gray-200 transition duration-200"
      >
        Go Back
      </button>
    </div>
  );
}

export default VideoDetails;
