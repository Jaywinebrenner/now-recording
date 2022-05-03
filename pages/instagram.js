import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import Link from 'next/link';

const feed = () => {
    return (
        <InstagramFeed token="your_access_token"  counter="6"/>  
    )
}

export default function Instagram() {
  return (
    <div className='ig'>
        <h1>Instagram Feed</h1>
       {feed()}

    </div>
  )
}
