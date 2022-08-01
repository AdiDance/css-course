import React from 'react'
import { NftCard } from '../nft-card'
import './index.scss'

const nfts = [
  {
    id: 'nft-1',
    image: 'https://s.yimg.com/os/creatr-uploaded-images/2022-06/963b0fb0-e437-11ec-b659-2799483566a1',
    title: 'Yacht Monkey',
    price: '23000',
    badge: 'new',
  },
  {
    id: 'nft-2',
    image: 'https://s.yimg.com/os/creatr-uploaded-images/2022-06/963b0fb0-e437-11ec-b659-2799483566a1',
    title: 'Wild Monkey',
    price: '23000',
    badge: 'new',
  },
  {
    id: 'nft-3',
    image: 'https://s.yimg.com/os/creatr-uploaded-images/2022-06/963b0fb0-e437-11ec-b659-2799483566a1',
    title: 'Crazy Monkey',
    price: '23000',
    badge: 'new',
  },
  {
    id: 'nft-4',
    image: 'https://s.yimg.com/os/creatr-uploaded-images/2022-06/963b0fb0-e437-11ec-b659-2799483566a1',
    title: 'Yacht Monkey',
    price: '23000',
    badge: 'new',
  },
  {
    id: 'nft-5',
    image: 'https://s.yimg.com/os/creatr-uploaded-images/2022-06/963b0fb0-e437-11ec-b659-2799483566a1',
    title: 'Jocker Monkey',
    price: '23000',
    badge: 'sold',
  },
  {
    id: 'nft-6',
    image: 'https://s.yimg.com/os/creatr-uploaded-images/2022-06/963b0fb0-e437-11ec-b659-2799483566a1',
    title: 'Yacht Monkey',
    price: '23000',
    badge: 'sold',
  },
]

export const NFTList = () => {
  return (
    <>
    <div className='nft-list'>
      <div className="container">
        <div className='row'>
          {nfts.map(item => <div className='col-12 col-sm-6 col-lg-4'><NftCard nft={item}/></div>)}
        </div>
      </div>
    </div>

{/* <div className='nft-list'>
<div className="container">
  <div className='row'>
    <div className='col-special'><NftCard/></div>
    <div className='col-special'><NftCard/></div>
    <div className='col-special'><NftCard/></div>
    <div className='col-special'><NftCard/></div>
    <div className='col-special'><NftCard/></div>
  </div>
</div>
</div> */}
</>
  )
}


// sm - 576+
// md - 768+
// lg - 992+
// xl - 1200+