import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay muted loop playsInline src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1771414718~exp=1771418318~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=66181304376b57e09b180afb00b83bad752ad7f3588b021e7f320c12fb6f4682&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video
