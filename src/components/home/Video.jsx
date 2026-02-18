import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay muted loop playsInline src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1771395939~exp=1771399539~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=4087598acd23ad0b24ae77f5aa3c176a6c3707d02592e2e9451535f1c5cd03b0&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video
