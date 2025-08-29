import Navbar from '@/components/Navbar';
import React from 'react'
import Detail from '../Detail';

async function DetailContainer(props: any) {
  const memeId = props.params.id;
  const res = await fetch('https://api.imgflip.com/get_memes');
  const result = await res.json();
  const meme = result.data.memes.find((meme: any) => meme.id === memeId);
  console.log(meme);

  return (
    <div>
      <Navbar />
      {meme ? <Detail data={meme} /> : <p>Meme not found</p>}
    </div>
  );
}

export default DetailContainer;
